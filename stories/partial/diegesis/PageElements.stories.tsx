import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import PageHeader from '../../../packages/ui-kit/src/diegesis/PageHeader';
import PageFooter  from '../../../packages/ui-kit/src/diegesis/PageFooter';

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

const HeaderTemplate: ComponentStory<typeof PageHeader> = args => (
    <PageHeader {...args} />
);

export const Header = HeaderTemplate.bind({});
Header.args = {};


const FooterTemplate: ComponentStory<typeof PageFooter> = args => (
    <PageFooter {...args} />
);

export const Footer = FooterTemplate.bind({});
Footer.args = {};

