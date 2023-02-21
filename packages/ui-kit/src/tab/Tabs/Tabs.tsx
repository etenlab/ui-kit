import React from 'react';

import { StyledTab, StyledTabs } from './styled';
import { Box } from '@mui/material';
import { colors } from '../../ThemeProvider';

type TabType = {
  value: unknown;
  label: string;
};

type TabsProps = {
  tabs: TabType[];
  value: unknown;
  onChange(event: React.SyntheticEvent, newValue: unknown): void;
};

export function Tabs({ tabs, value, onChange }: TabsProps) {
  return (
    <Box sx={{ borderBottom: `1px solid ${colors['disable']}` }}>
      <StyledTabs value={value} onChange={onChange}>
        {tabs.map(({ value, label }) => (
          <StyledTab key={label} value={value} label={label} />
        ))}
      </StyledTabs>
    </Box>
  );
}
