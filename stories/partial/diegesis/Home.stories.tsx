import React from 'react';
import { ComponentStory } from '@storybook/react';
import SectionActionButton from '../../../packages/ui-kit/src/diegesis/home/SectionActionButton';
import StatWithDescription from '../../../packages/ui-kit/src/diegesis/home/StatWithDescription';
import HomePage from '../../../packages/ui-kit/src/diegesis/home/Home';
import { ThemeProvider } from '../../../packages/ui-kit/src';

export default {
  title: 'Partial/Diegesis/Home',
  decorators: [
    (Story) => (
      <div>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
};

const SectionActionButtonTemplate: ComponentStory<
  typeof SectionActionButton
> = (args) => <SectionActionButton {...args} />;
export const sectionActionButton = SectionActionButtonTemplate.bind({});
sectionActionButton.args = {
  label: 'Browse content',
};

const StatWithDescriptionTemplate: ComponentStory<
  typeof StatWithDescription
> = (args) => <StatWithDescription {...args} />;
export const statWithDescription = StatWithDescriptionTemplate.bind({});
statWithDescription.args = {
  numbers: '2304',
  category: 'entries',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};

const HomeTemplate: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);
export const homePage = HomeTemplate.bind({});
homePage.args = {};
