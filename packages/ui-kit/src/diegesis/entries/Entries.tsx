import { Box, Container, styled } from '@mui/material';
import React, { useState } from 'react';
import PageFooter, { PageFooterProps } from '../PageFooter';
import PageHeader, { PageHeaderProps } from '../PageHeader';
import SideNav, { SideNavProps } from '../SideNav';
import EntriesTopControls, {
  EntriesTopControlsProps,
} from './EntriesTopControls';
import EntriesDataTable, { EntriesDataTableProps } from './EntriesDataTable';

export type EntriesPageProps = {
  headerProps?: PageHeaderProps;
  sideNavProps?: SideNavProps;
  topControlProps?: EntriesTopControlsProps;
  entriesDataTable?: EntriesDataTableProps;
  footerProps?: PageFooterProps;
};
export function EntriesPage(props: EntriesPageProps) {
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
      <StyledControlsContainer>
        <EntriesTopControls {...props.topControlProps} />
      </StyledControlsContainer>
      <StyledTableContainer>
        <EntriesDataTable {...props.entriesDataTable} />
      </StyledTableContainer>
      <PageFooter {...props.footerProps} />
    </Box>
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
