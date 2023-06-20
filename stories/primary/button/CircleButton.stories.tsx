import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ThemeProvider,
  CircleButton,
  DiPlay,
  DiPause,
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
  icon: <DiPlay style={{ color: '#fff', fontSize: 40, paddingLeft: 3 }} />,
  onClick: () => alert('Clicked Circle Button!'),
};

export const PauseButton = Template.bind({});
PauseButton.args = {
  icon: <DiPause style={{ color: '#fff', strokeWidth: '1.2px' }} />,
  onClick: () => alert('Clicked Circle Button!'),
};

export const TextButton = Template.bind({});
TextButton.args = {
  icon: (
    <Typography variant="body3" color="text.white" sx={{ fontWeight: 800 }}>
      Aa
    </Typography>
  ),
  color: 'green',
  circleSize: '30px',
  onClick: () => alert('Clicked Circle Button!'),
};
