import React from 'react';

import { SvgIcon, type SvgIconProps } from '@mui/material';

export function DiComment(props: SvgIconProps) {

  return (
    <SvgIcon {...props}>
      <g clip-path="url(#clip0_3276_24104)">
        <g clip-path="url(#clip1_3276_24104)">
          <path
            d="M4 21V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H17C17.7957 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V14C20 14.7957 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7957 17 17 17H8L4 21Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 11H14"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 9V13"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3276_24104">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_3276_24104">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
