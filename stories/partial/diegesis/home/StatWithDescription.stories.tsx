import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../../../../packages/ui-kit/src';
import StatWithDescription from '../../../../packages/ui-kit/src/diegesis/home/StatWithDescription';

export default {
    title: 'Partial/Diegesis/Home/StatWithDescription',
    component: StatWithDescription,
    decorators: [
        Story => (
            <div style={{ margin: '3em', padding: '1em', background: '#eee', width: '500px' }}>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],
} as ComponentMeta<typeof StatWithDescription>;

const Template: ComponentStory<typeof StatWithDescription> = args => (
    <StatWithDescription {...args} />
);

export const LanguageStat = Template.bind({});
LanguageStat.args = {
    numbers: '2304',
    category: 'entries',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
};

