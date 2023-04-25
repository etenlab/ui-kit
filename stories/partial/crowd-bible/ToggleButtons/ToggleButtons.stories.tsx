import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { ToggleButtons } from '../../../../packages/ui-kit/src/crowd-bible';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Crowd Bible/ToggleButtons',
  component: ToggleButtons,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          background: '#eee',
          width: '500px',
          border: '1px solid black',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof ToggleButtons>;

const Template: ComponentStory<typeof ToggleButtons> = (args) => (
  <ToggleButtons {...args} />
);

const buttonsParams = [
  { caption: 'button1', value: 'b1' },
  { caption: 'button2', value: 'b2' },
];

export const Primary = Template.bind({});
Primary.args = {
  buttonsParams,
  colorSelected: 'red',
  buttonSxProps: {},
  groupSxProps: {},
  onChange: (selectedValue: string | null) => alert(selectedValue),
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <ToggleButtons
          buttonsParams={buttonsParams}
          onChange={(selectedValue: string | null) => alert(selectedValue)}
          colorSelected={'red'}
          buttonSxProps={{}}
          groupSxProps={{}}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
