import { Button, Container, Stack, Typography, styled } from '@mui/material';
import React from 'react';

export type AboutDiegesisSectionProps = {
  aboutText?: string;
  coverUrl?: string;
  aboutHref?: string;
  aboutHrefText?: string;
};

export const MOCK_ABOUT_DIEGESIS_PROPS: Partial<AboutDiegesisSectionProps> = {
  aboutText: `Diegesis is a place to find Bibles and related resources, in a
  variety of formats, released under open licences.`,
  aboutHref: '/',
  aboutHrefText: 'About Diegesis',
  coverUrl: '',
};

export function AboutDiegesisSection(props: AboutDiegesisSectionProps) {
  return (
    <StyledContainer>
      <ContentBox>
        <AboutDiegesisBox>
          <Stack
            direction={'column'}
            alignItems={'flex-start'}
            justifyContent={'space-between'}
            height={'100%'}
            width={'100%'}
          >
            <StyledH2Typo variant="h2">{props.aboutText}</StyledH2Typo>
            <StyledAboutButton
              href={props.aboutHref}
              variant={'text'}
              size={'large'}
              color={'dark'}
            >
              {props.aboutHrefText}
            </StyledAboutButton>
          </Stack>
        </AboutDiegesisBox>
        <CoverImgContainer
          className="cover-img-container"
          style={{ backgroundImage: `url(${props.coverUrl || ''})` }}
        ></CoverImgContainer>
      </ContentBox>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '50px 0px',
  paddingBottom: '112px',
  [theme.breakpoints.down('sm')]: {
    padding: '30px 0px',
    paddingBottom: '30px',
  },
}));
const ContentBox = styled('div')(({ theme }) => ({
  display: 'block',
  position: 'relative',
  height: '498px',
  margin: '20px 40px',
  [theme.breakpoints.down('sm')]: {
    margin: '20px 10px',
  },
}));
const AboutDiegesisBox = styled('div')(({ theme }) => ({
  padding: '50px',
  margin: '50px 0px',
  backgroundColor: theme.palette.background['light-gray'],
  zIndex: 1,
  display: 'inline-block',
  height: '80%',
  width: '50%',
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    margin: '0px',
    padding: '20px',
    paddingBottom: '30%',
    zIndex: 1,
    display: 'inline-block',
    height: '60%',
    width: '100%',
  },
}));
const CoverImgContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background['light-gray2'],
  height: '498px',
  width: '65%',
  right: '0',
  top: '0',
  bottom: '0',
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    height: '176px',
    width: '80%',
    margin: '0px auto',
    left: 0,
    top: '52%',
    zIndex: 2,
  },
}));
const StyledH2Typo = styled(Typography)(({ theme }) => ({
  fontFamily: 'Helvetica',
  fontSize: '30px',
  lineHeight: '34px',
  fontWeight: 'normal',
  textTransform: 'none',
  color: theme.palette.text['darker-gray'],
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    lineHeight: '24px',
    paddingBottom: '25px',
  },
}));
const StyledAboutButton = styled(Button)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.text['turquoise-light']}`,
  fontSize: '20px',
  lineHeight: '20px',
  textTransform: 'none',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
    lineHeight: '20px',
  },
}));

export default AboutDiegesisSection;
