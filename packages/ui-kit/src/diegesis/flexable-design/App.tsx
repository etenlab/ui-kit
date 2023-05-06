import React, { useState } from 'react';
import { Button, Drawer } from '@mui/material';
import { UIConfigContextProvider } from './UIConfigProvider';
import { FlexibleHome } from './Home';
import { UIConfigControlPanel } from './UIConfigControlPanel';
import { FlexibleEntryDetail } from './entry-details';

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
      <FlexibleHome id="home" parentPath="/" />
      <FlexibleEntryDetail id="entry-detail" parentPath="/entry-detail" />
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
