import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import jsxToString from 'jsx-to-string';
import { ItemContentListEdit } from '@eten-lab/ui-kit/src/crowd-bible';

export default {
  title: 'Partial/Crowd Bible/ItemContentListEdit',
  component: ItemContentListEdit,
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
} as ComponentMeta<typeof ItemContentListEdit>;

const Template: ComponentStory<typeof ItemContentListEdit> = (args) => {
  return <ItemContentListEdit {...args} />;
};

type Content = {
  content: string;
  upVote: number;
  downVote: number;
};
type Item = {
  title: Content;
  contents: Content[];
};
const selectedPhrase: Item = {
  title: {
    content: 'title content title content title content',
    downVote: 1,
    upVote: 2,
  },
  contents: [
    {
      content: 'some content1',
      upVote: 10,
      downVote: 11,
    },
    {
      content: 'some content11',
      upVote: 10,
      downVote: 11,
    },
  ],
};

export const NormalFiltersAndSearch = Template.bind({});
NormalFiltersAndSearch.args = {
  item: selectedPhrase,
  onBack: () => alert('onBack run'),
  buttonText: 'New Definition',
  changeContent: () => alert('changeContent run'),
  addContent: () => alert('addContent run'),
};

NormalFiltersAndSearch.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <ItemContentListEdit
          item={selectedPhrase}
          onBack={() => alert('onBack run')}
          buttonText="New Definition"
          changeContent={() => alert('changeContent run')}
          addContent={() => alert('addContent run')}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
