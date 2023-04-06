import {
  Button,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { useColorModeContext } from '..';

interface IProps {
  className?: string;
  placeholder?: string;
}


export function SearchBox(props: IProps) {
  const { placeholder, className } = props;
  const colorMode = useColorModeContext()
  return (
    <Stack direction={'row'} className={`search-box-container ${className}`}>
      <TextField
        fullWidth
        placeholder={placeholder || 'Search...'}
        id="search-box"
        aria-describedby=""
        color={'gray'}
        InputProps={{
          'aria-label': 'weight',
          startAdornment: (
            <InputAdornment position="start">
              <BiSearch color={'black'} size={24} />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: colorMode.getColor('turquoise-light'),
              borderRadius: '0px',
            },
            '& input': {
              fontSize: '20px',
            },
            '&:hover fieldset': {
              borderColor: colorMode.getColor('turquoise-light'),
            },
            '&.Mui-focused fieldset': {
              borderColor: colorMode.getColor('turquoise-light'),
            },
          },
        }}
      />
      <Button
        sx={{ ':hover': { boxShadow: 'none', backgroundColor: colorMode.getColor('turquoise-dark') }, backgroundColor: colorMode.getColor('turquoise-light') }}
        style={{
          borderRadius: '0px',
          border: '5px',
          paddingLeft: '25px',
          paddingRight: '25px',
          textTransform: 'none',
          fontSize: '20px',
        }}
        size={'medium'}
        variant={'contained'}
      >
        Search
      </Button>
    </Stack>
  );
}
export default SearchBox;
