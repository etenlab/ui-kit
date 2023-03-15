import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AgreeConfirmButton } from '../../../packages/ui-kit/src/button';
import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';

export default {
  title: 'Partial/AgreeConfirmButton',
  component: AgreeConfirmButton,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof AgreeConfirmButton>;

const Template: ComponentStory<typeof AgreeConfirmButton> = (args) => (
  <AgreeConfirmButton {...args} />
);

export const Agree = Template.bind({});
Agree.args = {
  kind: 'agree',
};

export const AgreeWithIcon = Template.bind({});
AgreeWithIcon.args = {
  kind: 'agree',
  withIcon: true,
};

export const FullWidthAgreeWithIcon = Template.bind({});
FullWidthAgreeWithIcon.args = {
  kind: 'agree',
  withIcon: true,
  fullWidth: true,
};

export const DisabledAgree = Template.bind({});
DisabledAgree.args = {
  kind: 'agree',
  disabled: true,
};

export const Disagree = Template.bind({});
Disagree.args = {
  kind: 'disagree',
};

export const DisagreeWithIcon = Template.bind({});
DisagreeWithIcon.args = {
  kind: 'disagree',
  withIcon: true,
};

export const FullWidthDisagreeWithIcon = Template.bind({});
FullWidthDisagreeWithIcon.args = {
  kind: 'disagree',
  withIcon: true,
  fullWidth: true,
};

export const DisabledDisagree = Template.bind({});
DisabledDisagree.args = {
  kind: 'disagree',
  disabled: true,
};
