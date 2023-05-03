import React, { useState } from 'react';
import { Button, Drawer } from '@mui/material';

import { UIConfigContextProvider } from './UIConfigProvider';

import { FlexibleHome } from './Home';
import { UIConfigControlPanel } from './UIConfigControlPanel';
import { FlexibleActionButtons } from '../entry-details';
// import { FlexibleFooter } from './Footer';
// import { FlexibleAppLogo } from './AppLogo';

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
      {/* <FlexibleHome id="home" parentPath="/" /> */}
      {/* <FlexibleFooter id="flexiblefooter" parentPath="/" />
      <FlexibleAppLogo id="flexibleapplogo" parentPath="/" /> */}
      <FlexibleActionButtons id="flexibleActionBtns" parentPath="/" />
      <Button onClick={toggleDrawer} variant="contained">
        Open Setting Panel
      </Button>
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
