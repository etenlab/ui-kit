import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import EntriesTopControls from '../../../packages/ui-kit/src/diegesis/entries/EntriesTopControls';
import { buildDocs } from '../../common';


export default {
    title: 'Partial/Diegesis/Entries',
    component: EntriesTopControls,
    decorators: [
        (Story) => (
            <div>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],
} as ComponentMeta<typeof EntriesTopControls>;

const EntriesTopControlTemplate: ComponentStory<typeof EntriesTopControls> = args => (
    <EntriesTopControls {...args} />
);

export const topControlCode = EntriesTopControlTemplate.bind({});
topControlCode.args = {
};
topControlCode.parameters = buildDocs(`
interface IProps {
}


export function EntriesTopControls(props: IProps){
    const [curTab, setCurTab] = useState(0)

    return (
        <Stack direction={'column'} alignItems={'flex-start'} className="controls-container">
            <Stack direction={'row'} alignItems={'center'} className="">
                <Typography variant={'h1'} className="page-title mr-2">
                    Entries
                </Typography>
                <SearchBox placeholder="Bible in Basic English" className={'mx-1 hide-xs'} />
                <CustomTabs className="" value={curTab} onClick={() => { setCurTab(curTab === 1 ? 0 : 1) }}>
                    <CustomTab value={1} label="Advanced search with filters" />
                </CustomTabs>
            </Stack>
            <Stack className={\`tab-content \${curTab === 1 ? 'show' : 'hide'}\`} direction={'column'} alignItems={'flex-start'} justifyContent={'center'}>
                <Stack direction={'row'} alignItems={'center'} alignSelf={'stretch'} justifyContent={'space-between'}>
                    <SelectOptions label="Organisations" options={[]} onChange={() => { }} />
                    <SelectOptions label="Owner" options={[]} onChange={() => { }} />
                    <SelectOptions label="Type" options={[]} onChange={() => { }} />
                    <SelectOptions label="Language" options={[]} onChange={() => { }} />
                </Stack>
                <Stack direction={'row'} className="tags-container">
                    <Typography variant={'caption'} className="mr-1" color={'GrayText'}>Tags: </Typography>
                    <Chip label='Heading' />
                    <Chip label='Footnotes' />
                    <Chip label='Intro' />
                    <Chip label='Heading' />
                    <Chip label='Strong' />
                </Stack>
            </Stack>
            <SearchBox placeholder="Bible in Basic English" className={'mx-1 show-xs'} />
        </Stack>
    )
}
export default EntriesTopControls
`)


export const topControlUsage = EntriesTopControlTemplate.bind({});
topControlUsage.args = {
};
topControlUsage.parameters = buildDocs(<EntriesTopControls />)


