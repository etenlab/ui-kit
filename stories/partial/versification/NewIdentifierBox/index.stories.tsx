import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  mode,
  ThemeProvider,
} from '../../../../packages/ui-kit/src/ThemeProvider/ThemeProvider';
import { colors } from '../../../../packages/ui-kit/src/ThemeProvider/palette';
import { NewIdentifierBox } from '../../../../packages/ui-kit/src/versification/NewIdentifierBox';
import { buildDocs } from '../common';

const args = {
  nodeType: 'verse' as const,
  originalValue: '1',
  translationValues: ['2', '5'],
  onSave: (value: string) => alert(`Clicked Save Button with value: ${value}`),
  onCancel: () => alert('Clicked Cancel Button'),
};

export default {
  title: 'Partial/Versification/NewIdentifierBox',
  component: NewIdentifierBox,
  args,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          width: '500px',
          border: `1px solid ${colors['light-blue'][mode]}`,
          padding: '3em',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof NewIdentifierBox>;

const Template: ComponentStory<typeof NewIdentifierBox> = (args) => (
  <NewIdentifierBox {...args} />
);

export const Primary = Template.bind({});
Primary.parameters = buildDocs(<NewIdentifierBox {...args} />);
