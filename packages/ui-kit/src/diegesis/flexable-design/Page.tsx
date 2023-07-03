import React from 'react';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from './UIConfigProvider';
import { withFlexible } from './withFlexible';
import { FlexiblePageLayout } from './PageLayout';
import { SideNavProps } from '../SideNav';

export type PageConfig = BasicUIConfig & {
  contents: {};
  styles: {};
};
const defaultPageConfig: PageConfig = {
  componentName: 'Page',
  contents: {},
  styles: {},
};
export type PageProps = BasicFlexibleProps<PageConfig> & {
  children?: JSX.Element;
  sideNavProps?: SideNavProps;
};
export const Page: FlexibleComponent<PageProps> = ({
  uiConfig = defaultPageConfig,
  children,
  sideNavProps,
}) => {
  return (
    <FlexiblePageLayout
      id={'page-flexible-page-layout'}
      parentPath={uiConfig.configPath!}
      sideNavProps={sideNavProps}
    >
      {children}
    </FlexiblePageLayout>
  );
};
Page.componentName = defaultPageConfig.componentName;

export const FlexiblePage = withFlexible<PageConfig, PageProps>(
  Page,
  defaultPageConfig,
);
