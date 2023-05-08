import React from 'react';

import {
  BasicUIConfig,
  BasicFlexibleProps,
} from './UIConfigProvider/UIConfigProvider';
import { withFlexible } from './withFlexible';

interface MenuIconConfig extends BasicUIConfig {
  contents: {};
  styles: {
    defaultWidth: string;
    defaultHeight: string;
    iconColor: string;
  };
}

export const defaultMenuIconConfig: MenuIconConfig = {
  componentName: 'MenuIcon',
  contents: {
    title: 'Open source Bibles resources',
  },
  styles: {
    defaultWidth: '49px',
    defaultHeight: '40px',
    iconColor: '#60D0B2',
  },
};

export interface MenuIconProps extends BasicFlexibleProps<MenuIconConfig> {
  width?: number;
  height?: number;
  className?: string;
  onClick?: React.MouseEventHandler;
}

export function MenuIcon({
  width,
  height,
  className,
  onClick,
  uiConfig = defaultMenuIconConfig,
}: MenuIconProps) {
  const realWidth = width ? width : uiConfig.styles.defaultWidth;
  const realHeight = height ? height : uiConfig.styles.defaultHeight;

  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={realWidth}
      height={realHeight}
      viewBox="1272 44 49 40"
    >
      <g data-name="Group 98">
        <path
          d="M1321 44h-49"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="4"
          stroke={uiConfig.styles.iconColor}
          fill="transparent"
          data-name="Line 28"
        />
        <path
          d="M1321 84h-49"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="4"
          stroke={uiConfig.styles.iconColor}
          fill="transparent"
          data-name="Line 29"
        />
        <path
          d="M1321 64h-49"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke={uiConfig.styles.iconColor}
          fill="transparent"
          data-name="Line 30"
        />
      </g>
    </svg>
  );
}

export const FlexibleMenuIcon = withFlexible<MenuIconConfig, MenuIconProps>(
  MenuIcon,
  defaultMenuIconConfig,
);
