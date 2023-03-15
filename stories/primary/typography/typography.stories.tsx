import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { Typography } from '../../../packages/ui-kit/src/typography';

export default {
  title: 'Primary/Typography',
  component: Typography,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof Typography>;

const text =
  'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  children: text,
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
  children: text,
};

export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
  children: text,
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  variant: 'subtitle1',
  children: text,
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  variant: 'subtitle2',
  children: text,
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: 'body1',
  children: text,
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: 'body2',
  children: text,
};

export const Body3 = Template.bind({});
Body3.args = {
  variant: 'body3',
  children: text,
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
  children: text,
};

export const Overline = Template.bind({});
Overline.args = {
  variant: 'overline',
  children: text,
};
