import { Container, styled } from '@mui/material';
import React from 'react';
import { FlexibleTopControls, EntryDetailTopControlProps } from './TopControls';
import { HeadCell } from '../../data-table/DataTable';
import { FlexiblePageLayout } from '../PageLayout';
import InfoGrid, { CellData } from './InfoGrid';
import { FlexibleSectionDivider } from './SectionDivider';
import { FlexibleBookResourceBox } from './BookResourceBox';
import { FlexibleBottomActionButtons } from './BottomActionBtns';
import { BackBtnProps, FlexibleBackButton } from '../BackButton';
import { BasicFlexibleProps, BasicUIConfig } from '../UIConfigProvider';
import { SideNavProps } from '../../SideNav';
import { SelectControlProps } from '../../SelectControl';
import { withFlexible } from '../withFlexible';
import { getOrgFunName } from '../utility';

//#region types
export type EntryDetailPageConfig = BasicUIConfig & {
  contents: {};
  styles: {};
};
export const defaultEntryDetailPage: EntryDetailPageConfig = {
  componentName: getOrgFunName(EntryDetailPage.name),
  contents: {},
  styles: {},
};
export type EntryDetailPageProps = BasicFlexibleProps<EntryDetailPageConfig> & {
  sideNavProps?: SideNavProps;
  topControlProps?: EntryDetailTopControlProps;
  tblCells?: HeadCell[];
  tblData?: CellData[];
  bookResource?: { label: string; selectControl: SelectControlProps };
  backBtnProps?: BackBtnProps;
  noPageLayout?: boolean;
};
//#endregion

export function EntryDetailPage(props: EntryDetailPageProps) {
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
        <InfoGrid tblCells={props.tblCells} tblData={props.tblData} />
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
          id="back-button"
          parentPath={uiConfig.configPath!}
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
}
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
