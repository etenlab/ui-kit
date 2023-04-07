import { Typography, styled } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import PageFooter from '../PageFooter';
import PageHeader from '../PageHeader';
import SideNav from '../SideNav';
import AboutContentSection from './AboutContentSection';
import './About.css';
import AboutPictureSection from './AboutPictureSection';
import { useColorModeContext } from '../../ThemeProvider';
import PageTitleTypo from '../styleds/PageTitleTypo';

interface IProps {}

//#region data
const dataAboutContentSection1 = {
  title: 'Aliquam aliquet mollis',
  description:
    'Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum. Phasellus nisi metus, viverra nec faucibus id, ultrices non mauris. Donec maximus consectetur congue. Vestibulum scelerisque cursus sem at commodo. Donec nunc odio, molestie a erat ac, dapibus imperdiet urna.',
  points: [
    'Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum.',
    'Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum.',
    'Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum.',
  ],
};
//#endregion

export function AboutPage(_props: IProps) {
  const [isSideNavOpen, setSideNavOpenStatus] = useState(false);
  const colorMode = useColorModeContext();
  return (
    <div id="about-page">
      <PageHeader openSideNav={() => setSideNavOpenStatus(true)} />
      <SideNav
        open={isSideNavOpen}
        close={() => {
          setSideNavOpenStatus(false);
        }}
      />
      <StyledHeaderSection>
        <PageTitleTypo variant={'h1'}>About Diegesis</PageTitleTypo>
        <StyledPageSubTitle variant={'h2'}>
          Open source Bibles resources
        </StyledPageSubTitle>
      </StyledHeaderSection>
      <StyledContentSection>
        <AboutContentSection
          title={dataAboutContentSection1.title}
          description={dataAboutContentSection1.description}
          points={dataAboutContentSection1.points}
        />
        <AboutPictureSection caption="Image Caption" />
        <Container>
          <Typography
            variant="h1"
            textTransform={'none'}
            color={'text.darker-gray'}
            fontFamily={'Noto Serif Display'}
            fontSize={'30px'}
            padding={'50px 0px'}
          >
            “Diegesis is a place to find Bibles and related resources, in a
            variety of formats, released under open licences.”
          </Typography>
        </Container>
        <AboutContentSection
          title={dataAboutContentSection1.title}
          description={dataAboutContentSection1.description}
          points={dataAboutContentSection1.points}
        />
      </StyledContentSection>
      <PageFooter />
    </div>
  );
}

const StyledHeaderSection = styled(Container)(({ theme }) => ({
  paddingTop: '60px',
  paddingBottom: '60px',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));
const StyledPageSubTitle = styled(Typography)(({ theme }) => ({
  marginTop: '10px',
  fontSize: '34px',
  lineHeight: '40px',
  fontWeight: 300,
  fontStyle: 'italic',
  fontFamily: 'Noto Serif Display',
  color: theme.palette.text['darker-gray'],
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    lineHeight: '34px',
    fontWeight: 300,
    textAlign: 'center',
  },
}));
const StyledContentSection = styled(Container)(({ theme }) => ({
  paddingLeft: '8vw',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: '8vw',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: 'unset',
  },
}));
export default AboutPage;
