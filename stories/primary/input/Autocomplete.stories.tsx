import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryPaper } from '../../StoryPaper';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { Autocomplete } from '../../../packages/ui-kit/src/input';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Primary/Input/Autocomplete',
  component: Autocomplete,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <StoryPaper>
          <Story />
        </StoryPaper>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Autocomplete>;

interface FilmOptionType {
  title: string;
  year: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'a', year: 1994 },
  { title: 'b', year: 1972 },
  { title: 'c', year: 1974 },
  { title: 'd', year: 2008 },
  { title: 'e', year: 1957 },
  { title: 'f', year: 1993 },
];

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <Autocomplete {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Choose File Name',
  options: top100Films,
  getOptionLabel: (option) => (option as FilmOptionType).title,
};
Primary.storyName = 'Primary';
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Autocomplete
          label="Choose File Name"
          options={top100Films}
          getOptionLabel={(option: FilmOptionType) => option.title}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  label: 'Choose File Name',
  options: top100Films,
  getOptionLabel: (option) => (option as FilmOptionType).title,
  valid: false,
};

export const Success = Template.bind({});
Success.args = {
  label: 'Choose File Name',
  options: top100Films,
  getOptionLabel: (option) => (option as FilmOptionType).title,
  valid: true,
};

export const WithoutLegend = Template.bind({});
WithoutLegend.args = {
  label: 'Choose File Name',
  withLegend: false,
  options: top100Films,
  getOptionLabel: (option) => (option as FilmOptionType).title,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Choose File Name',
  options: top100Films,
  getOptionLabel: (option) => (option as FilmOptionType).title,
  disabled: true,
  fullWidth: true,
};
