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

type VotableContent = {
  content: string;
  upVotes: number;
  downVotes: number;
  id: string | null;
  ballotId: string | null;
};

type VotableItem = {
  title: VotableContent;
  contents: VotableContent[];
  contentElectionId: string | null;
};

const selectedPhrase: VotableItem = {
  title: {
    content: 'title content',
    downVotes: 1,
    upVotes: 2,
    id: '1234',
    ballotId: '2345',
  },
  contents: [
    {
      content: 'some content1',
      upVotes: 10,
      downVotes: 11,
      id: '1234a',
      ballotId: '2345a',
    },
    {
      content: 'some content11 long long long long long long long long',
      upVotes: 10,
      downVotes: 11,
      id: '1234b',
      ballotId: '2345b',
    },
  ],
  contentElectionId: '3456e',
};

export const Primary = Template.bind({});
Primary.args = {
  item: selectedPhrase,
  onBack: () => alert('onBack run'),
  buttonText: 'New Definition',
  changeContentValue: (definitionId, newContentValue) =>
    alert(`changeContentValue: ${definitionId} ${newContentValue}`),
  changeContentVotes: (ballotId, upOrDown) =>
    alert(`changeContentVotes: ${ballotId} ${upOrDown}`),
  addContent: (newContentValue) => alert(`addContent ${newContentValue}`),
};

Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <ItemContentListEdit
          item={selectedPhrase}
          onBack={() => alert('onBack run')}
          buttonText="New Definition"
          changeContentValue={(definitionId, newContentValue) =>
            alert(`changeContentValue: ${definitionId} ${newContentValue}`)
          }
          changeContentVotes={(ballotId, upOrDown) =>
            alert(`changeContentVotes: ${ballotId} ${upOrDown}`)
          }
          addContent={(newContentValue) =>
            alert(`addContent ${newContentValue}`)
          }
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
