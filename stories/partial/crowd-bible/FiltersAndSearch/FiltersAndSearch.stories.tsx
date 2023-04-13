import { FiltersAndSearch } from '@eten-lab/ui-kit/src/crowd-bible/FiltersAndSearch';
import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Crowd Bible/FiltersAndSearch block',
  component: FiltersAndSearch,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          border: '1px solid #000',
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
} as ComponentMeta<typeof FiltersAndSearch>;

const Template: ComponentStory<typeof FiltersAndSearch> = (args) => {
  return <FiltersAndSearch {...args} />;
};

const ethnologueOptions = ['ethnologueOption1', 'ethnologueOption2'];
const languageOptions = ['languageOption1', 'languageOption2'];

export const NormalFiltersAndSearch = Template.bind({});
NormalFiltersAndSearch.args = {
  ethnologueOptions,
  languageOptions,
  setEthnologue: (e) => alert('run setEthnologue: ' + e),
  setLanguage: (l) => alert('run setLanguage: ' + l),
  setSearch: (s) => alert('run setSearch: ' + s),
};

NormalFiltersAndSearch.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <FiltersAndSearch
          ethnologueOptions={ethnologueOptions}
          setEthnologue={() => alert('run setEthnologue')}
          setLanguage={() => alert('run setLanguage')}
          setSearch={() => alert('run setSearch')}
          languageOptions={languageOptions}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
