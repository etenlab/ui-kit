import { HeadCell } from '../../data-table';
import DataTable from '../../data-table/DataTable';
import { Stack, styled } from '@mui/material';
import React from 'react';
import { withFlexible } from '../withFlexible';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from '../UIConfigProvider';

//#region types
type Styles = {
  primaryColor: string;
  textColor: string;
  fontWeight: string;
  fontFamily: string;
  fontSize: string;
};
interface InfoGridConfig extends BasicUIConfig {
  contents: {};
  styles: Styles;
}

const defaultInfoGridConfig: InfoGridConfig = {
  componentName: 'InfoGrid',
  contents: {},
  styles: {
    primaryColor: '#60D0B2',
    textColor: '#31373A',
    fontWeight: '700',
    fontFamily: 'Helvetica',
    fontSize: '1.1rem',
  },
};

export type InfoGridProps = BasicFlexibleProps<InfoGridConfig> & {
  tblCells?: HeadCell[];
  tblData?: CellData[];
};
export type CellData = {
  key: string;
  value: string;
};
//#endregion

export const InfoGrid: FlexibleComponent<InfoGridProps> = (props) => {
  const { uiConfig = defaultInfoGridConfig } = props;
  return (
    <StyledContainer {...uiConfig.styles}>
      <DataTable
        expandableRowOnMobile={false}
        headCells={props.tblCells || []}
        rows={props.tblData || []}
        primaryColor={uiConfig.styles.primaryColor}
      />
    </StyledContainer>
  );
};

export const FlexibleInfoGrid = withFlexible<InfoGridConfig, InfoGridProps>(
  InfoGrid,
  defaultInfoGridConfig,
);

const StyledContainer = styled(Stack)<Styles>(
  ({ theme, textColor, fontWeight, fontFamily, fontSize }) => ({
    '.MuiTableBody-root .MuiTableRow-root:first-child > .MuiTableCell-root': {
      padding: '16px',
      paddingLeft: '0px',
      color: textColor ?? theme.palette.text['darker-gray'],
      fontWeight: fontWeight ?? 700,
      fontFamily: fontFamily ?? 'Helvetica',
      fontSize: fontSize ?? '1.1rem',
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
  }),
);
