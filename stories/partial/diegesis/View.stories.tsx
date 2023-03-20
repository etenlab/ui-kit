import React from 'react';
import { ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import ViewPage from '../../../packages/ui-kit/src/diegesis/view/View';

export default {
    title: 'Partial/Diegesis/View',
    decorators: [
        Story => (
            <div>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],
};

const ViewPageTemplate: ComponentStory<typeof ViewPage> = args => (
    <ViewPage {...args} />
);
export const viewPage = ViewPageTemplate.bind({});
viewPage.args = {
};



