import React, { Fragment, ReactNode } from 'react';

import {
  Box,
  List,
  Divider,
  ListItemButton,
  FormLabel,
  ListItemText,
} from '@mui/material';

type Item = {
  label: string;
  value: unknown;
};

type ButtonListProps = {
  withUnderline?: boolean;
  items: Item[];
  label: string;
  onClick(selected: unknown): void;
  Icon?: ReactNode | null;
};

export function ButtonList({
  withUnderline = false,
  items,
  onClick,
  label,
  Icon,
}: ButtonListProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <List>
        <FormLabel color="gray">{label}</FormLabel>
        {items.map(({ label, value }) => (
          <Fragment key={label}>
            <ListItemButton onClick={() => onClick(value)}>
              <ListItemText primary={label} color="dark" />
              {Icon ? Icon : null}
            </ListItemButton>
            {withUnderline ? <Divider /> : null}
          </Fragment>
        ))}
      </List>
    </Box>
  );
}
