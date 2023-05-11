import React, { useState } from 'react';
import PageFooter, { PageFooterProps } from '../PageFooter';
import PageHeader, { PageHeaderProps } from '../PageHeader';
import { SideNav, SideNavProps } from '../SideNav';
import AboutDiegesisSection, {
  AboutDiegesisSectionProps,
} from './AboutDiegesisSection';
import LandingSection, { LandingSectionProps } from './LandingSection';
import StatSection, { StatSectionProps } from './StatSection';
import { styled } from '@mui/material';

export type HomePageProps = {
  headerProps?: PageHeaderProps;
  sideNavProps?: SideNavProps;
  landingSectionProps?: LandingSectionProps;
  statSectionProps?: StatSectionProps;
  aboutDiegesisProps?: AboutDiegesisSectionProps;
  footerProps?: PageFooterProps;
};

export function HomePage(props: HomePageProps) {
  const [isSideNavOpen, setSideNavOpenStatus] = useState(false);
  return (
    <StyledWrapper>
      <PageHeader
        openSideNav={() => setSideNavOpenStatus(true)}
        {...props.headerProps}
      />
      <SideNav
        open={isSideNavOpen}
        close={() => {
          setSideNavOpenStatus(false);
        }}
        {...props.sideNavProps}
      />
      <LandingSection {...props.landingSectionProps} />
      <StatSection {...(props.statSectionProps || { stats: [] })} />
      <AboutDiegesisSection {...props.aboutDiegesisProps} />
      <PageFooter {...props.footerProps} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled('div')(() => ({
  position: 'relative',
  minHeight: '100%',
}));
export default HomePage;
