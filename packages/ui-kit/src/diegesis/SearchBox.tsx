import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  styled,
} from '@mui/material';
import React, { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';

export type SearchBoxProps = {
  className?: string;
  placeholder?: string;
  onSearchTextChange?: (value: string) => void;
  onSearchBtnClick?: (value: string) => void;
};

export function SearchBox(props: SearchBoxProps) {
  const { placeholder, onSearchBtnClick, onSearchTextChange } = props;
  const refInputValue = useRef('');
  return (
    <SearchBoxWrapper>
      <StyledTextField
        fullWidth
        placeholder={placeholder || 'Search...'}
        aria-describedby=""
        color={'gray'}
        InputProps={{
          'aria-label': 'weight',
          onChange: (e) => {
            refInputValue.current = e.target.value.trim();
            if (onSearchTextChange) {
              onSearchTextChange(refInputValue.current);
            }
          },
          startAdornment: (
            <InputAdornment position="start">
              <BiSearch color={'black'} size={24} />
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
      >
        Search
      </StyledSearchButton>
    </SearchBoxWrapper>
  );
}

//#region styled components
const SearchBoxWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  minWidth: '240px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    margin: '0px',
    width: '100%',
  },
}));
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.background['turquoise-light'],
      borderRadius: '0px',
    },
    '& input': {
      fontSize: '20px',
      paddingLeft: '0px',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.background['turquoise-light'],
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.background['turquoise-light'],
    },
  },
}));
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
//#endregion
