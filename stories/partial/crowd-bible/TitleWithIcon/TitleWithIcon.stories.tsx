import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { TitleWithIcon } from '../../../../packages/ui-kit/src/crowd-bible';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Crowd Bible/TitleWithIcon',
  component: TitleWithIcon,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof TitleWithIcon>;

const Template: ComponentStory<typeof TitleWithIcon> = (args) => (
  <TitleWithIcon {...args} />
);

export const TitleWithIcons = Template.bind({});
TitleWithIcons.args = {
  label: 'Verses',
  withBackIcon: true,
  onClose: () => alert('Clicked Close Button'),
  onBack: () => alert('Clicked Back Button'),
};
TitleWithIcons.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <TitleWithIcon
          label="Verses"
          withBackIcon
          onClose={() => alert('Clicked Close Button')}
          onBack={() => alert('Clicked Back Button')}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const TitleWithoutBackIcon = Template.bind({});
TitleWithoutBackIcon.args = {
  label: 'Chapters',
  withBackIcon: false,
  withCloseIcon: true,
  onClose: () => alert('Clicked Close Button'),
  onBack: () => alert('Clicked Back Button'),
};
TitleWithoutBackIcon.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <TitleWithIcon
          label="Chapters"
          withBackIcon={false}
          onClose={() => alert('Clicked Close Button')}
          onBack={() => alert('Clicked Back Button')}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const TitleWithoutCloseIcon = Template.bind({});
TitleWithoutCloseIcon.args = {
  label: 'Chapters',
  withBackIcon: true,
  withCloseIcon: false,
  onClose: () => alert('Clicked Close Button'),
  onBack: () => alert('Clicked Back Button'),
};
TitleWithoutCloseIcon.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <TitleWithIcon
          label="Chapters"
          withCloseIcon={false}
          onClose={() => alert('Clicked Close Button')}
          onBack={() => alert('Clicked Back Button')}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
