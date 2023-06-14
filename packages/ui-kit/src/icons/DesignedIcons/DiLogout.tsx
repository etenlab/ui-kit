import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiLogout(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clip-path="url(#clip0_3058_19057)">
        <g clip-path="url(#clip1_3058_19057)">
          <path
            d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 12H21M21 12L18 9M21 12L18 15"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3058_19057">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3058_19057">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
