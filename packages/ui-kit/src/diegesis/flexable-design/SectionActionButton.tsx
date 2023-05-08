import React from 'react';
import { Button } from '@mui/material';

import {
  BasicUIConfig,
  BasicFlexibleProps,
} from './UIConfigProvider/UIConfigProvider';
import { withFlexible } from './withFlexible';

interface SectionActionButtonConfig extends BasicUIConfig {
  contents: {
    actionBtnText?: string;
    defaultActionBtnHref?: string;
  };
  styles: {
    color: string;
    minWidth: string;
    minHeight: string;
    paddingLeft: string;
    paddingRight: string;
    backgroundColor: string;
    fontSize: string;
    textTransform: string;
    borderRadius: string;
    boxShadow: string;
    hoveredBackgroundColor: string;
    hoveredBoxShadow: string;
  };
}

export const defaultSectionActionButtonConfig: SectionActionButtonConfig = {
  componentName: 'SectionActionButton',
  contents: {
    actionBtnText: 'Browse content',
    defaultActionBtnHref: '/',
  },
  styles: {
    color: '#ffffff',
    minWidth: '312px',
    minHeight: '70px',
    paddingLeft: '30px',
    paddingRight: '30px',
    backgroundColor: '#60D0B2',
    fontSize: '21px',
    textTransform: 'none',
    borderRadius: '40px',
    boxShadow: 'none',
    hoveredBackgroundColor: '#4EAA91',
    hoveredBoxShadow: 'none',
  },
};

export interface SectionActionButtonProps
  extends BasicFlexibleProps<SectionActionButtonConfig> {}

export function SectionActionButton({
  uiConfig = defaultSectionActionButtonConfig,
}: SectionActionButtonProps) {
  return (
    <Button
      size="large"
      variant="contained"
      sx={{
        color: uiConfig.styles.color,
        minWidth: uiConfig.styles.minWidth,
        minHeight: uiConfig.styles.minHeight,
        paddingLeft: uiConfig.styles.paddingLeft,
        paddingRight: uiConfig.styles.paddingRight,
        backgroundColor: uiConfig.styles.backgroundColor,
        fontSize: uiConfig.styles.fontSize,
        textTransform: uiConfig.styles.textTransform,
        borderRadius: uiConfig.styles.borderRadius,
        boxShadow: uiConfig.styles.boxShadow,
        ':hover': {
          backgroundColor: uiConfig.styles.hoveredBackgroundColor,
          boxShadow: uiConfig.styles.hoveredBoxShadow,
        },
      }}
    >
      {uiConfig.contents.actionBtnText}
    </Button>
  );
}

export const FlexibleSectionActionButton = withFlexible<
  SectionActionButtonConfig,
  SectionActionButtonProps
>(SectionActionButton, defaultSectionActionButtonConfig);
