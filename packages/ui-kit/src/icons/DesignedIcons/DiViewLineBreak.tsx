import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiViewLineBreak(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_3276_24133)">
        <g clipPath="url(#clip1_3276_24133)">
          <path
            d="M9 11L5 15M5 15L9 19M5 15H16C17.0609 15 18.0783 14.5786 18.8284 13.8284C19.5786 13.0783 20 12.0609 20 11C20 9.93913 19.5786 8.92172 18.8284 8.17157C18.0783 7.42143 17.0609 7 16 7H15"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3276_24133">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3276_24133">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
