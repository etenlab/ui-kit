import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomePage, {
  HomePageProps,
} from '../../../packages/ui-kit/src/diegesis/home/Home';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import { buildDocs } from '../../common';
import {
  MOCK_ABOUT_DIEGESIS_PROPS,
  MOCK_LANDING_PROPS,
  MOCK_PAGE_FOOTER_PROPS,
  MOCK_PAGE_HEADER_PROPS,
  MOCK_SIDE_NAV_PROPS,
  MOCK_STAT_SECTION_PROPS,
} from '../../../packages/ui-kit/src/diegesis';

const homePageProps: HomePageProps = {
  headerProps: MOCK_PAGE_HEADER_PROPS,
  landingSectionProps: MOCK_LANDING_PROPS,
  footerProps: MOCK_PAGE_FOOTER_PROPS,
  aboutDiegesisProps: MOCK_ABOUT_DIEGESIS_PROPS,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sideNavProps: MOCK_SIDE_NAV_PROPS as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  statSectionProps: MOCK_STAT_SECTION_PROPS as any,
};

export default {
  title: 'Partial/Diegesis/Home',
  component: HomePage,
  decorators: [
    (Story) => (
      <div>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof HomePage>;

const HomeTemplate: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);
export const homePage = HomeTemplate.bind({});
homePage.args = { ...homePageProps };
homePage.parameters = buildDocs(`
interface IProps {}
export function HomePage(_props: IProps) {
  const [isSideNavOpen, setSideNavOpenStatus] = useState(false);
  return (
    <div id="home-page">
      <PageHeader openSideNav={() => setSideNavOpenStatus(true)}></PageHeader>
      <SideNav
        open={isSideNavOpen}
        close={() => {
          setSideNavOpenStatus(false);
        }}
      />
      <LandingSection />
      <StatSection />
      <AboutDiegesisSection />
      <PageFooter></PageFooter>
    </div>
  );
}
export default HomePage;
`);

export const homePageUsage = HomeTemplate.bind({});
homePageUsage.args = { ...homePageProps };
homePageUsage.parameters = buildDocs(<HomePage />);
