import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ThemeProvider,
  DiAttach,
  AddAttachmentButton,
} from '../../../packages/ui-kit/src';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Primary/Button/AddAttachmentButton',
  component: AddAttachmentButton,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          background: '#ccc',
          width: '500px',
          padding: '3em',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof AddAttachmentButton>;

const Template: ComponentStory<typeof AddAttachmentButton> = (args) => (
  <AddAttachmentButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onChange: () => {
    alert('Changed');
  },
  children: <DiAttach />,
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <AddAttachmentButton onChange={() => alert('Changed')}>
          <DiAttach />
        </AddAttachmentButton>,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  onChange: () => {
    alert('Changed');
  },
  children: <DiAttach style={{ fontSize: '24px', padding: '3px' }} />,
  disabled: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <AddAttachmentButton onChange={() => alert('Changed')} disabled>
          <DiAttach />
        </AddAttachmentButton>,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
