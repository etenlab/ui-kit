import { Container, styled } from '@mui/material';
import React from 'react';
import { MOCK_PAGE_FOOTER_PROPS, PageFooterProps } from '../PageFooter';
import { MOCK_PAGE_HEADER_PROPS, PageHeaderProps } from '../PageHeader';
import { MOCK_SIDE_NAV_PROPS, SideNavProps } from '../SideNav';
import EntriesTopControls, {
  EntriesTopControlsProps,
  MOCK_ENTRIES_TOP_CONTROLS_PROPS,
} from './EntriesTopControls';
import EntriesDataTable, {
  EntriesDataTableProps,
  MOCK_ENTRIES_DATA_TABLE_PROPS,
} from './EntriesDataTable';
import PageLayout from '../PageLayout';

//#region types
export type EntriesPageProps = {
  headerProps?: PageHeaderProps;
  sideNavProps?: SideNavProps;
  topControlProps?: EntriesTopControlsProps;
  entriesDataTable?: EntriesDataTableProps;
  footerProps?: PageFooterProps;
  noPageLayout?: boolean;
};
//#endregion

//#region mockup data
export const MOCK_ENTRIES_PAGE_PROPS: EntriesPageProps = {
  headerProps: MOCK_PAGE_HEADER_PROPS,
  footerProps: MOCK_PAGE_FOOTER_PROPS,
  sideNavProps: MOCK_SIDE_NAV_PROPS as any,
  topControlProps: MOCK_ENTRIES_TOP_CONTROLS_PROPS,
  entriesDataTable: MOCK_ENTRIES_DATA_TABLE_PROPS,
};
//#endregion

export function EntriesPage(props: EntriesPageProps) {
  if (props.noPageLayout) {
    return (
      <>
        <StyledControlsContainer>
          <EntriesTopControls {...props.topControlProps} />
        </StyledControlsContainer>
        <StyledTableContainer>
          <EntriesDataTable {...props.entriesDataTable} />
        </StyledTableContainer>
      </>
    );
  }
  return (
    <PageLayout
      key={'entries-list-page'}
      headerProps={props.headerProps}
      sideNavProps={props.sideNavProps}
      footerProps={props.footerProps}
    >
      <>
        <StyledControlsContainer>
          <EntriesTopControls {...props.topControlProps} />
        </StyledControlsContainer>
        <StyledTableContainer>
          <EntriesDataTable {...props.entriesDataTable} />
        </StyledTableContainer>
      </>
    </PageLayout>
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

export default EntriesPage;
