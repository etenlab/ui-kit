import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import { MenuIcon } from '../../../packages/ui-kit/src/diegesis/icons';

export default {
    title: 'Partial/Diegesis/Icons',
    decorators: [
        Story => (
            <div style={{ margin: '3em', padding: '1em', background: '#eee', width: '500px' }}>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],
} as ComponentMeta<typeof MenuIcon>;

const MenuIconTemplate: ComponentStory<typeof MenuIcon> = args => (
    <MenuIcon {...args} />
);

export const Menu = MenuIconTemplate.bind({});
Menu.args = {
    width: 49,
    height: 40
};

