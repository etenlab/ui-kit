import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from '@mui/material';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { HeadingBox } from '../../../../packages/ui-kit/src/versification/HeadingBox';
import { NodeFilter } from '../../../../packages/ui-kit/src/versification/NodeFilter';
import { buildDocs } from '../common';

export default {
  title: 'Partial/Versification/HeadingBox',
  component: HeadingBox,
  args: {
    onBack: undefined,
    breadcrumb: undefined,
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof HeadingBox>;

const Template: ComponentStory<typeof HeadingBox> = (args) => (
  <HeadingBox {...args} />
);

export const Primary = Template.bind({});
Primary.parameters = buildDocs(<HeadingBox />);

export const WithBack = Template.bind({});
WithBack.args = {
  onBack: () => alert('Clicked Back Button'),
};
WithBack.parameters = buildDocs(<HeadingBox onBack={WithBack.args.onBack} />);

export const WithBreadcrumb = Template.bind({});
WithBreadcrumb.args = {
  breadcrumb: '#2 NIV: Genesis',
};
WithBreadcrumb.parameters = buildDocs(
  <HeadingBox breadcrumb={WithBreadcrumb.args.breadcrumb} />,
);

export const FullSample = Template.bind({});
FullSample.args = {
  ...WithBack.args,
  ...WithBreadcrumb.args,
  children: (
    <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2} mt={2}>
      <NodeFilter nodeType="chapter" disabled />
      <NodeFilter nodeType="verse" disabled />
    </Box>
  ),
};
FullSample.parameters = buildDocs(<HeadingBox {...FullSample.args} />);
FullSample.parameters.docs.source.code =
  FullSample.parameters.docs.source.code.replace(/\[object Object\]/g, 'Box');
