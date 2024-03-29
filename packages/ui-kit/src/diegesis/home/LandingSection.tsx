import { Container, Typography, styled } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import SectionActionButton from './SectionActionButton';

export type LandingSectionProps = {
  headingText?: string;
  actionBtnText?: string;
  actionBtnHref?: string;
  captionText?: string;
};

export const MOCK_LANDING_PROPS: Partial<LandingSectionProps> = {
  headingText: `Diegesis is a place to find Bibles and related resources, in a variety
  of formats, released under open licences*.`,
  captionText: `* In other words, you can use, share, improve and translate them.`,
  actionBtnText: 'Browse content',
  actionBtnHref: '/',
};

export function LandingSection(props: LandingSectionProps) {
  return (
    <StyledContainer className="landing-section">
      <Stack
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <StyledTypographyH1 variant="h1">
          {props.headingText}
        </StyledTypographyH1>
        <StyledSectionActionButton
          label={props.actionBtnText || ''}
          href={props.actionBtnHref}
        />
        <StyledTypographyCaption variant="caption">
          {props.captionText}
        </StyledTypographyCaption>
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
const StyledTypographyH1 = styled(Typography)(({ theme }) => ({
  color: theme.palette.text['darker-gray'],
  fontSize: '3rem',
  lineHeight: theme.typography.pxToRem(60),
  fontFamily: 'Noto Serif Display',
  fontWeight: 400,
  padding: theme.typography.pxToRem(50),
  textTransform: 'unset',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.9rem',
    lineHeight: '2.1rem',
    padding: '30px 5px',
  },
}));
const StyledTypographyCaption = styled(Typography)(({ theme }) => ({
  padding: '50px 0px',
  fontWeight: 400,
  fontFamily: 'Noto Serif Display',
  fontSize: '1.25rem',
  lineHeight: '1.25rem',
  color: theme.palette.text['lighter-gray'],
  [theme.breakpoints.down('sm')]: {
    padding: '30px 5px',
    fontSize: '1rem',
    lineHeight: '1.4rem',
  },
}));
const StyledSectionActionButton = styled(SectionActionButton)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    minWidth: theme.typography.pxToRem(275),
    minHeight: theme.typography.pxToRem(68),
  },
}));
export default LandingSection;
