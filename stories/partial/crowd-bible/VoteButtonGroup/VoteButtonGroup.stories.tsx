import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { VoteButtonGroup } from '../../../../packages/ui-kit/src/crowd-bible';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Crowd Bible/VoteButtonGroup',
  component: VoteButtonGroup,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          border: '1px solid #000',
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
} as ComponentMeta<typeof VoteButtonGroup>;

const Template: ComponentStory<typeof VoteButtonGroup> = (args) => {
  const [like, setLikeClicked] = useState(false);
  const [dislike, setDislikeClicked] = useState(false);

  return (
    <VoteButtonGroup
      {...args}
      like={like}
      dislike={dislike}
      setLike={setLikeClicked}
      setDislike={setDislikeClicked}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  likeCount: 42,
  dislikeCount: 15,
  like: false,
  dislike: false,
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <VoteButtonGroup
          likeCount={42}
          dislikeCount={15}
          like={false}
          dislike={false}
          setLike={() => {}}
          setDislike={() => {}}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
