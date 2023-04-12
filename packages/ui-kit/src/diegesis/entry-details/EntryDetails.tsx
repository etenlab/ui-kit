import { Box, Container, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import PageFooter from '../PageFooter';
import PageHeader from '../PageHeader';
import SideNav from '../SideNav';
import TopControls from './TopControls';
import DataTable, { HeadCell } from '../data-table/DataTable';
import SelectControl from '../SelectControl';
import ActionButtons from './ActionButtons';
import { BackButton } from '../BackButton';

interface IProps {}
interface IData {
  key: string;
  value: string;
}
const headCells: HeadCell[] = [
  { id: 'key', disablePadding: true, label: '', numeric: false },
  { id: 'value', disablePadding: false, label: '', numeric: false },
  { id: 'emptyColumn1', disablePadding: false, label: '', numeric: false },
];
const sampleData: IData[] = [
  { key: 'Details', value: '' },
  { key: 'Abbreviation', value: 'engBBE' },
  { key: 'Copyright', value: 'engBBE' },
  { key: 'Language', value: 'engBBE' },
  { key: 'Data source', value: 'engBBE' },
  { key: 'Owner', value: 'engBBE' },
  { key: 'Entry ID', value: 'engBBE' },
  { key: 'Revision', value: 'engBBE' },
  { key: 'Content', value: '39 OT, 27 NT' },
];
export function EntryDetailPage(_props: IProps) {
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
      <br />
      <Container component={'div'}>
        <TopControls />
      </Container>
      <StyledDetailSection>
        <StyledDivider />
        <DataTable
          expandableRowOnMobile={false}
          headCells={headCells}
          rows={sampleData}
        />
        <StyledBookResourceBox
          direction={'column'}
          alignItems={'flex-start'}
          justifyContent={'center'}
        >
          <Typography variant="h3">Book Resources</Typography>
          <SelectControl
            label="Select a book"
            options={[]}
            onChange={() => {}}
          />
        </StyledBookResourceBox>
        <StyledDivider marginTop={3} marginBottom={3} />
        <Stack
          direction={'column'}
          width={'50%'}
          alignItems={'flex-end'}
          sx={(theme) => ({
            marginTop: '50px',
            marginBottom: '50px',
            [theme.breakpoints.down('sm')]: {
              width: '100%',
              marginTop: '25px',
              marginBottom: '25px',
            },
          })}
        >
          <ActionButtons />
        </Stack>
        <StyledBackButtonContainer flexDirection={'row'} className="pb-2">
          <BackButton />
        </StyledBackButtonContainer>
      </StyledDetailSection>
      <PageFooter />
    </Box>
  );
}

const StyledDetailSection = styled(Container)(({ theme }) => ({
  marginTop: '3rem',
  '.MuiTableBody-root .MuiTableRow-root:first-child > .MuiTableCell-root': {
    padding: '16px',
    paddingLeft: '0px',
    color: theme.palette.text['darker-gray'],
    fontWeight: 700,
    fontFamily: 'Helvetica',
    fontSize: '1.1rem',
  },
  '.MuiTableHead-root': {
    display: 'none',
  },
  '.MuiTablePagination-root': {
    display: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    '.MuiTableContainer-root .MuiTable-root': {
      width: '100%',
    },
  },
}));
const StyledDivider = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  height: 3,
  backgroundColor: theme.palette.background['turquoise-light'],
}));
const StyledBookResourceBox = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  backgroundColor: theme.palette.background['light-gray'],
  padding: '20px',
  paddingTop: '25px',
  '.MuiTypography-h3': {
    fontWeight: 700,
    fontFamily: 'Helvetica',
    marginBottom: '5px',
  },
  '.MuiOutlinedInput-root': {
    width: '272px',
    '.MuiSelect-outlined': {
      paddingTop: '10px',
      paddingBottom: '10px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '.MuiOutlinedInput-root': {
      width: '100%',
    },
  },
}));
const StyledBackButtonContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  paddingBottom: '1.5rem',
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

export default EntryDetailPage;
