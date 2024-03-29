import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiViewRow(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_3276_24119)">
        <g clipPath="url(#clip1_3276_24119)">
          <path
            d="M20 18L20 6C20 4.89543 19.1046 4 18 4L6 4C4.89543 4 4 4.89543 4 6L4 18C4 19.1046 4.89543 20 6 20L18 20C19.1046 20 20 19.1046 20 18Z"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12L4 12"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3276_24119">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3276_24119">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(24) rotate(90)"
          />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
