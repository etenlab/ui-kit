import { Box } from '@mui/material';
import PageHeader, { PageHeaderProps } from './PageHeader';
import React, { useState } from 'react';
import SideNav, { SideNavProps } from './SideNav';
import PageFooter, { PageFooterProps } from './PageFooter';

export type PageLayoutProps = {
  headerProps?: PageHeaderProps;
  sideNavProps?: SideNavProps;
  children?: JSX.Element;
  footerProps?: PageFooterProps;
};
export function PageLayout(props: PageLayoutProps) {
  const [isSideNavOpen, setSideNavOpenStatus] = useState(false);
  return (
    <Box component={'div'}>
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
      {props.children}
      <PageFooter {...props.footerProps} />
    </Box>
  );
}

export default PageLayout;
