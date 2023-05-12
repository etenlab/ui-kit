import React from 'react';
import { Container, Typography, styled, Stack } from '@mui/material';
import { FlexibleSectionActionButton } from './SectionActionButton';

import {
  BasicUIConfig,
  BasicFlexibleProps,
} from './UIConfigProvider/UIConfigProvider';
import { withFlexible } from './withFlexible';
import { getOrgFunName } from './utility';

interface LandingSectionConfig extends BasicUIConfig {
  contents: {
    headingText?: string;
    captionText?: string;
  };
  styles: {
    headingColor: string;
    captionColor: string;
    fontFamily: string;
  };
}

export const defaultLandingSectionConfig: LandingSectionConfig = {
  componentName: getOrgFunName(LandingSection.name),
  contents: {
    headingText: `Diegesis is a place to find Bibles and related resources, in a variety
    of formats, released under open licences*.`,
    captionText: `* In other words, you can use, share, improve and translate them.`,
  },
  styles: {
    headingColor: '#31373A',
    captionColor: '#707070',
    fontFamily: 'Noto Serif Display',
  },
};

export interface LandingSectionProps
  extends BasicFlexibleProps<LandingSectionConfig> {
  actionBtnHref?: string;
}

export function LandingSection({
  uiConfig = defaultLandingSectionConfig,
}: LandingSectionProps) {
  return (
    <StyledContainer className="landing-section">
      <Stack
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Typography
          variant="h1"
          sx={(theme) => ({
            color: uiConfig.styles.headingColor,
            fontSize: '3rem',
            lineHeight: theme.typography.pxToRem(60),
            fontFamily: uiConfig.styles.fontFamily,
            fontWeight: 400,
            padding: theme.typography.pxToRem(50),
            textTransform: 'unset',
            [theme.breakpoints.down('sm')]: {
              fontSize: '1.9rem',
              lineHeight: '2.1rem',
              padding: '30px 5px',
            },
          })}
        >
          {uiConfig?.contents.headingText}
        </Typography>
        <FlexibleSectionActionButton
          id="landing-section-action-button"
          parentPath={uiConfig.configPath!}
        />
        <Typography
          variant="caption"
          sx={(theme) => ({
            padding: '50px 0px',
            fontWeight: 400,
            fontFamily: uiConfig.styles.fontFamily,
            fontSize: '1.25rem',
            lineHeight: '1.25rem',
            color: uiConfig.styles.captionColor,
            [theme.breakpoints.down('sm')]: {
              padding: '30px 5px',
              fontSize: '1rem',
              lineHeight: '1.4rem',
            },
          })}
        >
          {uiConfig.contents.captionText}
        </Typography>
      </Stack>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.typography.pxToRem(112),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.typography.pxToRem(30),
  },
}));

export const FlexibleLandingSection = withFlexible<
  LandingSectionConfig,
  LandingSectionProps
>(LandingSection, defaultLandingSectionConfig);
