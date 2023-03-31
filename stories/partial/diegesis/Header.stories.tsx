import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import PageHeader from '../../../packages/ui-kit/src/diegesis/PageHeader';
import { buildDocs } from '../../common';

export default {
  title: 'Partial/Diegesis/PageSections/Header',
  component: PageHeader,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story></Story>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof PageHeader>;

const PageHeaderTemplate: ComponentStory<typeof PageHeader> = (args) => (
  <PageHeader {...args} />
);

export const SimpleHeader = PageHeaderTemplate.bind({});
SimpleHeader.args = {};
SimpleHeader.parameters = buildDocs(`
interface IProps {
  openSideNav?: () => void
  title?: string
}
export function PageHeader(props: IProps) {
  const { openSideNav, title = 'Open source Bibles resources' } = props
  return (
      <Container className={'page-header'}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Stack direction={'row'} alignItems={'center'}>
                  <AppLogo className={'app-logo'} />
                  <Typography variant="body1" className="header-title">
                      {title}
                  </Typography>
              </Stack>
              {
                  openSideNav
                      ?
                      <Stack className="nav-btn">
                          <MenuIcon onClick={() => { openSideNav() }} />
                      </Stack> : <></>
              }
          </Stack>
      </Container>
  )
}
export default PageHeader;
`);

export const HeaderWithMenu = PageHeaderTemplate.bind({});
HeaderWithMenu.args = {
  openSideNav() {},
};
HeaderWithMenu.parameters = buildDocs(<PageHeader openSideNav={() => {}} />);

export const HeaderWithCustomTitle = PageHeaderTemplate.bind({});
HeaderWithCustomTitle.args = {
  openSideNav() {},
  title: 'Header with custom title',
};
HeaderWithCustomTitle.parameters = buildDocs(
  <PageHeader openSideNav={() => {}} title={'Header with custom title'} />,
);
