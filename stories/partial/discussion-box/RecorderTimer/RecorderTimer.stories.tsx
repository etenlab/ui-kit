import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, Stack } from '@mui/material';
import { ThemeProvider } from '../../../../packages/ui-kit/src';
import {
  RecorderTimer,
  RecorderStatus,
} from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/RecorderTimer',
  component: RecorderTimer,
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
} as ComponentMeta<typeof RecorderTimer>;

const Template: ComponentStory<typeof RecorderTimer> = (args) => {
  const [recorderStatus, setRecorderStatus] = useState<RecorderStatus>('new');

  return (
    <Stack>
      <RecorderTimer recorderStatus={recorderStatus} />
      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="outlined"
          onClick={() => setRecorderStatus('recording')}
        >
          Start
        </Button>
        <Button variant="outlined" onClick={() => setRecorderStatus('paused')}>
          Pause
        </Button>
        <Button variant="outlined" onClick={() => setRecorderStatus('new')}>
          Finish
        </Button>
      </Stack>
    </Stack>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(<RecorderTimer recorderStatus="new" />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
