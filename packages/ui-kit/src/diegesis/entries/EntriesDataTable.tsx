import React, { useState } from "react"
import DataTable, { HeadCell } from "../data-table/DataTable"
import { Button, Typography } from "@mui/material"
import { BsChevronRight } from "react-icons/bs"
import { useColorModeContext } from "../../ThemeProvider"

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

const getTblCellConfig = (getColorHex: (name: string) => string) => {
  const darkerGray = getColorHex('darker-gray');
  const turquoiseLight = getColorHex('turquoise-light');
  const headCells: HeadCell[] = [
    {
      id: 'sort',
      numeric: false,
      disablePadding: true,
      label: 'Sort',
      render(value) {
        return <Typography variant={'h3'} className="underline-text" sx={{color: darkerGray}}>
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
        return <Button className="no-padding" endIcon={<BsChevronRight />} sx={{ textTransform: 'none', fontWeight: 700, fontSize: '0.9rem', color: turquoiseLight }}>
          {value}
        </Button>
      },
    },
  ];
  return headCells
}

const sampleDataList: Data[] = [
  { sort: 'Bible in Basic English', language: 'ENG', type: 'Bible', source: 'eBible', license: 'CC-BY-SA', revision: '2020-04-17', action: 'Details' },
  { sort: 'Cible in Basic English', language: 'ENG', type: 'Bible', source: 'eBible', license: 'CC-BY-SA', revision: '2020-04-20', action: 'Details' },
  { sort: 'Dible in Basic English', language: 'ENG', type: 'Bible', source: 'eBible', license: 'CC-BY-SA', revision: '2020-04-17', action: 'Details' },
  { sort: 'Eible in Basic English', language: 'ENG', type: 'Bible', source: 'eBible', license: 'CC-BY-SA', revision: '2020-04-17', action: 'Details' },
  { sort: 'Fible in Basic English', language: 'ENG', type: 'Bible', source: 'eBible', license: 'CC-BY-SA', revision: '2022-04-17', action: 'Details' },
  { sort: 'Gible in Basic English', language: 'ENG', type: 'Bible', source: 'eBible', license: 'CC-BY-SA', revision: '2020-04-23', action: 'Details' },
]

export function EntriesDataTable(_props: IProps) {
  const colorMode = useColorModeContext()
  const [dataList] = useState<Data[]>([...sampleDataList])
  const cellsConfig = getTblCellConfig(colorMode.getColor)
  return (
    <DataTable expandableRowOnMobile={true} className="entries-tbl-container" headCells={cellsConfig} rows={dataList} />
  )
}
export default EntriesDataTable