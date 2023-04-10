import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';

interface IProps extends ButtonProps {
  label: string;
  className?: string;
}
export default function HomeSectionActionButton(props: IProps) {
  const { label, color } = props;

  return (
    <StyledButton
      size={'large'}
      variant={'contained'}
      color={color}
      {...props}
    >
      {label}
    </StyledButton>
  );
}

const StyledButton = styled(Button)(({theme}) => ({
  color: theme.palette.text.white,
  minWidth: theme.typography.pxToRem(312),
  minHeight: theme.typography.pxToRem(70),
  paddingLeft: theme.typography.pxToRem(30),
  paddingRight: theme.typography.pxToRem(30),
  backgroundColor:  theme.palette.background['turquoise-light'],
  fontSize: theme.typography.pxToRem(21),
  textTransform: 'none',
  borderRadius: theme.typography.pxToRem(40),
  boxShadow: 'none',
  ":hover": {
    backgroundColor: theme.palette.background['turquoise-dark'],
    boxShadow: 'none'
  }
}));
