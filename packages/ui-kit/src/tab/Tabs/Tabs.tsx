import React from 'react';

import { StyledTab, StyledTabs } from './styled';

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
    <StyledTabs value={value} onChange={onChange}>
      {tabs.map(({ value, label }) => (
        <StyledTab key={label} value={value} label={label} />
      ))}
    </StyledTabs>
  );
}
