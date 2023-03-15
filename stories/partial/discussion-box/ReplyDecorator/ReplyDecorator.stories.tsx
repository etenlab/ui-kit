import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import {
  ReplyDecorator,
  StandardDecoratorProps,
} from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/ReplyDecorator',
  component: ReplyDecorator,
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
} as ComponentMeta<typeof ReplyDecorator>;

const Template: ComponentStory<typeof ReplyDecorator> = (args) => (
  <ReplyDecorator {...args} />
);

const standardProps: StandardDecoratorProps = {
  url: '/images.jpg',
  username: 'Hiroshi Tanaka',
  plainText: 'This is sample plain text.',
  files: [],
  edited: false,
};

export const Standard = Template.bind({});
Standard.args = {
  data: {
    ...standardProps,
  },
};
Standard.parameters = {
  docs: {
    source: {
      code: jsxToString(<ReplyDecorator data={standardProps} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const StandardAlter = Template.bind({});
StandardAlter.args = {
  data: {
    ...standardProps,
    url: '',
    edited: true,
    files: [
      {
        id: 0,
      },
      {
        id: 1,
      },
    ],
  },
};
StandardAlter.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <ReplyDecorator
          data={{
            ...standardProps,
            url: '',
            edited: true,
            files: [
              {
                id: 0,
              },
              {
                id: 1,
              },
            ],
          }}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Deleted = Template.bind({});
Deleted.args = {
  deleted: true,
};
Standard.parameters = {
  docs: {
    source: {
      code: jsxToString(<ReplyDecorator deleted />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
