import { Stack, StackProps } from '@mui/material';
import React from 'react';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from '../UIConfigProvider';
import { withFlexible } from '../withFlexible';

export type SectionDividerConfig = BasicUIConfig & {
  contents: {};
  styles: {
    height: string;
    color: string;
    marginTop: string;
    marginBottom: string;
  };
};
export const defaultSectionDividerConfig: SectionDividerConfig = {
  componentName: 'SectionDivider',
  contents: {},
  styles: {
    height: '3',
    color: '#60D0B2',
    marginTop: '0',
    marginBottom: '0',
  },
};
export type SectionDividerProps = BasicFlexibleProps<SectionDividerConfig> &
  Partial<StackProps>;
export const SectionDivider: FlexibleComponent<SectionDividerProps> = (
  props,
) => {
  const { uiConfig = defaultSectionDividerConfig } = props;
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        height: uiConfig.styles.height,
        backgroundColor: uiConfig.styles.color,
        marginTop: uiConfig.styles.marginTop,
        marginBottom: uiConfig.styles.marginBottom,
      }}
      {...props}
    ></Stack>
  );
};
SectionDivider.componentName = defaultSectionDividerConfig.componentName;

export const FlexibleSectionDivider = withFlexible<
  SectionDividerConfig,
  SectionDividerProps
>(SectionDivider, defaultSectionDividerConfig);
