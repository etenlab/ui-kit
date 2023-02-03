import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ThemeProvider,
  LabelWithIcon,
  BiCommentAdd,
  FiX,
} from '../../../../packages/ui-kit/src';

export default {
  title: 'Partial/Crowd Bible/LabelWithIcon',
  component: LabelWithIcon,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof LabelWithIcon>;

const Template: ComponentStory<typeof LabelWithIcon> = (args) => (
  <LabelWithIcon {...args} />
);

export const LabelWithCommentIcon = Template.bind({});
LabelWithCommentIcon.args = {
  label: 'translation',
  icon: <BiCommentAdd />,
  color: 'blue-primary',
};

export const LabelWithCloseIcon = Template.bind({});
LabelWithCloseIcon.args = {
  label: 'translation',
  icon: <FiX />,
  color: 'gray',
};
