import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import TopControls from '../../../packages/ui-kit/src/diegesis/entry-details/TopControls';
import { buildDocs } from '../../common';


export default {
    title: 'Partial/Diegesis/Entries/Entry Detail',
    component: TopControls,
    decorators: [
        (Story) => (
            <div>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],
} as ComponentMeta<typeof TopControls>;;

const TopControlsTemplate: ComponentStory<typeof TopControls> = args => (
    <TopControls {...args} />
);

export const topControlsCode = TopControlsTemplate.bind({});
topControlsCode.args = {
};
topControlsCode.parameters = buildDocs(`
type Props = {}
export default function TopControls(props: Props) {
    return (
        <Stack direction={'column'} alignItems={'flex-start'} justifyContent={'center'} className="top-controls-section">
            <BackButton />
            <Stack direction={'row'} className="mt-1 full-width" alignItems={'center'} justifyContent={'space-between'}>
                <Typography variant={'h1'} className="page-title mr-2 full-width">
                    Bible in Basic English
                </Typography>
                <ActionButtons />
            </Stack>
        </Stack>
    )
}
`)

export const topControlsUsage = TopControlsTemplate.bind({});
topControlsUsage.args = {
};
topControlsUsage.parameters = buildDocs(<TopControls />)

