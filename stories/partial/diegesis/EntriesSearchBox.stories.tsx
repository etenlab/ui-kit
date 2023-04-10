import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import SearchBox from '../../../packages/ui-kit/src/diegesis/SearchBox';
import { buildDocs } from '../../common';

export default {
  title: 'Partial/Diegesis/Entries',
  component: SearchBox,
  decorators: [
    (Story) => (
      <div>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof SearchBox>;

const EntriesSearchBoxTemplate: ComponentStory<typeof SearchBox> = (args) => (
  <SearchBox {...args} />
);

export const searchBoxCode = EntriesSearchBoxTemplate.bind({});
searchBoxCode.args = {};
searchBoxCode.parameters = buildDocs(`
interface IProps {
    className?: string
    placeholder?: string
}

//#region styled components
const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: colors.green,
            borderRadius: '0px',
        },
        '& input': {
            fontSize: '20px',
            color: colors.dark + '!important',
            // paddingTop: '20px',
            // paddingBottom: '20px'
        },
        '&:hover fieldset': {
            borderColor: colors.green,
        },
        '&.Mui-focused fieldset': {
            borderColor: colors.green,
        },
    },
});
//#endregion

export function SearchBox(props: IProps){
    const { placeholder, className } = props;
    return (
        <Stack direction={'row'} className={\`search-box-container \${className}\`}>
            <CustomTextField
                fullWidth
                placeholder={placeholder || 'Search...'}
                id="search-box"
                aria-describedby=""
                sx={{ borderCollapse: 'green' }}
                InputProps={{
                    'aria-label': 'weight',
                    startAdornment: <InputAdornment position="start">
                        <BiSearch color={'black'} size={24} />
                    </InputAdornment>,
                }}
            />
            <Button style={{ borderRadius: '0px', border: '5px', paddingLeft: '25px', paddingRight: '25px', textTransform: 'none', fontSize: '20px' }} size={'medium'} color={'green'} variant={'contained'}>
                Search
            </Button>
        </Stack>
    )
}
export default SearchBox;
`);

export const searchBoxUsage = EntriesSearchBoxTemplate.bind({});
searchBoxUsage.args = {};
searchBoxUsage.parameters = buildDocs(
  <SearchBox placeholder="Search anything..." />,
);
