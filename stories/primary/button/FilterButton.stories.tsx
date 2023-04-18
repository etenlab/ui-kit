import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { FilterButton } from '../../../packages/ui-kit/src/button';
import { buildDocs } from '../../common';
import { StoryPaper } from '../../StoryPaper';

export default {
  title: 'Primary/Button/FilterButton',
  component: FilterButton,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <StoryPaper>
          <Story />
        </StoryPaper>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof FilterButton>;

const Template: ComponentStory<typeof FilterButton> = (args) => (
  <FilterButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};
Primary.parameters = buildDocs(
  <FilterButton variant="primary" onClick={() => {}} />,
);

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
Secondary.parameters = buildDocs(
  <FilterButton variant="secondary" onClick={() => {}} />,
);
