import {
  List,
  ListItem,
  Button,
  Typography,
  ListSubheader,
  Stack,
} from '@mui/material';
import React, { ReactNode } from 'react';
import { useColorModeContext } from '../../ThemeProvider';

export type CardsMenuItemType = {
  value: string;
  title: ReactNode;
  description?: string;
  startIcon: ReactNode;
  disabled?: boolean;
};

type CardsMenutemProps = {
  item: CardsMenuItemType;
  onClick(value: string): void;
};

function CardsMenutem({ item, onClick }: CardsMenutemProps) {
  const { getColor } = useColorModeContext();

  const { title, description, startIcon, disabled, value } = item;

  return (
    <ListItem sx={{ padding: '6px 20px' }}>
      <Button
        variant="outlined"
        onClick={() => {
          onClick(value);
        }}
        disabled={disabled}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: '14px 12px',
          paddingLeft: '24px',
          gap: '10px',
          width: '100%',
          borderColor: getColor('middle-gray'),
          borderRadius: '10px',
          backgroundColor: getColor('disable'),
          textTransform: 'none',
          textAlign: 'start',
        }}
      >
        {startIcon}
        <Stack
          gap="5px"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Typography
            variant="subtitle1"
            color="text.dark"
            sx={{ display: 'inline-block' }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ display: 'inline-block' }}>
            {description}
          </Typography>
        </Stack>
      </Button>
    </ListItem>
  );
}

type CardsMenuProps = {
  label: string;
  onClick(value: string): void;
  items: CardsMenuItemType[];
};

export function CardsMenu({ label, items, onClick }: CardsMenuProps) {
  const { getColor } = useColorModeContext();

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
          </Stack>
        </ListSubheader>
      }
    >
      {items.map((item) => (
        <CardsMenutem item={item} key={item.value} onClick={onClick} />
      ))}
    </List>
  );
}
