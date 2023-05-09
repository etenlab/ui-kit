import { Stack, Typography, styled } from '@mui/material';
import React from 'react';
import { FC } from 'react';
import { SelectControl, SelectControlProps } from '../SelectControl';

export type BookResourceBoxProps = {
  label?: string;
  selectControl: SelectControlProps;
};
export const BookResourceBox: FC<BookResourceBoxProps> = (props) => {
  return (
    <StyledBookResourceBox
      direction={'column'}
      alignItems={'flex-start'}
      justifyContent={'center'}
    >
      <Typography variant="h3">{props.label}</Typography>
      <SelectControl
        label={props.selectControl.label}
        value={props.selectControl.value}
        options={props.selectControl.options || []}
        onChange={props.selectControl.onChange!}
      />
    </StyledBookResourceBox>
  );
};
export default BookResourceBox;

const StyledBookResourceBox = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  backgroundColor: theme.palette.background['light-gray'],
  padding: '20px',
  paddingTop: '25px',
  '.MuiTypography-h3': {
    fontWeight: 700,
    fontFamily: 'Helvetica',
    marginBottom: '5px',
  },
  '.MuiOutlinedInput-root': {
    width: '272px',
    '.MuiSelect-outlined': {
      paddingTop: '10px',
      paddingBottom: '10px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '.MuiOutlinedInput-root': {
      width: '100%',
    },
  },
}));
