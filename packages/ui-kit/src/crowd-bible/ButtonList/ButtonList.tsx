import React, { useState, ChangeEventHandler, ReactNode } from 'react';

import { CiSearch } from '../../icons';
import { SearchInput } from '../../input';

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

type Item = {
  value: unknown;
  label: string;
};

type ListItemComProps = {
  onClick(): void;
  label: string;
  itemIcon?: ReactNode;
  withUnderline?: boolean;
};

function ListItemCom({
  onClick,
  label,
  itemIcon,
  withUnderline,
}: ListItemComProps) {
  const iconCom = itemIcon ? <ListItemIcon>{itemIcon}</ListItemIcon> : null;

  const underlineCom = withUnderline ? (
    <Divider sx={{ margin: '0 20px' }} />
  ) : null;

  return (
    <>
      <ListItemButton
        // sx={{ paddingLeft: 0, paddingRight: 0 }}
        onClick={onClick}
      >
        {iconCom}
        <ListItemText primary={label} />
      </ListItemButton>
      {underlineCom}
    </>
  );
}

type ButtonListProps = {
  label: string;
  search?: {
    value: string;
    onChange(str: string): void;
    placeHolder: string;
  };
  toolBtnGroup?: ReactNode;
  withUnderline?: boolean;
  items: Item[];
  onClick(value: unknown): void;
  itemIcon?: ReactNode;
};

export function ButtonList({
  label,
  search,
  toolBtnGroup,
  withUnderline = false,
  items,
  onClick,
  itemIcon,
}: ButtonListProps) {
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
      <>
        {searchBtnCom}
        {toolBtnGroup ? toolBtnGroup : null}
      </>
    ) : null;

  return (
    <List
      component="nav"
      sx={{ padding: '20px' }}
      subheader={
        <ListSubheader
          component="div"
          sx={{ padding: '6px 20px', backgroundColor: 'transparent' }}
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
      {items.map(({ value, label }) => (
        <ListItemCom
          key={label}
          label={label}
          onClick={() => onClick(value)}
          itemIcon={itemIcon}
          withUnderline={withUnderline}
        />
      ))}
    </List>
  );
}
