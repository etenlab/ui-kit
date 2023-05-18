import React from 'react';

import {
  BasicUIConfig,
  BasicFlexibleProps,
  FlexibleComponent,
} from './UIConfigProvider/UIConfigProvider';
import { withFlexible } from './withFlexible';

import { AiOutlineFire } from 'react-icons/ai';

interface AppLogoConfig extends BasicUIConfig {
  contents: {
    iconType: string;
    title: string;
  };
  styles: {
    iconColor: string;
    titleColor: string;
    lightModeColor: string;
    defaultWidth: string;
    defaultHeight: string;
    fontFamily: string;
  };
}

export const defaultAppLogoConfig: AppLogoConfig = {
  componentName: 'AppLogo',
  contents: {
    iconType: 'tree',
    title: 'Diegesis',
  },
  styles: {
    iconColor: '#60D0B2',
    titleColor: '#31373A',
    lightModeColor: '#ffffff',
    defaultWidth: '240px',
    defaultHeight: '52.348px',
    fontFamily: 'Helvetica-Bold, Helvetica',
  },
};

export interface AppLogoProps extends BasicFlexibleProps<AppLogoConfig> {
  className?: string;
  width?: string;
  height?: string;
  variant?: 'primary' | 'light';
  href?: string;
}

export const AppLogo: FlexibleComponent<AppLogoProps> = ({
  width,
  height,
  variant = 'primary',
  uiConfig = defaultAppLogoConfig,
  ...props
}) => {
  const realWidth = width ? width : uiConfig.styles.defaultWidth;
  const realHeight = height ? height : uiConfig.styles.defaultHeight;

  const iconColor =
    variant === 'primary'
      ? uiConfig.styles.iconColor
      : uiConfig.styles.lightModeColor;
  const titleColor =
    variant === 'primary'
      ? uiConfig.styles.titleColor
      : uiConfig.styles.lightModeColor;

  switch (uiConfig.contents.iconType) {
    case 'bee': {
      return (
        <a href={props.href || '/'} style={{ display: 'flex' }}>
          <AiOutlineFire style={{ fontSize: realHeight, color: iconColor }} />
          <span
            style={{
              color: titleColor,
              fontFamily: uiConfig.styles.fontFamily,
            }}
          >
            {uiConfig.contents.title}
          </span>
        </a>
      );
    }
    default: {
      return (
        <a href={props.href || '/'} style={{ display: 'flex' }}>
          <svg
            className={props?.className}
            width={realWidth}
            height={realHeight}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 239 52.349"
          >
            <g
              id="Group_116"
              data-name="Group 116"
              transform="translate(-88 -45.584)"
            >
              <text
                id="Diegesis"
                transform="translate(143 49.932)"
                fill={titleColor}
                fontSize="40"
                fontFamily={uiConfig.styles.fontFamily}
                fontWeight="700"
                letterSpacing="-0.04em"
              >
                <tspan x="15.334" y="31">
                  {uiConfig.contents.title}
                </tspan>
              </text>
              <path
                id="Path_2"
                data-name="Path 2"
                d="M31.751,30.749l12.11-12.111,9.11-9.11-.96-.96L31.29,29.288V0H29.932V29.288L9.212,8.568l-.96.96L29.472,30.749H0v4.528H61.256V30.749Z"
                transform="translate(88 45.583)"
                fill={iconColor}
              />
            </g>
          </svg>
        </a>
      );
    }
  }
};
AppLogo.componentName = 'AppLogo';

export const FlexibleAppLogo = withFlexible<AppLogoConfig, AppLogoProps>(
  AppLogo,
  defaultAppLogoConfig,
);
