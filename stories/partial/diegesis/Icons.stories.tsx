import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import {
  CloseIcon,
  MenuIcon,
} from '../../../packages/ui-kit/src/diegesis/icons';
import { buildDocs } from '../../common';

export default {
  title: 'Partial/Diegesis/Icons',
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          padding: '1em',
          background: '#eee',
          width: '500px',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof MenuIcon>;

const MenuIconTemplate: ComponentStory<typeof MenuIcon> = (args) => (
  <MenuIcon {...args} />
);

export const Menu = MenuIconTemplate.bind({});
Menu.args = {
  width: 49,
  height: 40,
  onClick: () => {},
  className: 'custom-css-class',
};
Menu.parameters = buildDocs(
  <MenuIcon
    width={49}
    height={40}
    onClick={() => {}}
    className="custom-css-class"
  />,
);

const CloseIconTemplate: ComponentStory<typeof CloseIcon> = (args) => (
  <CloseIcon {...args} />
);
export const Close = CloseIconTemplate.bind({});
Close.args = {};
Close.parameters = buildDocs(<CloseIcon width={49} height={40} />);
