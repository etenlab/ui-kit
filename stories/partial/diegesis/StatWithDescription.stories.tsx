import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StatWithDescription from '../../../packages/ui-kit/src/diegesis/home/StatWithDescription';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import { buildDocs } from '../../common';

export default {
  title: 'Partial/Diegesis/Home',
  component: StatWithDescription,
  decorators: [
    (Story) => (
      <div>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof StatWithDescription>;

const StatWithDescriptionTemplate: ComponentStory<
  typeof StatWithDescription
> = (args) => <StatWithDescription {...args} />;
export const statWithDescription = StatWithDescriptionTemplate.bind({});
statWithDescription.args = {
  numbers: +'2304',
  category: 'entries',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};
statWithDescription.parameters = buildDocs(`
interface IProps {
  numbers: number;
  category: string;
  description: string;
}
export function statWithDescription(props: IProps) {
  return (
    <Stack
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      className={'stat-with-des'}
    >
      <Typography variant={'h1'} className="stat">
        {props.numbers}
      </Typography>
      <Typography variant={'h1'} className="stat-category">
        {props.category}
      </Typography>
      <Typography variant={'body1'} className="stat-description">
        {props.description}
      </Typography>
    </Stack>
  );
}
export default statWithDescription;
`);

export const statWithDescriptionUsage = StatWithDescriptionTemplate.bind({});
statWithDescriptionUsage.args = {
  numbers: +'2304',
  category: 'entries',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};
statWithDescriptionUsage.parameters = buildDocs(
  <StatWithDescription
    numbers={2304}
    category="entries"
    description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
  />,
);
