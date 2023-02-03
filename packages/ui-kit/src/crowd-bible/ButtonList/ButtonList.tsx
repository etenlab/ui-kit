import React, { Fragment } from 'react';

import {
  Box,
  List,
  Divider,
  ListItem,
  FormLabel,
  ListItemText,
} from '@mui/material';

type Item = {
  label: string;
  onClick(): void;
};

type ButtonListProps = {
  withUnderline?: boolean;
  items: Item[];
  label: string;
};

export function ButtonList({
  withUnderline = false,
  items,
  label,
}: ButtonListProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <List>
        <FormLabel color="gray">{label}</FormLabel>
        {items.map(({ label, onClick }) => (
          <Fragment key={label}>
            <ListItem button onClick={onClick}>
              <ListItemText primary={label} color="dark" />
            </ListItem>
            {withUnderline ? <Divider /> : null}
          </Fragment>
        ))}
      </List>
    </Box>
  );
}
