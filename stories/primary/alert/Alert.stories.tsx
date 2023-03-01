import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider, Alert } from '../../../packages/ui-kit/src';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Primary/Alert',
  component: Alert,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  variant: 'standard',
  severity: 'success',
  children: 'Your feedback has been sent!',
};
Success.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Alert variant="standard" severity="success">
          Your feedback has been sent!
        </Alert>
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
