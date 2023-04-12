import { Box, Container, styled } from '@mui/material';
import React, { useState } from 'react';
import PageFooter from '../PageFooter';
import PageHeader from '../PageHeader';
import SideNav from '../SideNav';
import EntriesTopControls from './EntriesTopControls';
import EntriesDataTable from './EntriesDataTable';

interface IProps {}
export function EntriesPage(_props: IProps) {
  const [isSideNavOpen, setSideNavOpenStatus] = useState(false);
  return (
    <Box component={'div'}>
      <PageHeader openSideNav={() => setSideNavOpenStatus(true)} />
      <SideNav
        open={isSideNavOpen}
        close={() => {
          setSideNavOpenStatus(false);
        }}
      />
      <StyledControlsContainer>
        <EntriesTopControls />
      </StyledControlsContainer>
      <StyledTableContainer>
        <EntriesDataTable />
      </StyledTableContainer>
      <PageFooter />
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
