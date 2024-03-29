import React, { ReactNode } from 'react';

import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import { useColorModeContext } from '../../ThemeProvider';

interface Action {
  /**
   * Action name ex: Edit, Delete
   */
  name: string;
  /**
   * Event Handler
   */
  action(): void;
  /**
   * Icon Element
   */
  icon: ReactNode;
}

type ActionListProps = {
  /**
   * Actions should render at this component
   */
  actions: Action[];
};

/**
 * Primary UI for Actions of Post (Edit, Delete, Reply)
 */
export function ActionList({ actions }: ActionListProps) {
  const { getColor } = useColorModeContext();

  return (
    <List
      dense
      sx={{ width: '100%', maxWidth: 160, bgColor: getColor('bg-main') }}
    >
      {actions.map(({ name, action, icon }) => {
        return (
          <ListItem
            key={name}
            secondaryAction={icon}
            sx={{ padding: '0!important' }}
          >
            <ListItemButton onClick={action}>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
