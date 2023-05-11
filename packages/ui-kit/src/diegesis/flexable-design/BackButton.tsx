import { Button } from '@mui/material';
import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BasicFlexibleProps, BasicUIConfig } from './UIConfigProvider';
import { withFlexible } from './withFlexible';

export type BackBtnConfig = BasicUIConfig & {
  contents: {
    btnText?: string;
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
export const defaultBackBtnConfig: BackBtnConfig = {
  componentName: BackButton.name,
  contents: {
    btnText: 'Back',
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
export type BackBtnProps = BasicFlexibleProps<BackBtnConfig> & {
  href?: string;
  onClick?: (e: any) => void;
};
export function BackButton({
  uiConfig = defaultBackBtnConfig,
  href,
  onClick,
}: BackBtnProps) {
  return (
    <Button
      color={'dark'}
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
          textDecoration: uiConfig.styles.textDecoration,
        },
      }}
      href={href}
      onClick={onClick}
      startIcon={<BsChevronLeft color={uiConfig.styles.iconColor} />}
    >
      {uiConfig.contents.btnText}
    </Button>
  );
}

export const FlexibleBackButton = withFlexible<BackBtnConfig, BackBtnProps>(
  BackButton,
  defaultBackBtnConfig,
);
