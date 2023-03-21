import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import EntryDetailPage from '../../../packages/ui-kit/src/diegesis/entry-details/EntryDetails';
import { buildDocs } from '../../common';


export default {
    title: 'Partial/Diegesis/Entries/Entry Detail',
    component: EntryDetailPage,
    decorators: [
        Story => (
            <div>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],
} as ComponentMeta<typeof EntryDetailPage>;

const EntryDetailTemplate: ComponentStory<typeof EntryDetailPage> = args => (
    <EntryDetailPage {...args} />
);

export const entryDetailPageCode = EntryDetailTemplate.bind({});
entryDetailPageCode.args = {
};
entryDetailPageCode.parameters = buildDocs(`
interface IProps {
}
interface IData {
    key: string
    value: string
}
const headCells: HeadCell[] = [
    { id: 'key', disablePadding: true, label: '', numeric: false },
    { id: 'value', disablePadding: false, label: '', numeric: false },
    { id: 'emptyColumn1', disablePadding: false, label: '', numeric: false },
]
const sampleData: IData[] = [
    { key: 'Details', value: '' },
    { key: 'Abbreviation', value: 'engBBE' },
    { key: 'Copyright', value: 'engBBE' },
    { key: 'Language', value: 'engBBE' },
    { key: 'Data source', value: 'engBBE' },
    { key: 'Owner', value: 'engBBE' },
    { key: 'Entry ID', value: 'engBBE' },
    { key: 'Revision', value: 'engBBE' },
    { key: 'Content', value: '39 OT, 27 NT' },
]
export function EntryDetailPage(props: IProps) {
    const [isSideNavOpen, setSideNavOpenStatus] = useState(false)
    return (
        <Box component={'div'} id="entry-detail-page">
            <PageHeader openSideNav={() => setSideNavOpenStatus(true)} />
            <SideNav open={isSideNavOpen} close={() => { setSideNavOpenStatus(false) }} />
            <Container className="controls-section">
                <TopControls />
            </Container>
            <Container className="details-section">
                <Stack direction={'row'} className="divider mt-2"></Stack>
                <DataTable expandableRowOnMobile={false} headCells={headCells} rows={sampleData} />
                <Stack direction={'column'} alignItems={'flex-start'} justifyContent={'center'} className="book-resource-box">
                    <Typography variant="h3">Book Resources</Typography>
                    <SelectOptions label="Select a book" options={[]} onChange={() => { }} />
                </Stack>
                <Stack direction={'row'} className="divider mt-2 mb-2"></Stack>
                <Stack direction={'column'} className="bottom-action-btn-container full-width">
                    <ActionButtons />
                </Stack>
                <Stack direction={'row'} className="pb-2">
                    <BackButton className="show-xs" />
                </Stack>
            </Container>
            <PageFooter />
        </Box>
    )
}
export default EntryDetailPage
`)

export const entryDetailPageUsage = EntryDetailTemplate.bind({});
entryDetailPageUsage.args = {
};
entryDetailPageUsage.parameters = buildDocs(<EntryDetailPage />)

