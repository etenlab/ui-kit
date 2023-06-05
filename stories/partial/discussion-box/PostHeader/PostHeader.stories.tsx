import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ThemeProvider,
  BiPencil,
  BiShare,
  DiRemove,
  logger,
} from '../../../../packages/ui-kit/src';
import { Popover } from '@mui/material';
import {
  ActionList,
  PostHeader,
} from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/PostHeader',
  component: PostHeader,
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
} as ComponentMeta<typeof ActionList>;

const actions = [
  {
    name: 'Edit Post',
    action: () => alert('Clicked'),
    icon: <BiPencil style={{ fontSize: 16 }} />,
  },
  {
    name: 'Reply',
    action: () => alert('Clicked'),
    icon: <BiShare style={{ fontSize: 16 }} />,
  },
  {
    name: 'Delete Post',
    action: () => alert('Clicked'),
    icon: <DiRemove style={{ fontSize: 16, color: 'red' }} />,
  },
];

const Template: ComponentStory<typeof PostHeader> = (args) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <PostHeader {...args} openActionList={handlePopoverOpen} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <ActionList actions={actions} />
      </Popover>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  username: 'Hiroshi Tanaka',
  avatar: '/images.jpg',
  date: new Date(),
  openActionList: () => logger.info('Clicked'),
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <PostHeader
          username="Hiroshi Tanaka"
          avatar="/images.jpg"
          date={new Date()}
          openActionList={() => alert('Clicked')}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
