import { Button, styled } from '@mui/material';
import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';

interface IProps {
  className?: string;
}
export const BackButton: React.FC<IProps> = () => {
  return (
    <StyledButton color={'dark'} startIcon={<StyledBackIcon />}>
      Back
    </StyledButton>
  );
};

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 300,
  fontSize: '1.2rem',
  textDecoration: 'underline',
  textUnderlineOffset: '0.2rem',
  textDecorationColor: theme.palette.text['turquoise-light'],
  fontFamily: 'Noto Serif Display',
  padding: 0,
  ':hover': {
    textDecoration: 'underline',
  },
}));

const StyledBackIcon = styled(BsChevronLeft)(({ theme }) => ({
  color: theme.palette.text['turquoise-light'],
}));

export default BackButton;
