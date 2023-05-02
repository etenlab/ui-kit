import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryPaper } from '../../../StoryPaper';
import { ThemeProvider } from '../../../../packages/ui-kit/src';

import { App } from '@eten-lab/ui-kit/src/diegesis/flexable-design';

export default {
  title: 'Partial/Flexible',
  component: App,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <StoryPaper>
          <Story />
        </StoryPaper>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const App1 = Template.bind({});
App1.args = {};
