import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import DataTable from '../../../packages/ui-kit/src/diegesis/data-table/DataTable';
import { buildDocs } from '../../common';

export default {
  title: 'Partial/Diegesis/Data Table',
  component: DataTable,
  decorators: [
    (Story) => (
      <div>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof DataTable>;

const EntriesDataTableTemplate: ComponentStory<typeof DataTable> = (args) => (
  <DataTable {...args} />
);

export const dataTableCode = EntriesDataTableTemplate.bind({});
dataTableCode.args = {
  headCells: [
    {
      id: 'sort',
      numeric: false,
      disablePadding: true,
      label: 'Sort',
    },
    {
      id: 'language',
      numeric: false,
      disablePadding: false,
      label: 'Language',
    },
  ],
  rows: [
    { sort: 'Bible in Basic English', language: 'ENG' },
    { sort: 'Bible in Basic English', language: 'ENG' },
  ],
};
dataTableCode.parameters = buildDocs(`
export interface HeadCell {
    id: string;
    disablePadding: boolean;
    label: string;
    numeric: boolean;
    render?: (value: string | number | boolean) => React.ReactNode
  }
  
  
  //#region sorting
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
  function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  //#endregion
  
  
  interface TableHeaderProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    order: Order;
    orderBy: string;
    headCells: HeadCell[]
  }
  function TableHeaderWrapper(props: TableHeaderProps) {
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
  
  interface TableRowProps {
    key?: string | number
    headCells: HeadCell[]
    row: Record<string, any>
    expandableRowOnMobile?: boolean
  }
  function TableRowWrapper({ key, headCells, row, expandableRowOnMobile }: TableRowProps) {
    const [showDetails, setShowDetails] = React.useState(false);
    return (
      <React.Fragment key={key}>
        <TableRow
          className={\`table-row \${showDetails ? 'active' : ''}\`}
          key={key}
          onClick={() => {
            if (expandableRowOnMobile && window.innerWidth <= 414) {
              setShowDetails(!showDetails)
            }
          }}
        >
          {
            headCells.map((headCell, cellIdx) => {
              return (
                <TableCell
                  key={cellIdx}
                  component={'td'}
                  scope={'row'}
                  padding={headCell.disablePadding ? 'none' : 'normal'}
                  // padding={[0, lastColumnIdx].includes(cellIdx) ? 'none' : 'normal'}
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
        {
          expandableRowOnMobile
            ?
            <TableRow key={\`record-detail-\${key}\`} className={\`row-detail \${showDetails ? 'active' : ''}\`}>
              <TableCell colSpan={headCells.length} padding='none'>
                <Collapse className='show-xs' in={showDetails} timeout="auto" unmountOnExit>
                  <Box sx={{ padding: '1rem 0rem' }}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} flexWrap={'wrap'} className='full-width'>
                      {
                        headCells.slice(1).map((headCell, cellIdx) => {
                          return (
                            <Stack key={cellIdx} flexWrap={'nowrap'} alignItems={'center'} direction={'row'} className='mr-1'>
                              {
                                headCell.label
                                  ?
                                  <Typography variant='caption' className=''>
                                    {headCell.label}:&nbsp;&nbsp;
                                  </Typography>
                                  : <></>
                              }
                              <Typography variant='body1'>
                                {
                                  headCell.render
                                    ?
                                    headCell.render(row[headCell.id])
                                    :
                                    row[headCell.id]
                                }
                              </Typography>
                            </Stack>
                          )
                        })
                      }
                    </Stack>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
            :
            <></>
        }
      </React.Fragment>
    )
  }
  
  interface IDataTableProps {
    headCells: HeadCell[]
    rows: Record<string, any>[]
    className?: string
    defaultSortCellId?: string
    expandableRowOnMobile?: boolean
  }
  export default function DataTable(props: IDataTableProps) {
    const { headCells, rows = [], className, defaultSortCellId, expandableRowOnMobile } = props;
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<string>(defaultSortCellId || '');
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
  
    return (
      <Box sx={{ width: '100%' }} className={\`diegesis-tbl-container \${className}\`}>
        <Paper elevation={0} sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
            >
              <TableHeaderWrapper
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                headCells={headCells}
              />
              <TableBody>
                {
                  stableSort(rows, getComparator(order, orderBy)).map((row, rowIdx) => <TableRowWrapper expandableRowOnMobile={expandableRowOnMobile} key={rowIdx} headCells={headCells} row={row} />)
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
`);

export const dataTableUsage = EntriesDataTableTemplate.bind({});
dataTableUsage.args = {
  headCells: [
    {
      id: 'sort',
      numeric: false,
      disablePadding: true,
      label: 'Sort',
    },
    {
      id: 'language',
      numeric: false,
      disablePadding: false,
      label: 'Language',
    },
  ],
  rows: [
    { sort: 'Bible in Basic English', language: 'ENG' },
    { sort: 'Bible in Basic English', language: 'ENG' },
  ],
};
dataTableUsage.parameters = buildDocs(
  <DataTable headCells={[]} rows={[]} expandableRowOnMobile={true} />,
);
