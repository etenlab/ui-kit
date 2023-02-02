import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ThemeProvider,
  EmojiPicker,
  EmojiClickData,
} from '../../../packages/ui-kit/src';

export default {
  title: 'Partial/Crowd Bible/EmojiPicker',
  component: EmojiPicker,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof EmojiPicker>;

const Template: ComponentStory<typeof EmojiPicker> = (args) => (
  <EmojiPicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onEmojiClick: (emojiData: EmojiClickData) => alert(emojiData.emoji),
};
