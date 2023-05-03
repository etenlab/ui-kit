import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import jsxToString from 'jsx-to-string';

import { ThemeProvider } from '@eten-lab/ui-kit/src';
import { LangSelector } from '@eten-lab/ui-kit/src/LangSelector';

type Lang = {
  tag: string;
  descriptions: Array<string>;
};
type Dialect = {
  tag: string;
  descriptions: Array<string>;
};
type Region = {
  tag: string;
  descriptions: Array<string>;
};

export default {
  title: 'Partial/LangSelector',
  component: LangSelector,
  decorators: [
    (Story) => (
      <div
      // style={{
      //   margin: '3em',
      //   border: '1px solid #000',
      //   width: '500px',
      //   padding: '3em',
      // }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof LangSelector>;

const Template: ComponentStory<typeof LangSelector> = (args) => {
  return <LangSelector {...args} />;
};

const onChangeHandler = (
  langTag: string,
  selected: { lang: Lang; region: Region; dialect: Dialect },
) =>
  alert(
    `langTag: ${JSON.stringify(langTag)}; selected:${JSON.stringify(
      selected,
    )}}`,
  );

const setLoadingStateHandler = (isLoading: boolean) => {
  alert(isLoading);
};

export const NormalLangSelector = Template.bind({});
NormalLangSelector.args = {};

NormalLangSelector.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <LangSelector
          onChange={onChangeHandler}
          setLoadingState={setLoadingStateHandler}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
