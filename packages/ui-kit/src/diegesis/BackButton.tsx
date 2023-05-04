import { Button } from '@mui/material';
import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import {
  BasicFlexibleProps,
  BasicUIConfig,
} from './flexable-design/UIConfigProvider';
import { withFlexible } from './flexable-design/withFlexible';

export type BackBtnConfig = BasicUIConfig & {
  contents: {
    className?: string;
    btnText?: string;
    href?: string;
    onClick?: (e: any) => void;
  };
  styles: {
    textTransform: string;
    fontWeight: string;
    fontSize: string;
    textDecoration: string;
    textUnderlineOffset: string;
    textDecorationColor: string;
    fontFamily: string;
    padding: string;
    hoverTextDecoration: string;
    iconColor: string;
  };
};
export type BackBtnProps = BasicFlexibleProps<BackBtnConfig> & {};
export const defaultBackBtnConfig: BackBtnConfig = {
  componentName: BackButton.name,
  contents: {
    className: '',
    btnText: 'Back',
    href: '/',
    onClick: (e: any) => {},
  },
  styles: {
    textTransform: 'none',
    fontWeight: '300',
    fontSize: '1.2rem',
    textDecoration: 'underline',
    textUnderlineOffset: '0.2rem',
    textDecorationColor: '#60D0B2',
    fontFamily: 'Noto Serif Display',
    padding: '0',
    hoverTextDecoration: 'underline',
    iconColor: '#60D0B2',
  },
};
export function BackButton({ uiConfig = defaultBackBtnConfig }: BackBtnProps) {
  return (
    <Button
      color={'dark'}
      startIcon={<BsChevronLeft color={uiConfig.styles.iconColor} />}
      href={uiConfig.contents.href}
      onClick={uiConfig.contents.onClick}
      sx={{
        textTransform: uiConfig.styles.textTransform,
        fontWeight: uiConfig.styles.fontWeight,
        fontSize: uiConfig.styles.fontSize,
        textDecoration: uiConfig.styles.textDecoration,
        textUnderlineOffset: uiConfig.styles.textUnderlineOffset,
        textDecorationColor: uiConfig.styles.textDecorationColor,
        fontFamily: uiConfig.styles.fontFamily,
        padding: uiConfig.styles.padding,
        ':hover': {
          textDecoration: uiConfig.styles.hoverTextDecoration,
        },
      }}
    >
      {uiConfig.contents.btnText || 'Back'}
    </Button>
  );
}

export const FlexibleBackButton = withFlexible<BackBtnConfig, BackBtnProps>(
  BackButton,
  defaultBackBtnConfig,
);
