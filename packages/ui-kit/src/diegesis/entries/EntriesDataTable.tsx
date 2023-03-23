import React, { useState } from "react"
import DataTable, { HeadCell } from "../data-table/DataTable"
import { Button, Typography } from "@mui/material"
import { BsChevronRight } from "react-icons/bs"

interface IProps {
}

interface Data {
  sort: string
  language: string
  type: string
  source: string
  license: string
  revision: string
  [id: string]: string
}

const headCells: HeadCell[] = [
  {
    id: 'sort',
    numeric: false,
    disablePadding: true,
    label: 'Sort',
    render(value) {
      return <Typography variant={'h3'} className="underline-text">
        {value}
      </Typography>
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
      return <Button className="no-padding" endIcon={<BsChevronRight />} sx={{ textTransform: 'none', fontWeight: 700, fontSize: '0.9rem' }} color={'green'}>
        {value}
      </Button>
    },
  },
];

const sampleDataList: Data[] = [
  { sort: 'Bible in Basic English', language: 'ENG', type: 'Bible', source: 'eBible', license: 'CC-BY-SA', revision: '2020-04-17', action: 'Details' },
  { sort: 'Cible in Basic English', language: 'ENG', type: 'Bible', source: 'eBible', license: 'CC-BY-SA', revision: '2020-04-20', action: 'Details' },
  { sort: 'Dible in Basic English', language: 'ENG', type: 'Bible', source: 'eBible', license: 'CC-BY-SA', revision: '2020-04-17', action: 'Details' },
  { sort: 'Eible in Basic English', language: 'ENG', type: 'Bible', source: 'eBible', license: 'CC-BY-SA', revision: '2020-04-17', action: 'Details' },
  { sort: 'Fible in Basic English', language: 'ENG', type: 'Bible', source: 'eBible', license: 'CC-BY-SA', revision: '2022-04-17', action: 'Details' },
  { sort: 'Gible in Basic English', language: 'ENG', type: 'Bible', source: 'eBible', license: 'CC-BY-SA', revision: '2020-04-23', action: 'Details' },
]

export function EntriesDataTable(props: IProps){
  const [dataList, setDataList] = useState<Data[]>([...sampleDataList])
  return (
    <DataTable expandableRowOnMobile={true} className="entries-tbl-container" headCells={headCells} rows={dataList} />
  )
}
export default EntriesDataTable