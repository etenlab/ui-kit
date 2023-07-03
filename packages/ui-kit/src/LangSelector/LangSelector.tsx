import React, { useCallback, useEffect, useState } from 'react';

import { FilterOptionsState, Stack, Typography } from '@mui/material';

import tags from 'language-tags';
import { Autocomplete } from '../input';

export const DESCRIPTIONS_JOINER = '/';
export const NOT_DEFINED_PLACEHOLDER = '- not defined -';
export const LOADING_TAG_PLACEHOLDER = {
  tag: 'loading',
  descriptions: ['Loading data...'],
} as Dialect & Region & Lang;

export type LanguageInfo = {
  lang: Lang;
  dialect?: Dialect | undefined;
  region?: Region | undefined;
};

export type LangSelectorProps = {
  label?: string;
  selected?: LanguageInfo;
  fullRendered?: boolean;
  onChange(langTag: string | null, selected: LanguageInfo): void;
  setLoadingState?(isLoading: boolean): any;
  withInscriptions?: boolean;
  gap?: string;
};
export interface TagInfo {
  tag: string | null;
  descriptions?: Array<string>;
}
export type Lang = Omit<TagInfo, 'tag'> & { tag: string }; // make tag mandatory for Lang tag
export type Region = TagInfo;
export type Dialect = TagInfo;

type LangsRegistry = {
  langs: Array<Lang>;
  dialects: Array<Dialect>;
  regions: Array<Region>;
};

const emptyLangsRegistry: LangsRegistry = {
  langs: [LOADING_TAG_PLACEHOLDER],
  dialects: [LOADING_TAG_PLACEHOLDER],
  regions: [LOADING_TAG_PLACEHOLDER],
};

enum TagTypes {
  LANGUAGE = 'language',
  REGION = 'region',
  DIALECT = 'variant',
}
enum TagSpecialDescriptions {
  PRIVATE_USE = 'Private use',
}

