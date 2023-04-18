import React, { useState, ChangeEventHandler, ReactNode } from 'react';

import { CiSearch } from '../../icons';
import { SearchInput } from '../../input';
import { useColorModeContext } from '../../ThemeProvider';

import {
  Stack,
  IconButton,
  List,
  ListSubheader,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';

export type ButtonListItemType = {
  value: string;
  label: string;
  color?: string;
  isStartIcon?: boolean;
  isEndIcon?: boolean;
  disabled?: boolean;
};

type ButtonListItemComProps = {
  onClick(): void;
  label: string;
  itemColor?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  withUnderline?: boolean;
  disabled?: boolean;
};

function ListItemCom({
  onClick,
  label,
  startIcon,
  endIcon,
  itemColor,
  withUnderline,
  disabled,
}: ButtonListItemComProps) {
  const { getColor } = useColorModeContext();

  console.log(startIcon);
  const startIconCom = startIcon ? (
    <ListItemIcon sx={{ minWdith: '45px' }}>{startIcon}</ListItemIcon>
  ) : null;

  const endIconCom = endIcon ? endIcon : null;

  const underlineCom = withUnderline ? (
    <Divider sx={{ margin: '0 20px' }} />
  ) : null;

  const color = itemColor ? itemColor : getColor('dark');

  return (
    <>
      <ListItemButton
        sx={{ paddingLeft: '20px', paddingRight: '20px' }}
        onClick={onClick}
        disabled={disabled}
      >
        {startIconCom}
        <ListItemText
          primary={
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body1" sx={{ color: `${color} !important` }}>
                {label}
              </Typography>
              {endIconCom}
            </Stack>
          }
        />
      </ListItemButton>
      {underlineCom}
    </>
  );
}

type ButtonListProps = {
  label: string;
  toolBtnGroup?: ReactNode;
  withUnderline?: boolean;
  items: ButtonListItemType[];
  onClick(value: string): void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  search?: {
    value: string;
    onChange(str: string): void;
    placeHolder: string;
  };
};

export function ButtonList({
  label,
  search,
  toolBtnGroup,
  withUnderline = false,
  items,
  onClick,
  startIcon,
  endIcon,
}: ButtonListProps) {
  const { getColor } = useColorModeContext();

  const [isShownSearchInput, setIsShownSearchInput] = useState<boolean>(false);

  const handleToggleSearchInput = () => {
    setIsShownSearchInput((shown) => !shown);
  };

  const handleChangeSearchInput: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    search?.onChange(event.target.value);
  };

  const searchBtnCom = search ? (
    <IconButton onClick={handleToggleSearchInput}>
      <CiSearch />
    </IconButton>
  ) : null;

  const searchInputCom =
    search && isShownSearchInput ? (
      <SearchInput
        label={search.placeHolder}
        value={search.value}
        onChange={handleChangeSearchInput}
        fullWidth
        sx={{ padding: '20px 0' }}
      />
    ) : null;

  const toolBtnComs =
    search || toolBtnGroup ? (
      <Stack
        direction="row"
        gap="16px"
        justifyContent="flex-start"
        alignItems="center"
      >
        {searchBtnCom}
        {toolBtnGroup ? toolBtnGroup : null}
      </Stack>
    ) : null;

  return (
    <List
      component="nav"
      sx={{ padding: '0' }}
      subheader={
        <ListSubheader
          component="div"
          sx={{ padding: '6px 20px', backgroundColor: getColor('white') }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="overline" sx={{ opacity: 0.5 }}>
              {label}
            </Typography>
            {toolBtnComs}
          </Stack>
          {searchInputCom}
        </ListSubheader>
      }
    >
      {items.map(
        ({ value, label, color, isStartIcon, isEndIcon, disabled }) => {
          const startIconCom = isStartIcon !== false ? startIcon : null;
          const endIconCom = isEndIcon !== false ? endIcon : null;

          return (
            <ListItemCom
              key={value}
              label={label}
              onClick={() => onClick(value)}
              startIcon={startIconCom}
              endIcon={endIconCom}
              withUnderline={withUnderline}
              itemColor={color}
              disabled={disabled}
            />
          );
        },
      )}
    </List>
  );
}
