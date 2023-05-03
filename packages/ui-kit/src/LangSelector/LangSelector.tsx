import React, { useEffect, useState } from 'react';

import { Stack } from '@mui/material';

import tags from 'language-tags';
import { Autocomplete } from '../input';

const PADDING = 20;
const PADDING_SMALL = 12;
const DESCRIPTIONS_JOINER = '/';

type LangSelectorProps = {
  onChange(
    langTag: string | null,
    selected: {
      lang: Lang;
      dialect: Dialect | undefined;
      region: Region | undefined;
    },
  ): void;
  setLoadingState?(isLoading: boolean): any;
};
type Lang = {
  tag: string;
  descriptions: Array<string>;
};
type Dialect = {
  tag: string;
  descriptions: Array<string>;
};
type Region = {
  tag: string;
  descriptions: Array<string>;
};

type LangsRegistry = {
  langs: Array<Lang>;
  dialects: Array<Dialect>;
  regions: Array<Region>;
};

enum TagTypes {
  LANGUAGE = 'language',
  REGION = 'region',
  DIALECT = 'variant',
}
enum TagSpecialDescriptions {
  PRIVATE_USE = 'Private use',
}

export function LangSelector({ onChange, setLoadingState }: LangSelectorProps) {
  const [langsRegistry, setLangsRegistry] = useState<LangsRegistry>({
    langs: [],
    dialects: [],
    regions: [],
  });

  const [selectedLang, setSelectedLang] = useState<Lang>();
  const [selectedDialect, setSelectedDialect] = useState<Dialect>();
  const [selectedRegion, setSelectedRegion] = useState<Region>();

  useEffect(() => {
    if (setLoadingState) {
      setLoadingState(true);
    }
    const allTags = tags.search(/.*/);
    const langs: Array<Lang> = [];
    const dialects: Array<Dialect> = [];
    const regions: Array<Region> = [];

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

    setLangsRegistry({
      langs,
      dialects,
      regions,
    });
    if (setLoadingState) {
      setLoadingState(false);
    }
  }, [setLoadingState]);

  useEffect(() => {
    if (!selectedLang) return;
    let langTag = selectedLang.tag;
    selectedRegion && (langTag += '-' + selectedRegion.tag);
    selectedDialect && (langTag += '-' + selectedDialect.tag);
    onChange(tags(langTag).format(), {
      lang: selectedLang,
      dialect: selectedDialect,
      region: selectedRegion,
    });
  }, [onChange, selectedDialect, selectedLang, selectedRegion]);

  const handleSetLanguage = (
    _event: React.SyntheticEvent<Element, Event>,
    value: Lang | null,
  ) => {
    if (!value) return;
    setSelectedLang(value);
    console.log(value);
  };

  const handleSetDialect = (
    _event: React.SyntheticEvent<Element, Event>,
    value: Dialect | null,
  ) => {
    if (!value) return;
    setSelectedDialect(value);
    console.log(value);
  };
  const handleSetRegion = (
    _event: React.SyntheticEvent<Element, Event>,
    value: Region | null,
  ) => {
    if (!value) return;
    setSelectedRegion(value);
    console.log(value);
  };

  return (
    <Stack width={'100%'} padding={`${PADDING}px`} gap={`${PADDING_SMALL}px`}>
      <Autocomplete
        label="Language"
        options={langsRegistry.langs}
        getOptionLabel={(option) =>
          option.descriptions.join(DESCRIPTIONS_JOINER)
        }
        onChange={handleSetLanguage}
      />

      <Stack direction="row" width={'100%'} gap={`${PADDING_SMALL}px`}>
        <Autocomplete
          label="Dialect"
          options={langsRegistry.dialects}
          getOptionLabel={(option) =>
            option.descriptions.join(DESCRIPTIONS_JOINER)
          }
          onChange={handleSetDialect}
          fullWidth
        />
        <Autocomplete
          label="Nation/Region/Geo"
          options={langsRegistry.regions}
          getOptionLabel={(option) =>
            option.descriptions.join(DESCRIPTIONS_JOINER)
          }
          onChange={handleSetRegion}
          fullWidth
        />
      </Stack>
    </Stack>
  );
}
