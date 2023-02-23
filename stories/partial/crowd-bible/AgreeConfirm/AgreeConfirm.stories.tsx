import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { AgreeConfirm } from '../../../../packages/ui-kit/src/crowd-bible';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Crowd Bible/AgreeConfirm',
  component: AgreeConfirm,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof AgreeConfirm>;

const Template: ComponentStory<typeof AgreeConfirm> = (args) => (
  <AgreeConfirm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onClick: (agree: 'agree' | 'disagree') => alert(agree),
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <AgreeConfirm onClick={(agree: 'agree' | 'disagree') => alert(agree)} />
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
