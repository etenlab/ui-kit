import { Box } from '@mui/material';
import React, { useState } from 'react';
import { FlexibleHeader } from './Header';
import { SideNav, SideNavProps } from '../SideNav';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from './UIConfigProvider';
import { FlexibleFooter } from './Footer';
import { withFlexible } from './withFlexible';

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
      <SideNav
        {...sideNavProps}
        open={isSideNavOpen}
        close={() => {
          setSideNavOpenStatus(false);
        }}
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
