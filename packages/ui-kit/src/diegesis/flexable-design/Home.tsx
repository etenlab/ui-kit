import React from 'react';
import { FlexibleLandingSection } from './LandingSection';

import {
  BasicUIConfig,
  BasicFlexibleProps,
  FlexibleComponent,
} from './UIConfigProvider/UIConfigProvider';
import { withFlexible } from './withFlexible';
import { FlexiblePageLayout } from './PageLayout';

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

export const Home: FlexibleComponent<HomeProps> = ({
  uiConfig = defaultHomeConfig,
}) => {
  return (
    <FlexiblePageLayout id={'home-page'} parentPath={uiConfig?.configPath!}>
      <FlexibleLandingSection
        id="home-landing-section"
        parentPath={uiConfig.configPath!}
      />
    </FlexiblePageLayout>
  );
};
Home.componentName = 'Home';

export const FlexibleHome = withFlexible<HomeConfig, HomeProps>(
  Home,
  defaultHomeConfig,
);
