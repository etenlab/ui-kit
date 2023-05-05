import { Stack } from '@mui/material';
import React from 'react';
import { BasicFlexibleProps, BasicUIConfig } from '../UIConfigProvider';
import { withFlexible } from '../withFlexible';

export type SectionDividerConfig = BasicUIConfig & {
  contents: {};
  styles: {
    height: string;
    color: string;
  };
};
export const defaultSectionDividerConfig: SectionDividerConfig = {
  componentName: SectionDivider.name,
  contents: {},
  styles: {
    height: '3',
    color: '#60D0B2',
  },
};
export type SectionDividerProps = BasicFlexibleProps<SectionDividerConfig> & {};
export function SectionDivider({
  uiConfig = defaultSectionDividerConfig,
}: SectionDividerProps) {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        height: uiConfig.styles.height,
        backgroundColor: uiConfig.styles.color,
      }}
    ></Stack>
  );
}
export const FlexibleSectionDivider = withFlexible<
  SectionDividerConfig,
  SectionDividerProps
>(SectionDivider, defaultSectionDividerConfig);
