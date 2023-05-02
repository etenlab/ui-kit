import { Stack, StackProps, styled } from '@mui/material';
import React from 'react';
import { FC } from 'react';

export const SectionDivider: FC<Partial<StackProps>> = (props) => {
  return <StyledDivider {...props}></StyledDivider>;
};
export default SectionDivider;

const StyledDivider = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  height: 3,
  backgroundColor: theme.palette.background['turquoise-light'],
}));
