import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiMenu(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <rect x="2" y="4" width="20" height="3" rx="1.5" fill="currentColor" />
      <rect x="2" y="11" width="20" height="3" rx="1.5" fill="currentColor" />
      <rect x="2" y="18" width="20" height="3" rx="1.5" fill="currentColor" />
    </SvgIcon>
  );
}
