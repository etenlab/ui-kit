import React from 'react';
import { ComponentStory } from '@storybook/react';
import AboutPage from '../../../packages/ui-kit/src/diegesis/about/About';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import AboutContentSection from '../../../packages/ui-kit/src/diegesis/about/AboutContentSection';
import AboutPictureSection from '../../../packages/ui-kit/src/diegesis/about/AboutPictureSection';


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


const AboutContentSectionTemplate: ComponentStory<typeof AboutContentSection> = args => (
    <AboutContentSection {...args} />
);
export const contentSection = AboutContentSectionTemplate.bind({});
contentSection.args = {
    title: "Aliquam aliquet mollis",
    description: "Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum. Phasellus nisi metus, viverra nec faucibus id, ultrices non mauris. Donec maximus consectetur congue. Vestibulum scelerisque cursus sem at commodo. Donec nunc odio, molestie a erat ac, dapibus imperdiet urna.",
    points: ["Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum.", "Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum.", "Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum."]
};


const AboutPictureSectionTemplate: ComponentStory<typeof AboutPictureSection> = args => (
    <AboutPictureSection {...args} />
);
export const pictureSection = AboutPictureSectionTemplate.bind({});
pictureSection.args = {
};
