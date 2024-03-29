import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiHome(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_3058_35799)">
        <g clipPath="url(#clip1_3058_35799)">
          <path
            d="M5 12H3L12 3L21 12H19"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.5304 13 14.0391 13.2107 14.4142 13.5858C14.7893 13.9609 15 14.4696 15 15V21"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3058_35799">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3058_35799">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
