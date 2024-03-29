import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from '../../../packages/ui-kit/src/tab/Tabs';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Primary/Tabs',
  component: Tabs,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '800px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [value, setValue] = useState<number>(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return <Tabs {...args} value={value} onChange={handleChange} />;
};

export const TwoTabs = Template.bind({});
TwoTabs.args = {
  tabs: [
    { value: 1, label: 'All Translations' },
    { value: 2, label: 'My Translations (2)' },
  ],
};
TwoTabs.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Tabs
          tabs={[
            { value: 1, label: 'All Translations' },
            { value: 2, label: 'My Translations (2)' },
          ]}
          value={1}
          onChange={(event: React.SyntheticEvent, newValue: number) => {}}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const ThreeTabs = Template.bind({});
ThreeTabs.args = {
  tabs: [
    { value: 1, label: 'Tab 1' },
    { value: 2, label: 'Tab 2' },
    { value: 3, label: 'Tab 3' },
  ],
};
ThreeTabs.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Tabs
          tabs={[
            { value: 1, label: 'All Translations' },
            { value: 2, label: 'My Translations (2)' },
            { value: 3, label: 'Tab 3' },
          ]}
          value={1}
          onChange={(event: React.SyntheticEvent, newValue: number) => {}}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const FourTabs = Template.bind({});
FourTabs.args = {
  tabs: [
    { value: 1, label: 'Tab 1' },
    { value: 2, label: 'Tab 2' },
    { value: 3, label: 'Tab 3' },
    { value: 4, label: 'Tab 4' },
  ],
};
FourTabs.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Tabs
          tabs={[
            { value: 1, label: 'All Translations' },
            { value: 2, label: 'My Translations (2)' },
            { value: 3, label: 'Tab 3' },
            { value: 4, label: 'Tab 4' },
          ]}
          value={1}
          onChange={(event: React.SyntheticEvent, newValue: number) => {}}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
