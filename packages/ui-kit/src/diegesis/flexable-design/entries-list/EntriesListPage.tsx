import { Container, styled } from '@mui/material';
import React from 'react';
import { SideNavProps } from '../../SideNav';
import {
  FlexibleEntriesTopControls,
  EntriesTopControlsProps,
} from './EntriesTopControls';
import { FlexiblePageLayout } from '../PageLayout';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from '../UIConfigProvider';
import { EntriesDataTable, EntriesDataTableProps } from './EntriesDataTable';
import { withFlexible } from '../withFlexible';

//#region types
export type EntriesPageConfig = BasicUIConfig & {
  contents: {};
  styles: {};
};
export const defaultEntriesPageConfig: EntriesPageConfig = {
  componentName: 'EntriesListPage',
  contents: {},
  styles: {},
};
export type EntriesPageProps = BasicFlexibleProps<EntriesPageConfig> & {
  sideNavProps?: SideNavProps;
  topControlProps?: EntriesTopControlsProps;
  entriesDataTable?: EntriesDataTableProps;
  noPageLayout?: boolean;
};
//#endregion

export const EntriesListPage: FlexibleComponent<EntriesPageProps> = ({
  uiConfig = defaultEntriesPageConfig,
  topControlProps,
  entriesDataTable,
  noPageLayout,
  sideNavProps,
}) => {
  const pageContent = (
    <>
      <StyledControlsContainer>
        <FlexibleEntriesTopControls
          {...topControlProps}
          id="entries-list-top-controls"
          parentPath={uiConfig?.configPath!}
        />
      </StyledControlsContainer>
      <StyledTableContainer>
        <EntriesDataTable {...entriesDataTable} />
      </StyledTableContainer>
    </>
  );
  if (noPageLayout) {
    return pageContent;
  }
  return (
    <FlexiblePageLayout
      id={'entries-list-page'}
      parentPath={uiConfig?.configPath!}
      sideNavProps={sideNavProps}
    >
      {pageContent}
    </FlexiblePageLayout>
  );
};
EntriesListPage.componentName = defaultEntriesPageConfig.componentName;

export const FlexibleEntriesListPage = withFlexible<
  EntriesPageConfig,
  EntriesPageProps
>(EntriesListPage, defaultEntriesPageConfig);

//#region styled components
const StyledControlsContainer = styled(Container)(({ theme }) => ({
  paddingTop: '60px',
  paddingBottom: '30px',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '30px',
  },
}));
const StyledTableContainer = styled(Container)(({ theme }) => ({
  paddingBottom: '112px',
  [theme.breakpoints.down('sm')]: {
    '.MuiTable-root': {
      marginTop: '2rem',
      width: '100%',
      minWidth: '100%',
    },
    '.MuiTableCell-head': {
      display: 'none',
      borderBottom: '0px',
    },
    '.MuiTableBody-root .MuiTableRow-root': {
      '.MuiTableCell-root': {
        display: 'none',
      },
      '.MuiTableCell-root:nth-of-type(1) , .MuiTableCell-root:nth-of-type(2)': {
        display: 'table-cell',
        paddingRight: '0px',
      },
    },
  },
}));
//#endregion
