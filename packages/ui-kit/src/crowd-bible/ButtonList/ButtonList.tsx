import React, { useState, ChangeEventHandler, ReactNode } from 'react';

import { DiSearch } from '../../icons';
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
  label: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  color?: string;
  disabled?: boolean;
};

type ButtonListItemComProps = {
  item: ButtonListItemType;
  withUnderline?: boolean;
  onClick(): void;
};

function ListItemCom({ item, withUnderline, onClick }: ButtonListItemComProps) {
  const { getColor } = useColorModeContext();

  const { label, startIcon, endIcon, color, disabled } = item;

  const startIconCom = startIcon ? (
    <ListItemIcon sx={{ minWdith: '45px' }}>{startIcon}</ListItemIcon>
  ) : null;

  const endIconCom = endIcon ? endIcon : null;

  const underlineCom = withUnderline ? (
    <Divider sx={{ margin: '0 20px' }} />
  ) : null;

  const itemColor = color ? color : getColor('dark');

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
              <Typography
                variant="body1"
                sx={{ color: `${itemColor} !important` }}
              >
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
  onClick(value: string): void;
  search?: {
    value: string;
    onChange(str: string): void;
    placeHolder: string;
  };
  items: ButtonListItemType[];
};

export function ButtonList({
  label,
  search,
  toolBtnGroup,
  withUnderline = false,
  items,
  onClick,
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
      <DiSearch />
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
          sx={{ padding: '6px 20px', backgroundColor: getColor('bg-main') }}
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
      {items.map((item) => {
        return (
          <ListItemCom
            item={item}
            key={item.value}
            onClick={() => onClick(item.value)}
            withUnderline={withUnderline}
          />
        );
      })}
    </List>
  );
}
