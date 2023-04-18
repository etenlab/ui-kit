import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import EntriesPage, {
  EntriesPageProps,
} from '../../../packages/ui-kit/src/diegesis/entries/Entries';
import { buildDocs } from '../../common';
import { MOCK_ENTRIES_PAGE_PROPS } from '../../../packages/ui-kit/src/diegesis';

const entriesPageProps: EntriesPageProps = MOCK_ENTRIES_PAGE_PROPS;

export default {
  title: 'Partial/Diegesis/Entries',
  component: EntriesPage,
  decorators: [
    (Story) => (
      <div>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof EntriesPage>;

const EntriesTemplate: ComponentStory<typeof EntriesPage> = (args) => (
  <EntriesPage {...args} />
);

export const entriesPageCode = EntriesTemplate.bind({});
entriesPageCode.args = entriesPageProps;
entriesPageCode.parameters = buildDocs(`
interface IProps {
}
export function EntriesPage(props: IProps) {
    const [isSideNavOpen, setSideNavOpenStatus] = useState(false)
    return (
        <Box component={'div'} id="entries-page">
            <PageHeader openSideNav={() => setSideNavOpenStatus(true)} />
            <SideNav open={isSideNavOpen} close={() => { setSideNavOpenStatus(false) }} />
            <Container className="controls-section">
                <EntriesTopControls />
            </Container>
            <Container className="table-section">
                <EntriesDataTable />
            </Container>
            <PageFooter />
        </Box>
    )
}
export default EntriesPage
`);

export const entriesPageUsage = EntriesTemplate.bind({});
entriesPageUsage.args = entriesPageProps;
entriesPageUsage.parameters = buildDocs(<EntriesPage />);
