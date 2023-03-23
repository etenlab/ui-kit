import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SectionActionButton from '../../../packages/ui-kit/src/diegesis/home/SectionActionButton';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import { buildDocs } from '../../common';

export default {
  title: 'Partial/Diegesis/Home',
  component: SectionActionButton,
  decorators: [
    (Story) => (
      <div>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof SectionActionButton>;

const SectionActionButtonTemplate: ComponentStory<
  typeof SectionActionButton
  > = (args) => <SectionActionButton {...args} />;

export const sectionActionButton = SectionActionButtonTemplate.bind({});
sectionActionButton.args = {
  label: 'Browse content',
};
sectionActionButton.parameters = buildDocs(`
import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';

interface IProps extends ButtonProps {
  label: string;
  className?: string;
}
const StyledButton = styled(Button)({
  color: '#fff',
  minWidth: '312px',
  minHeight: '70px',
  paddingLeft: '30px',
  paddingRight: '30px',
  backgroundColor: 'success',
  fontSize: '21px',
  textTransform: 'none',
  borderRadius: '40px',
});
export default function HomeSectionActionButton(props: IProps) {
  const { label, className, color = 'green' } = props;

  return (
    <StyledButton
      className={className}
      size={'large'}
      variant={'contained'}
      color={color}
      {...props}
    >
      {label}
    </StyledButton>
  );
}
`)

export const sectionActionButtonUsage = SectionActionButtonTemplate.bind({});
sectionActionButtonUsage.args = {
  label: 'Browse content',
};
sectionActionButtonUsage.parameters = buildDocs(<SectionActionButton label='Browse content' />)
