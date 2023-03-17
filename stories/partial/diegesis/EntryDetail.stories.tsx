import React from 'react';
import { ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import EntryDetailPage from '../../../packages/ui-kit/src/diegesis/entry-details/EntryDetails';
import ActionButtons from '../../../packages/ui-kit/src/diegesis/entry-details/ActionButtons';
import TopControls from '../../../packages/ui-kit/src/diegesis/entry-details/TopControls';


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

const ActionButtonsTemplate: ComponentStory<typeof ActionButtons> = args => (
    <ActionButtons {...args} />
);
export const actionButtons = ActionButtonsTemplate.bind({});
actionButtons.args = {
};

const TopControlsTemplate: ComponentStory<typeof TopControls> = args => (
    <TopControls {...args} />
);
export const topControls = TopControlsTemplate.bind({});
topControls.args = {
};


