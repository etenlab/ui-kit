import React from 'react';
import { ComponentStory } from '@storybook/react';
import AboutPage from '../../../packages/ui-kit/src/diegesis/about/About';
import { ThemeProvider } from '../../../packages/ui-kit/src';


export default {
    title: 'Partial/Diegesis/About',
    decorators: [
        Story => (
            <div>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],
};

const AboutTemplate: ComponentStory<typeof AboutPage> = args => (
    <AboutPage {...args} />
  );
export const aboutPage = AboutTemplate.bind({});
aboutPage.args = {
};
