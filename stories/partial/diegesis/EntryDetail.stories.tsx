import React from 'react';
import { ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import EntryDetailPage from '../../../packages/ui-kit/src/diegesis/entry-details/EntryDetails';


export default {
    title: 'Partial/Diegesis/Entries/Entry Detail',
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

const EntryDetailTemplate: ComponentStory<typeof EntryDetailPage> = args => (
    <EntryDetailPage {...args} />
);
export const entrieDetailPage = EntryDetailTemplate.bind({});
entrieDetailPage.args = {
};


