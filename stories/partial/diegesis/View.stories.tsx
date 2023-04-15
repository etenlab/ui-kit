import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import ViewPage, {
  MOCK_VIEW_PAGE_PROPS,
} from '../../../packages/ui-kit/src/diegesis/view/View';
import { buildDocs } from '../../common';

const pageProps = MOCK_VIEW_PAGE_PROPS;
export default {
  title: 'Partial/Diegesis/View',
  component: ViewPage,
  decorators: [
    (Story) => (
      <div>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof ViewPage>;

const ViewPageTemplate: ComponentStory<typeof ViewPage> = (args) => (
  <ViewPage {...args} />
);
export const viewPageCode = ViewPageTemplate.bind({});
viewPageCode.args = pageProps;
viewPageCode.parameters = buildDocs(`
interface IProps {
}

//#region data
const dataAboutContentSection1 = {
    title: "Aliquam aliquet mollis",
    description: "Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum. Phasellus nisi metus, viverra nec faucibus id, ultrices non mauris. Donec maximus consectetur congue. Vestibulum scelerisque cursus sem at commodo. Donec nunc odio, molestie a erat ac, dapibus imperdiet urna.",
    points: []
}
//#endregion

function ViewPage(props: IProps) {
    const [isSideNavOpen, setSideNavOpenStatus] = useState(false)
    return (
        <Box component={'div'} id="view-page">
            <PageHeader openSideNav={() => setSideNavOpenStatus(true)} />
            <SideNav open={isSideNavOpen} close={() => { setSideNavOpenStatus(false) }} />
            <Container className="header-section">
                <Stack justifyContent={'flex-start'}>
                    <BackButton className="back-btn show-xs" />
                </Stack>
                <Typography variant={'h1'} className="page-title">
                    Bible in Basic English
                </Typography>
                <Stack className="mt-2 mb-2 controls-section" direction={'row'} alignItems={'center'} justifyContent={'flex-start'}>
                    <SelectOptions label="Gen" options={[]} onChange={() => { }} />
                </Stack>
                <br />
                <Stack direction={'row'} className="divider mb-2"></Stack>
                <br />
                <Stack alignSelf={'center'} alignItems={'center'} sx={{ paddingBottom: '1.5rem', borderBottom: '1px solid #E3E3D9' }}>
                    <Typography variant="h2" fontStyle={'italic'} textAlign={'center'}>The First Book of Moses,<br /> Commonly Called</Typography>
                    <br />
                    <Typography variant="h1" fontStyle={'italic'}>Genesis</Typography>
                </Stack>
            </Container>
            <Container>
                <Container className="inner-section">
                    <AboutContentSection
                        className="no-padding hide-ul"
                        title={dataAboutContentSection1.title}
                        description={dataAboutContentSection1.description}
                        points={dataAboutContentSection1.points}
                    />
                    <Typography variant="h1" textTransform={'none'} className="diegesis-quote">
                        “Diegesis is a place to find Bibles and related resources, in a variety of formats, released under open licences.”
                    </Typography>
                    <AboutContentSection
                        className="no-padding hide-ul"
                        title={dataAboutContentSection1.title}
                        description={dataAboutContentSection1.description}
                        points={dataAboutContentSection1.points}
                    />
                    <br />
                    <AboutContentSection
                        className="no-padding hide-ul"
                        title={dataAboutContentSection1.title}
                        description={dataAboutContentSection1.description}
                        points={dataAboutContentSection1.points}
                    />
                    <br />
                    <AboutContentSection
                        className="no-padding hide-ul"
                        title={dataAboutContentSection1.title}
                        description={dataAboutContentSection1.description}
                        points={dataAboutContentSection1.points}
                    />
                    <br />
                    <AboutContentSection
                        className="no-padding hide-ul"
                        title={dataAboutContentSection1.title}
                        description={dataAboutContentSection1.description}
                        points={dataAboutContentSection1.points}
                    />
                    <br /><br />
                </Container>
            </Container>
            <PageFooter />
        </Box>
    )
}
export default ViewPage
`);

export const viewPageUsage = ViewPageTemplate.bind({});
viewPageCode.args = pageProps;
viewPageUsage.parameters = buildDocs(<ViewPage />);
