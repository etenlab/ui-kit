import React, { useState } from 'react';
import { styled } from '@mui/material';

import SideNav, { MOCK_SIDE_NAV_PROPS } from '../SideNav';

import { FlexibleLandingSection } from './LandingSection';
import { FlexibleHeader } from './Header';
import { FlexibleFooter } from './Footer';

import {
  BasicUIConfig,
  BasicFlexibleProps,
} from './UIConfigProvider/UIConfigProvider';
import { withFlexible } from './withFlexible';

interface HomeConfig extends BasicUIConfig {
  contents: {};
  styles: {};
}

export const defaultHomeConfig: HomeConfig = {
  componentName: 'Home',
  contents: {},
  styles: {},
};

export interface HomeProps extends BasicFlexibleProps<HomeConfig> {}

export function Home({ uiConfig = defaultHomeConfig }: HomeProps) {
  const [isSideNavOpen, setSideNavOpenStatus] = useState(false);
  return (
    <StyledWrapper>
      <FlexibleHeader
        openSideNav={() => setSideNavOpenStatus(true)}
        id="home-header"
        parentPath={uiConfig.configPath!}
      />
      <SideNav
        open={isSideNavOpen}
        close={() => {
          setSideNavOpenStatus(false);
        }}
        {...MOCK_SIDE_NAV_PROPS}
      />
      <FlexibleLandingSection
        id="home-landing-section"
        parentPath={uiConfig.configPath!}
      />
      <FlexibleFooter id="home-footer" parentPath={uiConfig.configPath!} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled('div')(() => ({
  position: 'relative',
  minHeight: '100%',
}));

export const FlexibleHome = withFlexible<HomeConfig, HomeProps>(
  Home,
  defaultHomeConfig,
);
