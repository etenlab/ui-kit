import { Button, ThemeProvider } from '../../../../packages/ui-kit/src';
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
  candidateId: string | null;
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
    candidateId: '2345',
  },
  contents: [
    {
      content: 'some content1',
      upVotes: 10,
      downVotes: 11,
      id: '1234a',
      candidateId: '2345a',
    },
    {
      content: 'some content11 long long long long long long long long',
      upVotes: 10,
      downVotes: 11,
      id: '1234b',
      candidateId: '2345b',
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
  changeContentVotes: (candidateId, upOrDown) =>
    alert(`changeContentVotes: ${candidateId} ${upOrDown}`),
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
          changeContentVotes={(candidateId, upOrDown) =>
            alert(`changeContentVotes: ${candidateId} ${upOrDown}`)
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

export const Editable = Template.bind({});
Editable.args = {
  item: selectedPhrase,
  onBack: () => alert('onBack run'),
  buttonText: 'New Definition',
  changeContentValue: (definitionId, newContentValue) =>
    alert(`changeContentValue: ${definitionId} ${newContentValue}`),
  changeContentVotes: (candidateId, upOrDown) =>
    alert(`changeContentVotes: ${candidateId} ${upOrDown}`),
  addContent: (newContentValue) => alert(`addContent ${newContentValue}`),
  isAddable: false,
  isEditable: true,
};

Editable.parameters = {
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
          changeContentVotes={(candidateId, upOrDown) =>
            alert(`changeContentVotes: ${candidateId} ${upOrDown}`)
          }
          addContent={(newContentValue) =>
            alert(`addContent ${newContentValue}`)
          }
          isAddable={Editable.args.isAddable}
          isEditable={Editable.args.isEditable}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Addable = Template.bind({});
Addable.args = {
  item: selectedPhrase,
  onBack: () => alert('onBack run'),
  buttonText: 'New Definition',
  changeContentValue: (definitionId, newContentValue) =>
    alert(`changeContentValue: ${definitionId} ${newContentValue}`),
  changeContentVotes: (candidateId, upOrDown) =>
    alert(`changeContentVotes: ${candidateId} ${upOrDown}`),
  addContent: (newContentValue) => alert(`addContent ${newContentValue}`),
  isAddable: true,
  isEditable: true,
};
Addable.parameters = {
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
          changeContentVotes={(candidateId, upOrDown) =>
            alert(`changeContentVotes: ${candidateId} ${upOrDown}`)
          }
          addContent={(newContentValue) =>
            alert(`addContent ${newContentValue}`)
          }
          isAddable={Editable.args.isAddable}
          isEditable={Editable.args.isEditable}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  item: selectedPhrase,
  onBack: () => alert('onBack run'),
  buttonText: 'New Definition',
  changeContentValue: (definitionId, newContentValue) =>
    alert(`changeContentValue: ${definitionId} ${newContentValue}`),
  changeContentVotes: (candidateId, upOrDown) =>
    alert(`changeContentVotes: ${candidateId} ${upOrDown}`),
  addContent: (newContentValue) => alert(`addContent ${newContentValue}`),
  isAddable: false,
  isEditable: false,
  customTitle: <Button>Some react element</Button>,
};
CustomTitle.parameters = {
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
          changeContentVotes={(candidateId, upOrDown) =>
            alert(`changeContentVotes: ${candidateId} ${upOrDown}`)
          }
          addContent={(newContentValue) =>
            alert(`addContent ${newContentValue}`)
          }
          isAddable={Editable.args.isAddable}
          isEditable={Editable.args.isEditable}
          customTitle={Editable.args.customTitle}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Discussable = Template.bind({});
Discussable.args = {
  item: selectedPhrase,
  onBack: () => alert('onBack run'),
  buttonText: 'New Definition',
  changeContentValue: (definitionId, newContentValue) =>
    alert(`changeContentValue: ${definitionId} ${newContentValue}`),
  changeContentVotes: (candidateId, upOrDown) =>
    alert(`changeContentVotes: ${candidateId} ${upOrDown}`),
  addContent: (newContentValue) => alert(`addContent ${newContentValue}`),
  onContentDiscussionClick: (id: string | null) => {
    alert(`Start discussoin for ${id}`);
  },

  isAddable: false,
  isEditable: false,
  isWithDiscussion: true,
};

Discussable.parameters = {
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
          changeContentVotes={(candidateId, upOrDown) =>
            alert(`changeContentVotes: ${candidateId} ${upOrDown}`)
          }
          addContent={(newContentValue) =>
            alert(`addContent ${newContentValue}`)
          }
          isAddable={Discussable.args.isAddable}
          isEditable={Discussable.args.isEditable}
          isWithDiscussion={Discussable.args.isWithDiscussion}
          onContentDiscussionClick={Discussable.args.onContentDiscussionClick}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
