import React from 'react';

import { Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';

import {
  BasicUIConfig,
  BasicFlexibleProps,
  FlexibleMarkDown,
  FlexibleComponent,
} from './UIConfigProvider/UIConfigProvider';
import { withFlexible } from './withFlexible';

import { FlexibleAppLogo } from './AppLogo';
import { MarkDown } from './MarkDown';

interface FooterConfig extends BasicUIConfig {
  contents: {
    // footerText?: string;
    brandName?: string;
    year?: string;
  };
  styles: {
    backgroundColor: string;
    containerPadding: string;
    fontFamily: string;
  };
  markdowns: {
    footerDescription: FlexibleMarkDown;
  };
}

export const defaultFootConfig: FooterConfig = {
  componentName: 'Footer',
  contents: {
    brandName: `MVH Solutions`,
    year: `${new Date().getFullYear()}`,
  },
  styles: {
    backgroundColor: '#31373A',
    containerPadding: '3rem 0px',
    fontFamily: 'Noto Serif Display',
  },
  markdowns: {
    footerDescription: {
      content:
        'Diegesis.Bible is a project by MVH Solutions that uses the Proskomma Scripture Runtime Engine.',
      css: `
        p {
          color: #fff;
          font-family: Noto Serif Display;
          font-size: '1.1rem';
          line-height: '1.5rem';
          font-weight: 400;
          padding: 0;
        }
      `,
      className: '',
      id: 'footerDescription',
    },
  },
};
//
export interface FooterProps extends BasicFlexibleProps<FooterConfig> {}

export const Footer: FlexibleComponent<FooterProps> = ({
  uiConfig = defaultFootConfig,
}) => {
  return (
    <div
      style={{
        padding: uiConfig.styles.containerPadding,
        height: '17rem',
        backgroundColor: uiConfig.styles.backgroundColor,
      }}
    >
      <Container>
        <Stack direction={'column'} alignItems={'start'}>
          <Stack direction={'row'} className="full-width" alignItems={'center'}>
            <FlexibleAppLogo
              variant="light"
              parentPath={uiConfig.configPath!}
              id="footer-app-logo"
            />
          </Stack>
          <Stack
            sx={{
              marginTop: '1.2rem',
              flexDirection: 'row',
              alignItems: 'flex-end',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <MarkDown {...uiConfig.markdowns.footerDescription} />
            {/* <Typography
              variant="body1"
              sx={(theme) => ({
                color: theme.palette.text.white,
                fontFamily: uiConfig.styles.fontFamily,
                fontSize: '1.1rem',
                lineHeight: '1.5rem',
                fontWeight: 400,
                [theme.breakpoints.down('sm')]: {
                  marginTop: '25px',
                },
              })}
            >
              {uiConfig.contents.footerText}
            </Typography> */}
            <Typography
              variant="body1"
              sx={(theme) => ({
                color: theme.palette.text.white,
                fontFamily: uiConfig.styles.fontFamily,
                fontSize: '1.1rem',
                lineHeight: '1.5rem',
                fontWeight: 400,
                [theme.breakpoints.down('sm')]: {
                  marginTop: '25px',
                },
              })}
            >
              © {uiConfig.contents.brandName} {uiConfig.contents.year}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};
Footer.componentName = 'Footer';

export const FlexibleFooter = withFlexible<FooterConfig, FooterProps>(
  Footer,
  defaultFootConfig,
);
