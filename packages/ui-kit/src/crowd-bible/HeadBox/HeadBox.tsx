import React, { useState, ChangeEventHandler, ReactNode } from 'react';

import { CiSearch, BiLeftArrowAlt } from '../../icons';
import { SearchInput, Autocomplete } from '../../input';
import { useColorModeContext } from '../../ThemeProvider';

import { Stack, IconButton, Typography } from '@mui/material';

export type LanguageDto = {
  id: string;
  name: string;
};

type HeadBoxProps = {
  back?: {
    action: () => void;
  };
  title: string;
  appTitle?: string;
  search?: {
    value: string;
    onChange: (str: string) => void;
    placeHolder: string;
  };
  languageSelector?: {
    languageList: LanguageDto[];
    source: LanguageDto | null;
    target: LanguageDto | null;
    onChangeSource(lang: LanguageDto | null): void;
    onChangeTarget(lang: LanguageDto | null): void;
  };
  extraNode?: ReactNode;
};

export function HeadBox({
  back,
  title,
  appTitle,
  search,
  languageSelector,
  extraNode,
}: HeadBoxProps) {
  const { getColor } = useColorModeContext();

  const [openSearchBtn, setOpenSearchBtn] = useState<boolean>(false);

  const handleClickSearchButton = () => {
    setOpenSearchBtn((open) => !open);
  };

  const handleChangeSearchInput: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    search?.onChange(event.target.value);
  };

  const handleSetSourceLanguage = (
    _event: React.SyntheticEvent<Element, Event>,
    value: LanguageDto | null,
  ) => {
    languageSelector?.onChangeSource(value);
  };

  const handleSetTargetLanguage = (
    _event: React.SyntheticEvent<Element, Event>,
    value: LanguageDto | null,
  ) => {
    languageSelector?.onChangeTarget(value);
  };

  const backCom = back ? (
    <IconButton onClick={back.action}>
      <BiLeftArrowAlt style={{ fontSize: '24px', color: getColor('dark') }} />
    </IconButton>
  ) : null;

  const titleCom = appTitle ? (
    <Stack>
      <Typography variant="overline" color="text.gray" sx={{ opacity: 0.5 }}>
        {appTitle}
      </Typography>
      <Typography variant="h2" color="text.dark">
        {title}
      </Typography>
    </Stack>
  ) : (
    <Typography variant="h2" color="text.dark">
      {title}
    </Typography>
  );

  const searchCom = search ? (
    <IconButton onClick={handleClickSearchButton}>
      <CiSearch
        style={{ fontSize: '24px', strokeWidth: 1, color: getColor('gray') }}
      />
    </IconButton>
  ) : null;

  const searchInputCom =
    openSearchBtn && search ? (
      <SearchInput
        label={search.placeHolder}
        value={search.value}
        onChange={handleChangeSearchInput}
      />
    ) : null;

  const languageCom = languageSelector ? (
    <>
      <Autocomplete
        label="Choose Source Language"
        options={languageSelector.languageList}
        value={languageSelector.source}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        getOptionLabel={(option) => option.name}
        onChange={handleSetSourceLanguage}
        withLegend={false}
      />
      <Autocomplete
        label="Choose Target Language"
        options={languageSelector.languageList}
        value={languageSelector.target}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        getOptionLabel={(option) => option.name}
        onChange={handleSetTargetLanguage}
        withLegend={false}
      />
    </>
  ) : null;

  const extraCom = extraNode ? extraNode : null;

  return (
    <Stack
      sx={{ padding: '20px', gap: '12px', background: getColor('light-blue') }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          {backCom}
          {titleCom}
        </Stack>
        {searchCom}
      </Stack>
      {searchInputCom}
      {languageCom}
      {extraCom}
    </Stack>
  );
}