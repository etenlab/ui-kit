import React, { Fragment } from 'react';

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
};

export function ButtonList({
  withUnderline = false,
  items,
  onClick,
  label,
}: ButtonListProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <List>
        <FormLabel color="gray">{label}</FormLabel>
        {items.map(({ label, value }) => (
          <Fragment key={label}>
            <ListItemButton onClick={() => onClick(value)}>
              <ListItemText primary={label} color="dark" />
            </ListItemButton>
            {withUnderline ? <Divider /> : null}
          </Fragment>
        ))}
      </List>
    </Box>
  );
}
