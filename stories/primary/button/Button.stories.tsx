import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider, Button, BiLike } from '../../../packages/ui-kit/src';

export default {
  title: 'Primary/Button/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  children: 'Get Started Now',
};
Primary.parameters = {
  docs: {
    source: {
      code: `<Button variant='contained'>Get Started Now</Button>`,
      language: 'html',
      type: 'auto',
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'outlined',
  children: 'Get Started Now',
};
Secondary.parameters = {
  docs: {
    source: {
      code: `<Button variant='outlined'>Get Started Now</Button>`,
      language: 'html',
      type: 'auto',
    },
  },
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  endIcon: true,
  variant: 'contained',
  children: 'Get Started Now',
  color: 'blue-primary',
};
PrimaryWithIcon.storyName = 'Primary with arrow icon';
PrimaryWithIcon.parameters = {
  docs: {
    source: {
      code: `<Button variant='contained' endIcon>Get Started Now</Button>`,
      language: 'html',
      type: 'auto',
    },
  },
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  endIcon: true,
  variant: 'outlined',
  children: 'Get Started Now',
  color: 'blue-primary',
};
SecondaryWithIcon.storyName = 'Secondary with arrow icon';
SecondaryWithIcon.parameters = {
  docs: {
    source: {
      code: `<Button variant='outlined' endIcon>Get Started Now</Button>`,
      language: 'html',
      type: 'auto',
    },
  },
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  endIcon: <BiLike />,
  variant: 'outlined',
  children: 'Get Started Now',
  color: 'blue-primary',
};
CustomIcon.parameters = {
  docs: {
    source: {
      code: `<Button variant='outlined' endIcon={<BiLike />}>Get Started Now</Button>`,
      language: 'html',
      type: 'auto',
    },
  },
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  startIcon: <BiLike />,
  variant: 'contained',
  color: 'green',
  children: 'Agree',
  size: 'small',
};
SmallButton.parameters = {
  docs: {
    source: {
      code: `<Button variant='contained' endIcon={<BiLike />} color="green" size="small">Agree</Button>`,
      language: 'html',
      type: 'auto',
    },
  },
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: 'text',
  color: 'blue-primary',
  children: 'Reply',
  sx: {
    fontWeight: 400,
  },
};
TextButton.parameters = {
  docs: {
    source: {
      code: `<Button variant='text' sx={{ fontWeight: 400 }}>Reply</Button>`,
      language: 'html',
      type: 'auto',
    },
  },
};

export const ButtonOtherComponent = Template.bind({});
ButtonOtherComponent.args = {
  variant: 'contained',
  component: 'label',
  children: 'Get Started Now',
};
ButtonOtherComponent.parameters = {
  docs: {
    source: {
      code: `<Button variant='contained' component='label'>Get Started Now</Button>`,
      language: 'html',
      type: 'auto',
    },
  },
};
