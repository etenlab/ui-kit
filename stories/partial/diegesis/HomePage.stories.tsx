import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomePage from '../../../packages/ui-kit/src/diegesis/home/Home';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import { buildDocs } from '../../common';

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
homePage.args = {};
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
homePageUsage.args = {};
homePageUsage.parameters = buildDocs(<HomePage />);
