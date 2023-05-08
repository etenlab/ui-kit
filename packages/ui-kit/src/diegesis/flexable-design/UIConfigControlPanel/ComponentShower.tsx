import React, { ReactNode } from 'react';

import { Typography, Divider } from '@mui/material';

export function ComponentShower({
  component,
  componentName,
}: {
  component: ReactNode;
  componentName: string;
}) {
  return (
    <>
      <Typography
        variant="h6"
        sx={(theme) => ({ color: theme.palette.primary.main })}
      >
        Flexible Component {`(${componentName})`}
      </Typography>
      <Divider />
      {component ? (
        component
      ) : (
        <Typography sx={(theme) => ({ color: theme.palette.error.main })}>
          Not Exists Any Component To Render
        </Typography>
      )}
    </>
  );
}
