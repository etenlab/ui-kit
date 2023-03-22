import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import jsxToString from 'jsx-to-string';
import { SimpleFormDialog } from '@eten-lab/ui-kit/src/crowd-bible';

export default {
  title: 'Partial/Crowd Bible/SimpleFormDialog',
  component: SimpleFormDialog,
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
} as ComponentMeta<typeof SimpleFormDialog>;

const isDialogOpened = true;

const Template: ComponentStory<typeof SimpleFormDialog> = (args) => {
  return <SimpleFormDialog {...args} />;
};

export const NormalFiltersAndSearch = Template.bind({});
NormalFiltersAndSearch.args = {
  title: 'Some Title',
  isOpened: isDialogOpened,
  handleCancel: () => alert('handleCancel run'),
  handleOk: (value: string) => alert('handleOk run: ' + value),
};

NormalFiltersAndSearch.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <SimpleFormDialog
          title={'Enter new Definition'}
          isOpened={isDialogOpened}
          handleCancel={() => alert('handleCancel run')}
          handleOk={(value) => alert('handleOk run: ' + value)}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
