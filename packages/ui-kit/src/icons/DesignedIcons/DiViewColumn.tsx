import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiViewColumn(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clip-path="url(#clip0_3276_24124)">
        <g clip-path="url(#clip1_3276_24124)">
          <path
            d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 4V20"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3276_24124">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3276_24124">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
