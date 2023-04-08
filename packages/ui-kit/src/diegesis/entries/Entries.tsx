import { Box, Container, styled } from '@mui/material';
import React, { useState } from 'react';
import PageFooter from '../PageFooter';
import PageHeader from '../PageHeader';
import SideNav from '../SideNav';
import EntriesTopControls from './EntriesTopControls';
import EntriesDataTable from './EntriesDataTable';
import './Entries.css';

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
      <Container className="table-section">
        <EntriesDataTable />
      </Container>
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
//#endregion

export default EntriesPage;
