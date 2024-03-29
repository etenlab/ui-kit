import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { FiChevronDown } from 'react-icons/fi';
import { Collapse, Stack, Typography, styled } from '@mui/material';

type Order = 'asc' | 'desc';

export interface HeadCell {
  id: string;
  disablePadding: boolean;
  label: string;
  numeric: boolean;
  render?: (
    value: string | number | boolean,
    styles?: Record<string, string | undefined>,
  ) => React.ReactNode;
}

// #region sorting
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort<T>(arr: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = arr.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0] as T, b[0] as T);
    if (order !== 0) {
      return order;
    }
    return (a[1] as number) - (b[1] as number);
  });
  return stabilizedThis.map((el) => el[0] as T);
}
//#endregion

interface TableHeaderProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderBy: string;
  headCells: HeadCell[];
  primaryColor?: string;
}
function TableHeaderWrapper(props: TableHeaderProps) {
  const { order, orderBy, onRequestSort, headCells, primaryColor } = props;
  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead
      sx={(theme) => ({
        borderBottom: `3px solid ${
          primaryColor ?? theme.palette.background['turquoise-light']
        }`,
      })}
    >
      <TableRow>
        {headCells.map((headCell, idx) => (
          <TableCell
            key={idx}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <StyledTableSortLabel
              IconComponent={FiChevronDown}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              primaryColor={primaryColor}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </StyledTableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface TableRowProps {
  rowKey?: string | number;
  headCells: HeadCell[];
  row: Record<string, any>;
  expandableRowOnMobile?: boolean;
  primaryColor?: string;
}
function TableRowWrapper({
  rowKey,
  headCells,
  row,
  expandableRowOnMobile,
  primaryColor,
}: TableRowProps) {
  const [showDetails, setShowDetails] = React.useState(false);
  return (
    <React.Fragment key={rowKey}>
      <TableRow
        sx={(theme) => ({
          '.MuiTableCell-root': showDetails
            ? {
                borderTop: `4px solid ${
                  primaryColor ?? theme.palette.background['turquoise-light']
                }`,
                borderBottom: `1px solid ${theme.palette.background['light-gray2']}`,
              }
            : {},
          ...(showDetails
            ? {
                borderBottom: `1px solid ${theme.palette.background['light-gray2']}`,
                fontSize: '2.8rem',
              }
            : {}),
        })}
        key={`row-${rowKey}`}
        onClick={() => {
          if (expandableRowOnMobile && window.innerWidth <= 414) {
            setShowDetails(!showDetails);
          }
        }}
      >
        {headCells.map((headCell, cellIdx) => {
          return (
            <TableCell
              key={`row-${rowKey}-cell-${cellIdx}`}
              component={'td'}
              scope={'row'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              align={headCell.numeric ? 'right' : 'left'}
            >
              {headCell.render
                ? headCell.render(row[headCell.id], { primaryColor })
                : row[headCell.id]}
            </TableCell>
          );
        })}
      </TableRow>
      {expandableRowOnMobile ? (
        <TableRow
          key={`record-detail-${rowKey}`}
          sx={(theme) => ({
            '.MuiTableCell-root': showDetails
              ? {
                  borderBottom: `4px solid ${
                    primaryColor ?? theme.palette.background['turquoise-light']
                  }`,
                }
              : { borderBottom: 'none' },
            '.MuiTypography-caption': showDetails
              ? { color: theme.palette.text['middle-gray'] }
              : {},
          })}
        >
          <TableCell colSpan={headCells.length} padding="none">
            <Collapse in={showDetails} timeout="auto" unmountOnExit>
              <Box sx={{ padding: '1rem 0rem' }}>
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  flexWrap={'wrap'}
                  width={'100%'}
                >
                  {headCells.slice(1).map((headCell, cellIdx) => {
                    return (
                      <Stack
                        key={cellIdx}
                        flexWrap={'nowrap'}
                        alignItems={'center'}
                        direction={'row'}
                        marginRight={'0.8rem'}
                      >
                        {headCell.label ? (
                          <Typography variant="caption" className="">
                            {headCell.label}:&nbsp;&nbsp;
                          </Typography>
                        ) : (
                          <></>
                        )}
                        <Typography variant="body1">
                          {headCell.render
                            ? headCell.render(row[headCell.id])
                            : row[headCell.id]}
                        </Typography>
                      </Stack>
                    );
                  })}
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
}

export type Pagination = {
  page?: number;
  totalRows?: number;
  rowsPerPage?: number;
  rowsPerPageOptions?: number[];
  onPageChange?: (page: number, rowsPerPage?: number) => void;
};
export interface IDataTableProps {
  headCells: HeadCell[];
  rows: Record<string, any>[];
  className?: string;
  defaultSortCellId?: string;
  expandableRowOnMobile?: boolean;
  primaryColor?: string;
  pagination?: Pagination;
}
export default function DataTable(props: IDataTableProps) {
  const {
    headCells,
    rows = [],
    defaultSortCellId,
    expandableRowOnMobile,
    primaryColor,
    pagination = {},
  } = props;
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<string>(defaultSortCellId ?? '');

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: string,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    // setPage(newPage);
    if (pagination?.onPageChange) pagination.onPageChange(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (pagination?.onPageChange)
      pagination.onPageChange(0, parseInt(event.target.value, 10));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper elevation={0} sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHeaderWrapper
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={headCells}
              primaryColor={primaryColor}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, rowIdx) => (
                  <TableRowWrapper
                    key={rowIdx}
                    expandableRowOnMobile={expandableRowOnMobile}
                    rowKey={rowIdx}
                    headCells={headCells}
                    row={row}
                    primaryColor={primaryColor}
                  />
                ),
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <StyledTablePagination
          rowsPerPageOptions={pagination.rowsPerPageOptions ?? [5, 10, 25]}
          component="div"
          count={pagination?.totalRows ?? rows.length}
          rowsPerPage={pagination.rowsPerPage ?? 10}
          page={pagination.page ?? 0}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          primaryColor={props.primaryColor}
        />
      </Paper>
    </Box>
  );
}

const StyledTableSortLabel = styled(TableSortLabel)<{ primaryColor?: string }>(
  ({ theme, primaryColor }) => ({
    fontSize: '0.9rem',
    color: theme.palette.text['middle-gray'],
    fontWeight: 400,
    lineHeight: '0.9rem',
    fontFamily: 'helvetica',
    '&.Mui-active': {
      color: theme.palette.text['middle-gray'],
      '.MuiTableSortLabel-icon': {
        color: primaryColor ?? theme.palette.text['turquoise-light'],
      },
    },
    ':focus': {
      color: theme.palette.text['middle-gray'],
    },
    '.MuiTableSortLabel-icon': {
      color: primaryColor ?? theme.palette.text['turquoise-light'],
    },
  }),
);
const StyledTablePagination = styled(TablePagination)<{
  component: string;
  primaryColor?: string;
}>(({ theme, primaryColor }) => ({
  marginTop: '0.5rem',
  '.MuiTablePagination-actions': {
    '.MuiIconButton-root': {
      padding: '0px',
      color: primaryColor ?? theme.palette.text['turquoise-light'],
    },
    '.MuiIconButton-root.Mui-disabled': {
      color: theme.palette.text['light-gray2'],
    },
    '.MuiSvgIcon-root': {
      height: '2.1rem',
      width: '2.1rem',
    },
  },
  '.MuiInputBase-root': {
    padding: '3px',
    border: '1px solid',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '0.8rem',
    '.MuiToolbar-root': {
      '.MuiTablePagination-spacer': {
        display: 'none',
      },
    },
    '.MuiTablePagination-toolbar': {
      minHeight: '100px',
      position: 'relative',
      '.MuiInputBase-root': {
        alignSelf: 'end',
        marginBottom: '2%',
        marginRight: '20%',
      },
    },
    '.MuiTablePagination-selectLabel': {
      alignSelf: 'end',
      marginLeft: '20%',
      paddingTop: '7%',
    },
    '.MuiTablePagination-displayedRows': {
      position: 'absolute',
      top: 0,
      left: 0,
      margin: 0,
      marginTop: '0.3rem',
    },
    '.MuiTablePagination-actions': {
      position: 'absolute',
      right: 0,
      top: 0,
    },
  },
}));
