import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import EntriesDataTable from '../../../packages/ui-kit/src/diegesis/entries/EntriesDataTable';
import { buildDocs } from '../../common';

export default {
  title: 'Partial/Diegesis/Entries',
  component: EntriesDataTable,
  decorators: [
    (Story) => (
      <div>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof EntriesDataTable>;

const EntriesDataTableTemplate: ComponentStory<typeof EntriesDataTable> = (
  args,
) => <EntriesDataTable {...args} />;

export const entriesDataTableCode = EntriesDataTableTemplate.bind({});
entriesDataTableCode.args = {};
entriesDataTableCode.parameters = buildDocs(`
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
`);

export const entriesDataTableUsage = EntriesDataTableTemplate.bind({});
entriesDataTableUsage.args = {};
entriesDataTableUsage.parameters = buildDocs(<EntriesDataTable />);
