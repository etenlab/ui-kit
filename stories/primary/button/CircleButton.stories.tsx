import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ThemeProvider,
  CircleButton,
  BsFillPlayFill,
  CiPause1,
  colors,
  Typography,
} from '../../../packages/ui-kit/src';

export default {
  title: 'Primary/Button/CircleButton',
  component: CircleButton,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof CircleButton>;

const Template: ComponentStory<typeof CircleButton> = (args) => (
  <CircleButton {...args} />
);

export const PlayButton = Template.bind({});
PlayButton.args = {
  icon: (
    <BsFillPlayFill
      style={{ color: colors.white, fontSize: 40, paddingLeft: 3 }}
    />
  ),
  onClick: () => alert('Clicked Circle Button!'),
};

export const PauseButton = Template.bind({});
PauseButton.args = {
  icon: <CiPause1 style={{ color: colors.white, strokeWidth: '1.2px' }} />,
  onClick: () => alert('Clicked Circle Button!'),
};

export const TextButton = Template.bind({});
TextButton.args = {
  icon: (
    <Typography variant="body3" sx={{ fontWeight: 800, color: colors.white }}>
      Aa
    </Typography>
  ),
  color: 'green',
  circleSize: '30px',
  onClick: () => alert('Clicked Circle Button!'),
};
