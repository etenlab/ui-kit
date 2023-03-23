import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import AboutPictureSection from '../../../packages/ui-kit/src/diegesis/about/AboutPictureSection';
import { buildDocs } from '../../common';


export default {
    title: 'Partial/Diegesis/AboutPage',
    component: AboutPictureSection,
    decorators: [
        (Story) => (
            <div>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],
} as ComponentMeta<typeof AboutPictureSection>;

const AboutPictureSectionTemplate: ComponentStory<typeof AboutPictureSection> = args => (
    <AboutPictureSection {...args} />
);
export const aboutPictureSectionCode = AboutPictureSectionTemplate.bind({});
aboutPictureSectionCode.args = {
};
aboutPictureSectionCode.parameters = buildDocs(`
interface IProps {
    className?: string
    caption?: string
    imageUrl?: string
}
export function AboutPictureSection(props: IProps) {
    const { caption, imageUrl } = props;
    return (
        <Container className={\`about-picture-section \${props.className}\`}>
            <div className="inner-container">
                <Typography variant={'h2'}>
                    {caption}
                </Typography>
                <div className="img-box" style={{ backgroundImage: \`url(\${imageUrl})\` }}>
                </div>
            </div>
        </Container>
    )
}
export default AboutPictureSection
`)

export const aboutPictureSectionUsage = AboutPictureSectionTemplate.bind({});
aboutPictureSectionUsage.args = {

};
aboutPictureSectionUsage.parameters = buildDocs(
    <AboutPictureSection
        caption='Image Caption'
        imageUrl=''
        className=''
    />
)
