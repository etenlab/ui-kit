import { Box } from '@mui/material';
import React, { useState } from 'react';
import { FlexibleHeader } from './Header';
import { SideNavProps } from '../SideNav';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from './UIConfigProvider';
import { FlexibleFooter } from './Footer';
import { withFlexible } from './withFlexible';
import { FlexibleSideNav } from './SideNav';

export type PageLayoutConfig = BasicUIConfig & {
  contents: {};
  styles: {};
};
const defaultPageLayoutConfig: PageLayoutConfig = {
  componentName: 'PageLayout',
  contents: {},
  styles: {},
};
export type PageLayoutProps = BasicFlexibleProps<PageLayoutConfig> & {
  children?: JSX.Element;
  sideNavProps?: SideNavProps;
};
export const PageLayout: FlexibleComponent<PageLayoutProps> = ({
  uiConfig = defaultPageLayoutConfig,
  children,
  sideNavProps,
}) => {
  const [isSideNavOpen, setSideNavOpenStatus] = useState(false);
  return (
    <Box component={'div'} minHeight={'100%'} sx={{ position: 'relative' }}>
      <FlexibleHeader
        id="page-layout-header"
        openSideNav={() => setSideNavOpenStatus(true)}
        parentPath={uiConfig.configPath!}
      />
      <FlexibleSideNav
        {...sideNavProps}
        id="page-layout-side-nav"
        open={isSideNavOpen}
        close={() => {
          setSideNavOpenStatus(false);
        }}
        parentPath={uiConfig.configPath!}
      />
      {children}
      <FlexibleFooter
        id="page-layout-footer"
        parentPath={uiConfig.configPath!}
      />
    </Box>
  );
};
PageLayout.componentName = defaultPageLayoutConfig.componentName;

export const FlexiblePageLayout = withFlexible<
  PageLayoutConfig,
  PageLayoutProps
>(PageLayout, defaultPageLayoutConfig);
