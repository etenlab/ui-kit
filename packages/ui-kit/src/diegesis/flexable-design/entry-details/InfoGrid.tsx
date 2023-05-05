import { HeadCell } from '@components/diegesis/data-table';
import DataTable from '@components/diegesis/data-table/DataTable';
import { Stack, styled } from '@mui/material';
import React, { FC } from 'react';

//#region types
export type CellData = {
  key: string;
  value: string;
};
export type InfoGridProps = {
  tblCells?: HeadCell[];
  tblData?: CellData[];
};
//#endregion

export const InfoGrid: FC<InfoGridProps> = (props) => {
  return (
    <StyledContainer>
      <DataTable
        expandableRowOnMobile={false}
        headCells={props.tblCells || []}
        rows={props.tblData || []}
      />
    </StyledContainer>
  );
};
export default InfoGrid;

const StyledContainer = styled(Stack)(({ theme }) => ({
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
