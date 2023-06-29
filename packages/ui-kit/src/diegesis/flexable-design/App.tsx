import React, { useState } from 'react';
import { Button, Drawer } from '@mui/material';
import { UIConfigContextProvider } from './UIConfigProvider';
import { FlexibleHome } from './Home';
import { UIConfigControlPanel } from './UIConfigControlPanel';
import { FlexibleEntryDetail, mockEntryDetailPageProps } from './entry-details';
import {
  FlexibleEntriesListPage,
  MOCK_ENTRIES_TOP_CONTROLS_PROPS,
} from './entries-list';
import { FlexiblePage } from './Page';

export function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen((open) => !open);
  };

  return (
    <UIConfigContextProvider>
      <Button onClick={toggleDrawer} variant="contained">
        Open Setting Panel
      </Button>
      <FlexibleHome id="home-page" parentPath="/" />
      <FlexibleEntriesListPage
        id="list-page"
        parentPath="/list"
        topControlProps={MOCK_ENTRIES_TOP_CONTROLS_PROPS as any}
      />
      <FlexibleEntryDetail
        {...mockEntryDetailPageProps}
        id="entry-detail-page"
        parentPath="/entry-detail"
      />
      <FlexiblePage id="flexible-page" parentPath="/flexible-page" />
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 'calc(100% - 50px)',
            background: '#eee',
            padding: '20px',
          },
        }}
      >
        <UIConfigControlPanel />
      </Drawer>
    </UIConfigContextProvider>
  );
}
