import { Box, Container, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import PageFooter from '../PageFooter';
import PageHeader from '../PageHeader';
import SideNav from '../SideNav';
import AboutContentSection from '../about/AboutContentSection';
import SelectOptions from '../SelectOptions';
import { BackButton } from '../BackButton';
import PageTitleTypo from '../styleds/PageTitleTypo';

interface IProps {}

//#region data
const dataAboutContentSection1 = {
  title: 'Aliquam aliquet mollis',
  description:
    'Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum. Phasellus nisi metus, viverra nec faucibus id, ultrices non mauris. Donec maximus consectetur congue. Vestibulum scelerisque cursus sem at commodo. Donec nunc odio, molestie a erat ac, dapibus imperdiet urna.',
  points: [],
};
//#endregion

function ViewPage(_props: IProps) {
  const [isSideNavOpen, setSideNavOpenStatus] = useState(false);
  return (
    <Box component={'div'} id="view-page">
      <PageHeader openSideNav={() => setSideNavOpenStatus(true)} />
      <SideNav
        open={isSideNavOpen}
        close={() => {
          setSideNavOpenStatus(false);
        }}
      />
      <StyledHeaderContainer className="header-section">
        <StyledBackBtnContainer>
          <BackButton />
        </StyledBackBtnContainer>
        <PageTitleTypo variant={'h1'}>Bible in Basic English</PageTitleTypo>
        <StyledActionControlContainer
          direction={'row'}
          alignItems={'center'}
          justifyContent={'flex-start'}
        >
          <StyledSelectOptions>
            <SelectOptions label="Gen" options={[]} onChange={() => {}} />
          </StyledSelectOptions>
        </StyledActionControlContainer>
        <br />
        <StyledDivider direction={'row'}></StyledDivider>
        <br />
        <StyledTitleContainer>
          <Typography
            variant="h2"
            fontStyle={'italic'}
            textAlign={'center'}
            fontFamily={'Noto Serif Display'}
          >
            The First Book of Moses,
            <br /> Commonly Called
          </Typography>
          <br />
          <Typography
            variant="h1"
            fontStyle={'italic'}
            fontFamily={'Noto Serif Display'}
          >
            Genesis
          </Typography>
        </StyledTitleContainer>
      </StyledHeaderContainer>
      <Container>
        <StyledContentContainer>
          <AboutContentSection
            title={dataAboutContentSection1.title}
            description={dataAboutContentSection1.description}
            points={dataAboutContentSection1.points}
          />
          <Container>
            <Typography
              variant="h1"
              textTransform={'none'}
              paddingTop={'25px'}
              paddingBottom={'35px'}
              fontFamily={'Noto Serif Display'}
              color={'text.darker-gray'}
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
          <br />
          <AboutContentSection
            title={dataAboutContentSection1.title}
            description={dataAboutContentSection1.description}
            points={dataAboutContentSection1.points}
          />
          <br />
          <AboutContentSection
            title={dataAboutContentSection1.title}
            description={dataAboutContentSection1.description}
            points={dataAboutContentSection1.points}
          />
          <br />
          <AboutContentSection
            title={dataAboutContentSection1.title}
            description={dataAboutContentSection1.description}
            points={dataAboutContentSection1.points}
          />
          <br />
          <br />
        </StyledContentContainer>
      </Container>
      <PageFooter />
    </Box>
  );
}

//#region styled components
const StyledHeaderContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingTop: '20px',
  },
}));
const StyledBackBtnContainer = styled(Stack)(({ theme }) => ({
  display: 'none',
  flexDirection: 'row',
  justifySelf: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    marginTop: '20px',
    marginBottom: '20px',
  },
}));
const StyledActionControlContainer = styled(Stack)(({ theme }) => ({
  marginTop: '1.2rem',
  marginBottom: '1.2rem',
  padding: '20px',
  backgroundColor: theme.palette.background['light-gray'],
  width: '100%',
}));
const StyledSelectOptions = styled('div')(({ theme }) => ({
  minWidth: '272px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
const StyledDivider = styled(Stack)(({ theme }) => ({
  height: '3px',
  backgroundColor: theme.palette.background['turquoise-light'],
  marginBottom: '1.2rem',
}));
const StyledTitleContainer = styled(Stack)(({ theme }) => ({
  alignSelf: 'center',
  alignItems: 'center',
  paddingBottom: '1.5rem',
  borderBottom: `1px solid ${theme.palette.background['light-gray2']}`,
}));
const StyledContentContainer = styled(Container)(({ theme }) => ({
  padding: '0px 10%',
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
}));
//#endregion

export default ViewPage;
