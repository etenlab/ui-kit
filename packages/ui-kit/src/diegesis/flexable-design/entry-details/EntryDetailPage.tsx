import { Container, styled } from '@mui/material';
import React from 'react';
import {
  FlexibleTopControls,
  EntryDetailTopControlProps,
  mockTopControlsProps,
} from './TopControls';
import { HeadCell } from '../../data-table/DataTable';
import { FlexiblePageLayout } from '../PageLayout';
import { CellData, FlexibleInfoGrid } from './InfoGrid';
import { FlexibleSectionDivider } from './SectionDivider';
import {
  BookResourceBoxProps,
  FlexibleBookResourceBox,
  mockBookResourceBox,
} from './BookResourceBox';
import { FlexibleBottomActionButtons } from './BottomActionBtns';
import {
  BackBtnProps,
  FlexibleBackButton,
  mockBackButtonProps,
} from '../BackButton';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from '../UIConfigProvider';
import { SideNavProps } from '../../SideNav';
import { withFlexible } from '../withFlexible';
import { mockSideNavProps } from '../SideNav';

export type EntryDetailPageConfig = BasicUIConfig & {
  contents: {};
  styles: {};
};
export type EntryDetailPageProps = BasicFlexibleProps<EntryDetailPageConfig> & {
  sideNavProps?: SideNavProps;
  topControlProps?: EntryDetailTopControlProps;
  tblCells?: HeadCell[];
  tblData?: CellData[];
  bookResource?: BookResourceBoxProps;
  backBtnProps?: BackBtnProps;
  noPageLayout?: boolean;
};

export const defaultEntryDetailPage: EntryDetailPageConfig = {
  componentName: 'EntryDetailPage',
  contents: {},
  styles: {},
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
export const mockEntryDetailPageProps: EntryDetailPageProps = {
  id: 'entry-detail-page',
  parentPath: '/',
  sideNavProps: mockSideNavProps,
  topControlProps: mockTopControlsProps,
  tblCells: headCells,
  tblData: sampleData,
  bookResource: mockBookResourceBox,
  backBtnProps: mockBackButtonProps,
  noPageLayout: false,
  uiConfig: defaultEntryDetailPage,
};

export const EntryDetailPage: FlexibleComponent<EntryDetailPageProps> = (
  props,
) => {
  const { uiConfig = defaultEntryDetailPage } = props;
  const pageContent = (
    <>
      <br />
      <Container component={'div'}>
        <FlexibleTopControls
          {...props.topControlProps}
          id="top-controls"
          parentPath={uiConfig.configPath!}
        />
      </Container>
      <StyledDetailSection>
        <FlexibleSectionDivider
          id="section-divider1"
          parentPath={uiConfig.configPath!}
        />
        <FlexibleInfoGrid
          id="info-grid"
          parentPath={uiConfig.configPath!}
          tblCells={props.tblCells}
          tblData={props.tblData}
        />
        {props.bookResource?.selectControl ? (
          <FlexibleBookResourceBox
            {...props.bookResource}
            id="book-resource"
            parentPath={uiConfig.configPath!}
          />
        ) : (
          <></>
        )}
        <FlexibleSectionDivider
          id="section-divider2"
          parentPath={uiConfig.configPath!}
          marginTop={3}
          marginBottom={3}
        />
        <FlexibleBottomActionButtons
          {...props.topControlProps}
          id="bottom-action-buttons"
          parentPath={uiConfig.configPath!}
        />
        <FlexibleBackButton
          {...props.backBtnProps}
          parentPath={uiConfig.configPath!}
          id="bottom-back-button"
        />
      </StyledDetailSection>
    </>
  );
  if (props.noPageLayout) {
    return pageContent;
  } else
    return (
      <FlexiblePageLayout
        id={'entry-detail-page'}
        parentPath={uiConfig.configPath!}
        sideNavProps={props.sideNavProps}
      >
        {pageContent}
      </FlexiblePageLayout>
    );
};
EntryDetailPage.componentName = defaultEntryDetailPage.componentName;

export const FlexibleEntryDetail = withFlexible<
  EntryDetailPageConfig,
  EntryDetailPageProps
>(EntryDetailPage, defaultEntryDetailPage);

const StyledDetailSection = styled(Container)(({ theme }) => ({
  marginTop: '3rem',
  [theme.breakpoints.down('sm')]: {
    marginTop: '1.5rem',
  },
}));
