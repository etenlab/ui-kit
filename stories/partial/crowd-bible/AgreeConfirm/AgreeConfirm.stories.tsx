import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider, AgreeConfirm } from '../../../../packages/ui-kit/src';

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
