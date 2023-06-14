import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiText(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        d="M6.0625 5.71875V4H18.0625V5.71875H13.0313V20H11.0938V5.71875H6.0625Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
