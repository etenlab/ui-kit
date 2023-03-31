import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';

interface IProps extends ButtonProps {
  label: string;
  className?: string;
}
const StyledButton = styled(Button)({
  color: '#fff',
  minWidth: '312px',
  minHeight: '70px',
  paddingLeft: '30px',
  paddingRight: '30px',
  backgroundColor: '#60D0B2',
  fontSize: '21px',
  textTransform: 'none',
  borderRadius: '40px',
  boxShadow: 'none',
  ':hover': {
    backgroundColor: '#4EAA91',
    boxShadow: 'none',
  },
});
export default function HomeSectionActionButton(props: IProps) {
  const { label, className, color } = props;

  return (
    <StyledButton
      className={className}
      size={'large'}
      variant={'contained'}
      color={color}
      {...props}
    >
      {label}
    </StyledButton>
  );
}
