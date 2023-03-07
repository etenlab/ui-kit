import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SectionActionButton from '../../../../packages/ui-kit/src/diegesis/home/SectionActionButton';
import { ThemeProvider } from '../../../../packages/ui-kit/src';


export default {
  title: 'Partial/Diegesis/Home/SectionActionButton',
  component: SectionActionButton,
  decorators: [
    Story => (
      <div style={{ margin: '3em', padding: '1em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof SectionActionButton>;

const Template: ComponentStory<typeof SectionActionButton> = args => (
  <SectionActionButton {...args} />
);

export const BrowseContentButton = Template.bind({});
BrowseContentButton.args = {
  label: 'Browse content',
};

