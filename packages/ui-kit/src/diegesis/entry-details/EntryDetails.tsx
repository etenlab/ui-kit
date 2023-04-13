import { Box, Container, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import PageFooter, { PageFooterProps } from '../PageFooter';
import PageHeader, { PageHeaderProps } from '../PageHeader';
import SideNav, { SideNavProps } from '../SideNav';
import TopControls, { EntryDetailTopControlProps } from './TopControls';
import DataTable, { HeadCell } from '../data-table/DataTable';
import SelectControl, { SelectControlProps } from '../SelectControl';
import ActionButtons from './ActionButtons';
import { BackButton, BackBtnProps } from '../BackButton';

//#region types
export type EntryDetailKeyValue = {
  key: string;
  value: string;
};
export type EntryDetailPageProps = {
  headerProps?: PageHeaderProps;
  sideNavProps?: SideNavProps;
  topControlProps?: EntryDetailTopControlProps;
  footerProps?: PageFooterProps;
  tblCells?: HeadCell[];
  bookResource?: { lable: string; selectControl: SelectControlProps };
  backBtnProps?: BackBtnProps;
};
//#endregion

//#region mock data
const headCells: HeadCell[] = [
  { id: 'key', disablePadding: true, label: '', numeric: false },
  { id: 'value', disablePadding: false, label: '', numeric: false },
  { id: 'emptyColumn1', disablePadding: false, label: '', numeric: false },
];
const sampleData: EntryDetailKeyValue[] = [
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
export const MOCK_ENTRY_DETAIL_PAGE: EntryDetailPageProps = {
  bookResource: {
    lable: 'Book Resources',
    selectControl: { label: 'Select a book', options: [], onChange(_value) {} },
  },
};
//#endregion

export function EntryDetailPage(props: EntryDetailPageProps) {
  const [isSideNavOpen, setSideNavOpenStatus] = useState(false);
  return (
    <Box component={'div'}>
      <PageHeader
        openSideNav={() => setSideNavOpenStatus(true)}
        {...props.sideNavProps}
      />
      <SideNav
        open={isSideNavOpen}
        close={() => {
          setSideNavOpenStatus(false);
        }}
        {...props.sideNavProps}
      />
      <br />
      <Container component={'div'}>
        <TopControls {...props.topControlProps} />
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
          <Typography variant="h3">{props.bookResource?.lable}</Typography>
          <SelectControl
            label={props.bookResource?.selectControl?.label}
            options={props.bookResource?.selectControl?.options || []}
            onChange={props.bookResource?.selectControl?.onChange!}
            value={props.bookResource?.selectControl?.value}
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
          <BackButton {...props.backBtnProps} />
        </StyledBackButtonContainer>
      </StyledDetailSection>
      <PageFooter {...props.footerProps} />
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
