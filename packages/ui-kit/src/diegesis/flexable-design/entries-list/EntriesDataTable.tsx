import React from 'react';
import DataTable, { HeadCell, Pagination } from '../../data-table/DataTable';
import { Button, Typography } from '@mui/material';
import { BsChevronRight } from 'react-icons/bs';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from '../UIConfigProvider';
import { withFlexible } from '../withFlexible';

interface EntriesDataTableConfig extends BasicUIConfig {
  contents: {};
  styles: {
    primaryColor: string;
  };
}

const defaultEntriesDataTableConfig: EntriesDataTableConfig = {
  componentName: 'EntriesDataTable',
  contents: {},
  styles: {
    primaryColor: '#60D0B2',
  },
};

export type EntriesDataTableProps =
  BasicFlexibleProps<EntriesDataTableConfig> & {
    cellsConfig?: HeadCell[];
    entries?: EntriesData[];
    pagination?: Pagination;
  };

export type EntriesData = {
  sort: string;
  language: string;
  type: string;
  source: string;
  license: string;
  revision: string;
  [id: string]: string;
};

const MOCK_CELLS_CONFIG: HeadCell[] = [
  {
    id: 'sort',
    numeric: false,
    disablePadding: true,
    label: 'Sort',
    render(value) {
      return (
        <Typography
          variant={'h3'}
          className="underline-text"
          sx={{ color: 'text.darker-gray' }}
        >
          {value}
        </Typography>
      );
    },
  },
  {
    id: 'language',
    numeric: false,
    disablePadding: false,
    label: 'Language',
  },
  {
    id: 'type',
    numeric: false,
    disablePadding: false,
    label: 'Type',
  },
  {
    id: 'source',
    numeric: false,
    disablePadding: false,
    label: 'Source',
  },
  {
    id: 'license',
    numeric: false,
    disablePadding: false,
    label: 'License',
  },
  {
    id: 'revision',
    numeric: true,
    disablePadding: false,
    label: 'Revision',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: true,
    label: '',
    render(value) {
      return (
        <Button
          className="no-padding"
          endIcon={<BsChevronRight />}
          sx={{
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '0.9rem',
            color: 'text.turquoise-light',
          }}
        >
          {value}
        </Button>
      );
    },
  },
];

const MOCK_ENTRIES_TBL_DATA: EntriesData[] = [
  {
    sort: 'Bible in Basic English',
    language: 'ENG',
    type: 'Bible',
    source: 'eBible',
    license: 'CC-BY-SA',
    revision: '2020-04-17',
    action: 'Details',
  },
  {
    sort: 'Cible in Basic English',
    language: 'ENG',
    type: 'Bible',
    source: 'eBible',
    license: 'CC-BY-SA',
    revision: '2020-04-20',
    action: 'Details',
  },
  {
    sort: 'Dible in Basic English',
    language: 'ENG',
    type: 'Bible',
    source: 'eBible',
    license: 'CC-BY-SA',
    revision: '2020-04-17',
    action: 'Details',
  },
  {
    sort: 'Eible in Basic English',
    language: 'ENG',
    type: 'Bible',
    source: 'eBible',
    license: 'CC-BY-SA',
    revision: '2020-04-17',
    action: 'Details',
  },
  {
    sort: 'Fible in Basic English',
    language: 'ENG',
    type: 'Bible',
    source: 'eBible',
    license: 'CC-BY-SA',
    revision: '2022-04-17',
    action: 'Details',
  },
  {
    sort: 'Gible in Basic English',
    language: 'ENG',
    type: 'Bible',
    source: 'eBible',
    license: 'CC-BY-SA',
    revision: '2020-04-23',
    action: 'Details',
  },
];

export const MOCK_ENTRIES_DATA_TABLE_PROPS: Partial<EntriesDataTableProps> = {
  cellsConfig: MOCK_CELLS_CONFIG,
  entries: MOCK_ENTRIES_TBL_DATA,
};

export const EntriesDataTable: FlexibleComponent<EntriesDataTableProps> = (
  props,
) => {
  const { uiConfig = defaultEntriesDataTableConfig } = props;
  return (
    <DataTable
      expandableRowOnMobile={true}
      headCells={props.cellsConfig || []}
      rows={props.entries || []}
      primaryColor={uiConfig.styles.primaryColor}
      pagination={props.pagination}
    />
  );
};
EntriesDataTable.componentName = defaultEntriesDataTableConfig.componentName;

export const FlexibleEntriesDataTable = withFlexible<
  EntriesDataTableConfig,
  EntriesDataTableProps
>(EntriesDataTable, defaultEntriesDataTableConfig);
