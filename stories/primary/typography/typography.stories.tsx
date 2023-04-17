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
  children: (
    <>
      font-weight: 600
      <br />
      font-size: 28
      <br />
      line-height: 36px
      <br />
      letter-spacing: -0.02em
      <br />
      text-transform: capitalize
      <br />
      <br />
      <br />
      {text}
    </>
  ),
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
  children: (
    <>
      font-weight: 600
      <br />
      font-size: 20
      <br />
      line-height: 28px
      <br />
      letter-spacing: -0.02em
      <br />
      text-transform: capitalize
      <br />
      <br />
      <br />
      {text}
    </>
  ),
};

export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
  children: (
    <>
      font-weight: 600
      <br />
      font-size: 18
      <br />
      line-height: 28px
      <br />
      letter-spacing: -0.02em
      <br />
      text-transform: capitalize
      <br />
      <br />
      <br />
      {text}
    </>
  ),
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  variant: 'subtitle1',
  children: (
    <>
      font-weight: 600
      <br />
      font-size: 14
      <br />
      line-height: 20px display: flex
      <br />
      align-Ttems: center
      <br />
      <br />
      <br />
      {text}
    </>
  ),
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  variant: 'subtitle2',
  children: (
    <>
      font-weight: 700
      <br />
      font-size: 14
      <br />
      line-height: 18px display: flex
      <br />
      align-Ttems: center
      <br />
      <br />
      <br />
      {text}
    </>
  ),
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: 'body1',
  children: (
    <>
      font-weight: 400
      <br />
      font-size: 16
      <br />
      line-height: 26px
      <br />
      display: flex
      <br />
      align-items: center
      <br />
      <br />
      <br />
      {text}
    </>
  ),
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: 'body2',
  children: (
    <>
      font-weight: 400
      <br />
      font-size: 14
      <br />
      line-height: 20px
      <br />
      display: flex
      <br />
      align-items: center
      <br />
      <br />
      <br />
      {text}
    </>
  ),
};

export const Body3 = Template.bind({});
Body3.args = {
  variant: 'body3',
  children: (
    <>
      font-weight: 400
      <br />
      font-size: 12
      <br />
      line-height: 20px
      <br />
      display: flex
      <br />
      align-items: center
      <br />
      <br />
      <br />
      {text}
    </>
  ),
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
  children: (
    <>
      font-weight: 400
      <br />
      font-size: 14
      <br />
      line-height: 30px
      <br />
      display: flex
      <br />
      align-items: center
      <br />
      <br />
      <br />
      {text}
    </>
  ),
};

export const Overline = Template.bind({});
Overline.args = {
  variant: 'overline',
  children: (
    <>
      font-weight: 600
      <br />
      font-size: 14
      <br />
      line-height: 20px
      <br />
      display: flex
      <br />
      align-items: center
      <br />
      letter-spacing: 0.05em
      <br />
      text-transform: uppercase
      <br />
      <br />
      <br />
      {text}
    </>
  ),
};
