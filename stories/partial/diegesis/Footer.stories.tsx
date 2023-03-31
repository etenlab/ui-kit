import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import { buildDocs } from '../../common';
import PageFooter from '../../../packages/ui-kit/src/diegesis/PageFooter';

export default {
  title: 'Partial/Diegesis/PageSections/Footer',
  component: PageFooter,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story></Story>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof PageFooter>;

const FooterTemplate: ComponentStory<typeof PageFooter> = (args) => (
  <PageFooter {...args} />
);

export const SimpleFooter = FooterTemplate.bind({});
SimpleFooter.args = {};
SimpleFooter.parameters = buildDocs(`
interface IProps {}
export function PageFooter(props: IProps) {
  return (
    <div className={'page-footer'}>
      <Container>
        <Stack direction={'column'} alignItems={'start'}>
          <Stack direction={'row'} className="full-width" alignItems={'center'}>
            <AppLogo varient={'light'} className={'app-logo'} />
          </Stack>
          <Stack
            direction={'row'}
            className="full-width mt-2 footer-content"
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography variant="body1" className="">
              Diegesis.Bible is a project by MVH Solutions that uses the
              Proskomma Scripture Runtime Engine.
            </Typography>
            <Typography variant="body1" className="">
              © MVH Solutions {new Date().getFullYear()}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
export default PageFooter;
`);

export const FooterWithProps = FooterTemplate.bind({});
FooterWithProps.args = {
  brandName: 'Tech Solution',
  year: 2025,
  footerText: 'Footer description',
};
FooterWithProps.parameters = buildDocs(
  <PageFooter
    brandName="Tech Solution"
    year={2025}
    footerText="Footer description"
  />,
);
