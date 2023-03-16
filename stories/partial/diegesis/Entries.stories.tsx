import React from 'react';
import { ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import EntriesPage from '../../../packages/ui-kit/src/diegesis/entries/Entries';
import SearchBox from '../../../packages/ui-kit/src/diegesis/SearchBox';
import EntriesTopControls from '../../../packages/ui-kit/src/diegesis/entries/EntriesTopControls';


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

const SearchBoxTemplate: ComponentStory<typeof SearchBox> = args => (
    <SearchBox {...args} />
);
export const searchBox = SearchBoxTemplate.bind({});
searchBox.args = {
};


const EntriesTopControlsTemplate: ComponentStory<typeof EntriesTopControls> = args => (
    <EntriesTopControls {...args} />
);
export const entriesTopControls = EntriesTopControlsTemplate.bind({});
entriesTopControls.args = {
};

