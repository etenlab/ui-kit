import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import AboutContentSection from '../../../packages/ui-kit/src/diegesis/about/AboutContentSection';
import { buildDocs } from '../../common';


export default {
    title: 'Partial/Diegesis/AboutPage',
    component: AboutContentSection,
    decorators: [
        (Story) => (
            <div>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],
} as ComponentMeta<typeof AboutContentSection>;

const AboutContentSectionTemplate: ComponentStory<typeof AboutContentSection> = args => (
    <AboutContentSection {...args} />
);
export const aboutContentSectionCode = AboutContentSectionTemplate.bind({});
aboutContentSectionCode.args = {
    className: 'box-wrapper',
    title: 'Title of the content',
    description: 'Description of the content',
    points: ['Point 1', 'Point 2', 'Point 3']
};
aboutContentSectionCode.parameters = buildDocs(`
interface IProps {
    className?: string
    title?: string
    description?: string
    points?: string[]
}
export function AboutContentSection(props: IProps){
    const { title, description, points = [] } = props;
    return (
        <Container className={\`about-content-section \${props.className}\`}>
            <Typography variant={'h2'}>
                {title}
            </Typography>
            <Typography variant={'body1'}>
                {description}
            </Typography>
            <List>
                {
                    points.map((point, idx) =>
                        <ListItem key={idx} disablePadding={true} dense={false}>
                            <ListItemIcon>
                                <BsDot size={34} color={'#60D0B2'} />
                            </ListItemIcon>
                            <ListItemText primary={point} />
                        </ListItem>
                    )
                }
            </List>
        </Container>
    )
}
export default AboutContentSection
`)

export const aboutContentSectionUsage = AboutContentSectionTemplate.bind({});
aboutContentSectionUsage.args = {
    className: 'box-wrapper',
    title: 'Title of the content',
    description: 'Description of the content',
    points: ['Point 1', 'Point 2', 'Point 3', 'Point 4']
};
aboutContentSectionUsage.parameters = buildDocs(<AboutContentSection
    className='string'
    title='string'
    description='string'
    points={[]}
/>)