export function LangSelector({
  label,
  selected,
  fullRendered = false,
  onChange,
  setLoadingState,
  withInscriptions: withInscriptios = true,
  gap = '12px',
}: LangSelectorProps) {
  const [langsRegistry, setLangsRegistry] =
    useState<LangsRegistry>(emptyLangsRegistry);

  const [selectedLang, setSelectedLang] = useState<Lang | null>(null);
  const [selectedDialect, setSelectedDialect] = useState<Dialect | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  useEffect(() => {
    if (setLoadingState) {
      setLoadingState(true);
    }
    // make it async to test and prepare for possible language library change to async
    const getLangsRegistry = async (): Promise<LangsRegistry> => {
      return new Promise((resolve) => {
        const allTags = tags.search(/.*/);
        const langs: Array<Lang> = [];
        const dialects: Array<Dialect> = [
          { tag: null, descriptions: [NOT_DEFINED_PLACEHOLDER] },
        ];
        const regions: Array<Region> = [
          { tag: null, descriptions: [NOT_DEFINED_PLACEHOLDER] },
        ];
        for (const currTag of allTags) {
          if (
            currTag.deprecated() ||
            currTag.descriptions().includes(TagSpecialDescriptions.PRIVATE_USE)
          ) {
            continue;
          }

          if (currTag.type() === TagTypes.LANGUAGE) {
            langs.push({
              tag: currTag.format(),
              descriptions: currTag.descriptions(),
            });
          }
          if (currTag.type() === TagTypes.REGION) {
            regions.push({
              tag: currTag.format(),
              descriptions: currTag.descriptions(),
            });
          }
          if (currTag.type() === TagTypes.DIALECT) {
            dialects.push({
              tag: currTag.format(),
              descriptions: currTag.descriptions(),
            });
          }
        }
        langs.sort(sortTagInfosFn);
        dialects.sort(sortTagInfosFn);
        regions.sort(sortTagInfosFn);
        resolve({
          langs,
          dialects,
          regions,
        });
      });
    };

    getLangsRegistry().then((lr) => {
      setLangsRegistry(lr);
      if (setLoadingState) {
        setLoadingState(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSelectedLang(selected?.lang || null);
    setSelectedDialect(selected?.dialect || null);
    setSelectedRegion(selected?.region || null);
  }, [selected]);

  useEffect(() => {
    if (!selectedLang) return;
    let langTag = selectedLang.tag;
    selectedRegion?.tag && (langTag += '-' + selectedRegion.tag);
    selectedDialect?.tag && (langTag += '-' + selectedDialect.tag);
    onChange(tags(langTag).format(), {
      lang: selectedLang,
      dialect: selectedDialect?.tag ? selectedDialect : undefined,
      region: selectedRegion?.tag ? selectedRegion : undefined,
    });
  }, [onChange, selectedDialect, selectedLang, selectedRegion]);

  const handleSetLanguage = useCallback(
    (_event: React.SyntheticEvent<Element, Event>, value: Lang | null) => {
      if (!value) return;
      setSelectedLang(value);
    },
    [],
  );

  const handleSetDialect = useCallback(
    (_event: React.SyntheticEvent<Element, Event>, value: Dialect | null) => {
      if (!value) return;
      setSelectedDialect(value);
    },
    [],
  );

  const handleSetRegion = useCallback(
    (_event: React.SyntheticEvent<Element, Event>, value: Region | null) => {
      if (!value) return;
      setSelectedRegion(value);
    },
    [],
  );

  const customFilterOptions = useCallback(
    <T extends Lang | Dialect | Region>(
      options: T[],
      state: FilterOptionsState<T>,
    ): T[] => {
      if (!options || !Array.isArray(options)) return [];
      const filteredOptions = options
        .filter((a) => {
          if (!a.descriptions) a.descriptions = [];
          return a.descriptions
            .join()
            .toUpperCase()
            .includes(state.inputValue.toUpperCase());
        })
        .sort((a, b) => {
          const optionA = a.descriptions!.join(DESCRIPTIONS_JOINER);
          const optionB = b.descriptions!.join(DESCRIPTIONS_JOINER);
          if (state.inputValue && state.inputValue.length > 0) {
            return optionA.length - optionB.length;
          }
          return sortTagInfosFn(a, b);
        });
      return filteredOptions;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [langsRegistry.dialects, langsRegistry.langs, langsRegistry.regions],
  );

  const labelCom = label ? (
    <Typography variant="overline" sx={{ opacity: 0.5 }}>
      {label}
    </Typography>
  ) : null;
  const extraCom = fullRendered ? (
    <Stack direction="row" width={'100%'} gap={gap}>
      <Autocomplete<Dialect>
        disabled={!selectedLang}
        label={withInscriptios ? 'Dialect' : undefined}
        value={selectedDialect}
        options={langsRegistry.dialects}
        filterOptions={customFilterOptions}
        getOptionLabel={(option) =>
          option.descriptions
            ? option.descriptions.join(DESCRIPTIONS_JOINER)
            : ''
        }
        onChange={handleSetDialect}
        isOptionEqualToValue={(option, value) => {
          return option.tag === value.tag;
        }}
        fullWidth
      />
      <Autocomplete<Region>
        disabled={!selectedLang}
        label={withInscriptios ? 'Nation/Region/Geo' : undefined}
        value={selectedRegion}
        options={langsRegistry.regions}
        filterOptions={customFilterOptions}
        getOptionLabel={(option) =>
          option.descriptions
            ? option.descriptions.join(DESCRIPTIONS_JOINER)
            : ''
        }
        onChange={handleSetRegion}
        isOptionEqualToValue={(option, value) => {
          return option.tag === value.tag;
        }}
        fullWidth
      />
    </Stack>
  ) : null;

  return (
    <Stack width={'100%'} padding={'0'} gap={gap}>
      {labelCom}
      <Autocomplete<Lang>
        label={withInscriptios ? 'Language' : undefined}
        value={selectedLang}
        options={langsRegistry.langs}
        filterOptions={customFilterOptions}
        getOptionLabel={(option) =>
          option.descriptions
            ? option.descriptions.join(DESCRIPTIONS_JOINER)
            : ''
        }
        onChange={handleSetLanguage}
        isOptionEqualToValue={(option, value) => {
          return option.tag === value.tag;
        }}
      />
      {extraCom}
    </Stack>
  );
}

const sortTagInfosFn = (t1: TagInfo, t2: TagInfo) => {
  if (t1.descriptions && t1.descriptions[0] === NOT_DEFINED_PLACEHOLDER) {
    return -1;
  }
  if (t2.descriptions && t2.descriptions[0] === NOT_DEFINED_PLACEHOLDER) {
    return 1;
  }
  if (
    t1.descriptions &&
    t2.descriptions &&
    t1.descriptions[0] > t2.descriptions[0]
  ) {
    return 1;
  }
  if (
    t1.descriptions &&
    t2.descriptions &&
    t1.descriptions[0] < t2.descriptions[0]
  ) {
    return -1;
  }
  return 0;
};
