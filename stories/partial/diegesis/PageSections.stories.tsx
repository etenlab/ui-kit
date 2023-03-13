import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import PageHeader from '../../../packages/ui-kit/src/diegesis/PageHeader';
import PageFooter from '../../../packages/ui-kit/src/diegesis/PageFooter';
import SideNav  from '../../../packages/ui-kit/src/diegesis/SideNav';

export default {
    title: 'Partial/Diegesis/PageSections',
    decorators: [
        Story => (
            <div style={{ margin: '3em', padding: '1em' }}>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],
};

const PageHeaderTemplate: ComponentStory<typeof PageHeader> = args => (
    <PageHeader {...args} />
);

export const Header = PageHeaderTemplate.bind({});
Header.args = {};


const FooterTemplate: ComponentStory<typeof PageFooter> = args => (
    <PageFooter {...args} />
);

export const Footer = FooterTemplate.bind({});
Footer.args = {};

const SideNavTemplate: ComponentStory<typeof SideNav> = args => (
    <SideNav {...args} />
);

export const SideMenu = SideNavTemplate.bind({});
SideMenu.args = {};

