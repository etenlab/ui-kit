import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  styled,
} from '@mui/material';
import React, { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from './UIConfigProvider';
import { withFlexible } from './withFlexible';

interface SearchBoxConfig extends BasicUIConfig {
  contents: {};
  styles: {
    borderColor: string;
    searchIconColor: string;
    searchButtonColor: string;
    searchButtonBackground: string;
    searchButtonActiveBackground: string;
  };
}

export const defaultSearchBoxConfig: SearchBoxConfig = {
  componentName: 'SearchBox',
  contents: {},
  styles: {
    borderColor: '#60D0B2',
    searchIconColor: '#5C6673',
    searchButtonColor: '#FFFFFF',
    searchButtonBackground: '#60D0B2',
    searchButtonActiveBackground: '#4EAA91',
  },
};

export type SearchBoxProps = BasicFlexibleProps<SearchBoxConfig> & {
  placeholder?: string;
  onSearchTextChange?: (value: string) => void;
  onSearchBtnClick?: (value: string) => void;
};

export const SearchBox: FlexibleComponent<SearchBoxProps> = (props) => {
  const {
    placeholder,
    onSearchBtnClick,
    onSearchTextChange,
    uiConfig = defaultSearchBoxConfig,
  } = props;
  const refInputValue = useRef('');
  return (
    <SearchBoxWrapper>
      <StyledTextField
        fullWidth
        placeholder={placeholder || 'Search...'}
        aria-describedby=""
        color={'gray'}
        borderColor={uiConfig.styles.borderColor}
        InputProps={{
          'aria-label': 'weight',
          onKeyDown: (e) => {
            if (e.key === 'Enter') {
              if (onSearchBtnClick) onSearchBtnClick(refInputValue.current);
            }
          },
          onChange: (e: { target: { value: string } }) => {
            refInputValue.current = e.target.value.trim();
            if (onSearchTextChange) {
              onSearchTextChange(refInputValue.current);
            }
          },
          startAdornment: (
            <InputAdornment position="start">
              <BiSearch color={uiConfig.styles.searchIconColor} size={24} />
            </InputAdornment>
          ),
        }}
      />
      <StyledSearchButton
        size={'medium'}
        variant={'contained'}
        onClick={() => {
          if (onSearchBtnClick) onSearchBtnClick(refInputValue.current);
        }}
        sx={{
          ':hover': {
            backgroundColor: uiConfig.styles.searchButtonActiveBackground,
          },
          backgroundColor: uiConfig.styles.searchButtonBackground,
          color: uiConfig.styles.searchButtonColor,
        }}
      >
        Search
      </StyledSearchButton>
    </SearchBoxWrapper>
  );
};
SearchBox.componentName = defaultSearchBoxConfig.componentName;

export const FlexibleSearchBox = withFlexible<SearchBoxConfig, SearchBoxProps>(
  SearchBox,
  defaultSearchBoxConfig,
);

const SearchBoxWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  minWidth: '240px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    margin: '0px',
    width: '100%',
  },
}));
const StyledTextField = styled(TextField)<{ borderColor: string }>(
  ({ theme, borderColor }) => ({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: borderColor ?? theme.palette.background['turquoise-light'],
        borderRadius: '0px',
      },
      '& input': {
        fontSize: '20px',
        paddingLeft: '0px',
      },
      '&:hover fieldset': {
        borderColor: borderColor ?? theme.palette.background['turquoise-light'],
      },
      '&.Mui-focused fieldset': {
        borderColor: borderColor ?? theme.palette.background['turquoise-light'],
      },
    },
  }),
);
const StyledSearchButton = styled(Button)(({ theme }) => ({
  ':hover': {
    boxShadow: 'none',
    backgroundColor: theme.palette.background['turquoise-dark'],
  },
  backgroundColor: theme.palette.background['turquoise-light'],
  borderRadius: '0px',
  border: '5px',
  paddingLeft: '25px',
  paddingRight: '25px',
  textTransform: 'none',
  fontSize: '20px',
}));
