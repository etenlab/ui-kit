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
const StyledTableContainer = styled(Container)(({}) => ({
  paddingBottom: '112px',
}));
//#endregion

export default EntriesPage;
