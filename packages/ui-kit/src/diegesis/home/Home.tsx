import React, { useState } from 'react';
import PageFooter from '../PageFooter';
import PageHeader from '../PageHeader';
import SideNav from '../SideNav';
import AboutDiegesisSection from './AboutDiegesisSection';
import LandingSection from './LandingSection';
import StatSection from './StatSection';
import { styled } from '@mui/material';

interface IProps {}
export function HomePage(_props: IProps) {
  const [isSideNavOpen, setSideNavOpenStatus] = useState(false);
  return (
    <StyledWrapper>
      <PageHeader openSideNav={() => setSideNavOpenStatus(true)}></PageHeader>
      <SideNav
        open={isSideNavOpen}
        close={() => {
          setSideNavOpenStatus(false);
        }}
      />
      <LandingSection />
      <StatSection />
      <AboutDiegesisSection />
      <PageFooter></PageFooter>
    </StyledWrapper>
  );
}

const StyledWrapper = styled('div')(({}) => ({
  position: 'relative',
  minHeight: '100%'
}))
export default HomePage;
