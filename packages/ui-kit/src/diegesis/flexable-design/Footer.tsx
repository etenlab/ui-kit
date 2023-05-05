import React from 'react';

import { Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';

import { BasicUIConfig, BasicFlexibleProps } from './UIConfigProvider';
import { withFlexible } from './withFlexible';

import { FlexibleAppLogo } from './AppLogo';

interface FooterConfig extends BasicUIConfig {
  contents: {
    footerText?: string;
    brandName?: string;
    year?: string;
  };
  styles: {
    backgroundColor: string;
    containerPadding: string;
    fontFamily: string;
  };
}

export const defaultFootConfig: FooterConfig = {
  componentName: 'Footer',
  contents: {
    footerText: `Diegesis.Bible is a project by MVH Solutions that uses the
    Proskomma Scripture Runtime Engine.`,
    brandName: `MVH Solutions`,
    year: `${new Date().getFullYear()}`,
  },
  styles: {
    backgroundColor: '#31373A',
    containerPadding: '3rem 0px',
    fontFamily: 'Noto Serif Display',
  },
};

export interface FooterProps extends BasicFlexibleProps<FooterConfig> {}

export function Footer({ uiConfig = defaultFootConfig }: FooterProps) {
  console.log('uiConfig ===> ', uiConfig);
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
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
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
              {uiConfig.contents.footerText}
            </Typography>
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
}

export const FlexibleFooter = withFlexible<FooterConfig, FooterProps>(
  Footer,
  defaultFootConfig,
);
