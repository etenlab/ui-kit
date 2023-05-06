import { Container, styled } from '@mui/material';
import React from 'react';
import { SideNavProps } from '../../SideNav';
import {
  FlexibleEntriesTopControls,
  EntriesTopControlsProps,
} from './EntriesTopControls';
import { FlexiblePageLayout } from '../PageLayout';
import { BasicFlexibleProps, BasicUIConfig } from '../UIConfigProvider';
import { withFlexible } from '../withFlexible';
import { EntriesDataTable, EntriesDataTableProps } from '../../entries';

//#region types
export type EntriesPageConfig = BasicUIConfig & {
  contents: {};
  styles: {};
};
export const defaultEntriesPageConfig: EntriesPageConfig = {
  componentName: EntriesPage.name,
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

export function EntriesPage(props: EntriesPageProps) {
  const { uiConfig = defaultEntriesPageConfig } = props;
  if (props.noPageLayout) {
    return (
      <>
        <StyledControlsContainer>
          <FlexibleEntriesTopControls
            id="entries-top-controls"
            parentPath={uiConfig?.configPath!}
            {...props.topControlProps}
          />
        </StyledControlsContainer>
        <StyledTableContainer>
          <EntriesDataTable {...props.entriesDataTable} />
        </StyledTableContainer>
      </>
    );
  }
  return (
    <FlexiblePageLayout
      id={'entries-list-page'}
      parentPath={uiConfig?.configPath!}
      sideNavProps={props.sideNavProps}
    >
      <>
        <StyledControlsContainer>
          <FlexibleEntriesTopControls
            id="entries-top-controls"
            parentPath={uiConfig?.configPath!}
            {...props.topControlProps}
          />
        </StyledControlsContainer>
        <StyledTableContainer>
          <EntriesDataTable {...props.entriesDataTable} />
        </StyledTableContainer>
      </>
    </FlexiblePageLayout>
  );
}

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

export const FlexibleEntriesPage = withFlexible<
  EntriesPageConfig,
  EntriesPageProps
>(EntriesPage, defaultEntriesPageConfig);
