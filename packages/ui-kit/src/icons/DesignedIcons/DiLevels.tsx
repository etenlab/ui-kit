import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiLevels(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <rect x="4" y="3" width="3" height="18" rx="1.5" fill="currentColor" />
      <rect x="10" y="14" width="3" height="7" rx="1.5" fill="currentColor" />
      <rect x="16" y="9" width="3" height="12" rx="1.5" fill="currentColor" />
    </SvgIcon>
  );
}
