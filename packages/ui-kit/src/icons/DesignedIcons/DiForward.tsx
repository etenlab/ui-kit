import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiForward(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_3276_24129)">
        <g clipPath="url(#clip1_3276_24129)">
          <path
            d="M15 11L19 15M19 15L15 19M19 15H8C6.93913 15 5.92172 14.5786 5.17157 13.8284C4.42143 13.0783 4 12.0609 4 11C4 9.93913 4.42143 8.92172 5.17157 8.17157C5.92172 7.42143 6.93913 7 8 7H9"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3276_24129">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3276_24129">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
