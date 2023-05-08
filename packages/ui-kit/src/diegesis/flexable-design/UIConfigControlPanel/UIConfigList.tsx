import React, { ReactNode } from 'react';

import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';

export type ListItemType = {
  value: string;
  name: string;
};

function FlexibleListItem({
  item,
  icon,
  onClick,
}: {
  item: ListItemType;
  icon: ReactNode;
  onClick(): void;
}) {
  return (
    <ListItemButton onClick={onClick} sx={{ paddingLeft: 0, paddingRight: 0 }}>
      <ListItemIcon sx={{ minWidth: '30px' }}>{icon}</ListItemIcon>
      <ListItemText
        primary={item.name}
        sx={{ '& .MuiListItemText-primary': { fontSize: '10px !important' } }}
      />
    </ListItemButton>
  );
}

export function UIConfigList({
  title,
  items,
  icon,
  onClick,
  moreCom,
}: {
  title: string;
  items: ListItemType[];
  icon: ReactNode;
  moreCom?: ReactNode;
  onClick(item: ListItemType): void;
}) {
  return (
    <Paper
      variant="outlined"
      sx={{ background: '#e5e5e5', padding: '0px 5px' }}
    >
      <List
        sx={{
          width: '100%',
          height: '100%',
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ background: 'transparent', paddingRight: 0, paddingLeft: 0 }}
            disableSticky
          >
            {title}
          </ListSubheader>
        }
      >
        {items.map((item) => (
          <FlexibleListItem
            item={item}
            icon={icon}
            key={item.value}
            onClick={() => onClick(item)}
          />
        ))}
        {moreCom}
      </List>
    </Paper>
  );
}
