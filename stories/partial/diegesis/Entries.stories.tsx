import React from 'react';
import { ComponentStory } from '@storybook/react';
import EntriesPage from '../../../packages/ui-kit/src/diegesis/entries/Entries';
import { ThemeProvider } from '../../../packages/ui-kit/src';


export default {
    title: 'Partial/Diegesis/Entries',
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

const EntriesTemplate: ComponentStory<typeof EntriesPage> = args => (
    <EntriesPage {...args} />
);
export const entriesPage = EntriesTemplate.bind({});
entriesPage.args = {
};

