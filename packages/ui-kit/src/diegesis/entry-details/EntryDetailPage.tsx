import { Container, styled } from '@mui/material';
import React from 'react';
import { MOCK_PAGE_FOOTER_PROPS, PageFooterProps } from '../PageFooter';
import { MOCK_PAGE_HEADER_PROPS, PageHeaderProps } from '../PageHeader';
import { MOCK_SIDE_NAV_PROPS, SideNavProps } from '../SideNav';
import {
  TopControls,
  EntryDetailTopControlProps,
  MOCK_ENTRY_DETAIL_TOP_CONTROL_PROPS,
} from './TopControls';
import { HeadCell } from '../data-table/DataTable';
import { SelectControlProps } from '../SelectControl';
import { BackBtnProps } from '../BackButton';
import PageLayout from '../PageLayout';
import InfoGrid, { CellData } from './InfoGrid';
import { SectionDivider } from './SectionDivider';
import BookResourceBox from './BookResourceBox';
import BottomBackBtn from './BottomBackBtn';
import BottomActionBtns from './BottomActionBtns';

export type EntryDetailPageProps = {
  headerProps?: PageHeaderProps;
  sideNavProps?: SideNavProps;
  topControlProps?: EntryDetailTopControlProps;
  footerProps?: PageFooterProps;
  tblCells?: HeadCell[];
  tblData?: CellData[];
  bookResource?: { label: string; selectControl: SelectControlProps };
  backBtnProps?: BackBtnProps;
  noPageLayout?: boolean;
};

const headCells: HeadCell[] = [
  { id: 'key', disablePadding: true, label: '', numeric: false },
  { id: 'value', disablePadding: false, label: '', numeric: false },
  { id: 'emptyColumn1', disablePadding: false, label: '', numeric: false },
];
const sampleData: CellData[] = [
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
export const MOCK_ENTRY_DETAIL_PAGE_PROPS: EntryDetailPageProps = {
  headerProps: MOCK_PAGE_HEADER_PROPS,
  footerProps: MOCK_PAGE_FOOTER_PROPS,
  sideNavProps: MOCK_SIDE_NAV_PROPS as any,
  topControlProps: MOCK_ENTRY_DETAIL_TOP_CONTROL_PROPS,
  tblCells: headCells,
  tblData: sampleData,
  bookResource: {
    label: 'Book Resources',
    selectControl: { label: 'Select a book', options: [], onChange(_value) {} },
  },
};

export function EntryDetailPage(props: EntryDetailPageProps) {
  const pageContent = (
    <>
      <br />
      <Container component={'div'}>
        <TopControls {...props.topControlProps} />
      </Container>
      <StyledDetailSection>
        <SectionDivider />
        <InfoGrid tblCells={props.tblCells} tblData={props.tblData} />
        {props.bookResource?.selectControl ? (
          <BookResourceBox {...props.bookResource} />
        ) : (
          <></>
        )}
        <SectionDivider marginTop={3} marginBottom={3} />
        <BottomActionBtns {...props.topControlProps?.actionBtnsProps} />
        <BottomBackBtn {...props.backBtnProps} />
      </StyledDetailSection>
    </>
  );
  if (props.noPageLayout) {
    return pageContent;
  } else
    return (
      <PageLayout
        key={'entry-detail-page'}
        headerProps={props.headerProps}
        sideNavProps={props.sideNavProps}
        footerProps={props.footerProps}
      >
        {pageContent}
      </PageLayout>
    );
}
export default EntryDetailPage;

const StyledDetailSection = styled(Container)(({ theme }) => ({
  marginTop: '3rem',
  [theme.breakpoints.down('sm')]: {
    marginTop: '1.5rem',
  },
}));
