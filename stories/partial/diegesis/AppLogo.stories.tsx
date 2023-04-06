import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import AppLogo from '../../../packages/ui-kit/src/diegesis/app-logo/AppLogo';
import { buildDocs } from '../../common';

export default {
  title: 'Partial/Diegesis/AppLogo',
  component: AppLogo,
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
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => (
  <AppLogo {...args} />
);

export const PrimaryAppLogo = Template.bind({});
PrimaryAppLogo.args = {
  varient: 'primary',
};
PrimaryAppLogo.parameters = buildDocs(`
interface IProps {
  className?: string;
  width?: number;
  height?: number;
  varient?: 'primary' | 'light';
}
export function AppLogo(props: IProps) {
  const { width = 240, height = 52.348, varient = 'primary' } = props;
  if (varient === 'light') {
    return (
      <svg
        className={props?.className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-6783 -1302.417 240 52.349"
      >
        <g data-name="CompositeLayer">
          <path
            d="m-6751.25-1271.667 12.111-12.111 9.11-9.11-.96-.96-20.72 20.72v-29.288h-1.359v29.288l-20.72-20.72-.96.96 21.22 21.22H-6783v4.528h61.256v-4.527h-29.505Z"
            fill="#fff"
            fillRule="evenodd"
            data-name="Path 2"
          />
          <image
            width="185"
            height="48"
            xlinkHref="data:image/png;base64,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"
            data-name="Diegesis"
            transform="translate(-6728 -1298.068)"
          />
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        className={props?.className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-6783 -3243.417 240 52.348"
      >
        <g data-name="CompositeLayer">
          <path
            d="m-6751.25-3212.667 12.111-12.111 9.11-9.11-.96-.96-20.72 20.72v-29.288h-1.359v29.288l-20.72-20.72-.96.96 21.22 21.22H-6783v4.528h61.256v-4.527h-29.505Z"
            fill="#60d0b2"
            fillRule="evenodd"
            data-name="Path 2"
          />
          <image
            width="185"
            height="48"
            xlinkHref="data:image/png;base64,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"
            data-name="Diegesis"
            transform="translate(-6728 -3239.068)"
          />
        </g>
      </svg>
    );
  }
}
export default AppLogo;
`)

export const LightAppLogo = Template.bind({});
LightAppLogo.args = {
  varient: 'light',
};
LightAppLogo.parameters = buildDocs(<AppLogo varient='light' height={46} width={175} />)

