import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { HeadingBox } from '../../../../packages/ui-kit/src/versification/HeadingBox';

export default {
  title: 'Partial/Versification/HeadingBox',
  component: HeadingBox,
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

export const Default = () => <HeadingBox />;
export const WithBack = () => <HeadingBox onBack={() => {}} />;
export const WithBreadcrumb = () => <HeadingBox breadcrumb="#2 NIV: Genesis" />;
