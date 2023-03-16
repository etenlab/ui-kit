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
import './DataTable.css'

type Order = 'asc' | 'desc';

export interface HeadCell {
  id: string;
  disablePadding: boolean;
  label: string;
  numeric: boolean;
  render?: (value: string | number | boolean) => React.ReactNode
}

interface TableHeaderProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderBy: string;
  headCells: HeadCell[]
}
function TableHeader(props: TableHeaderProps) {
  const { order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              IconComponent={FiChevronDown}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface IDataTableProps {
  headCells: HeadCell[]
  rows: Record<string, any>[]
}
export default function DataTable(props: IDataTableProps) {
  const { headCells, rows = [] } = props;
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<string>('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const lastColumnIdx = (headCells.length - 1)
  return (
    <Box sx={{ width: '100%' }} className='diegesis-tbl-container'>
      <Paper elevation={0} sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <TableHeader
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={headCells}
            />
            <TableBody>
              {
                rows.map((row, rowIdx) => {
                  return <TableRow
                    key={rowIdx}
                  >
                    {
                      headCells.map((headCell, cellIdx) => {
                        return (
                          <TableCell
                            key={cellIdx}
                            component={'td'}
                            scope={'row'}
                            padding={[0, lastColumnIdx].includes(cellIdx) ? 'none' : 'normal'}
                            align={headCell.numeric ? 'right' : 'left'}
                          >
                            {
                              headCell.render
                                ?
                                headCell.render(row[headCell.id])
                                :
                                row[headCell.id]
                            }
                          </TableCell>
                        )
                      })
                    }
                  </TableRow>
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}