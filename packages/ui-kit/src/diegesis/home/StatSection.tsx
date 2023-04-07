import { Container, styled } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import StatWithDescription from './StatWithDescription';

interface IProps {}
export function StatSection(_props: IProps) {
  return (
    <StyledContainer>
      <StyledInnerContainer
        direction={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={3}
      >
        <StatWithDescription
          numbers={2304}
          category={'entries'}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus sem, dapibus a sapien condimentum.`}
        />
        <StatWithDescription
          numbers={102}
          category={'languages'}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus sem, dapibus a sapien condimentum.`}
        />
        <StatWithDescription
          numbers={984}
          category={'contributors'}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus sem, dapibus a sapien condimentum.`}
        />
      </StyledInnerContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '50px 0px',
  [theme.breakpoints.down('sm')]: {
    padding: '30px 0px',
  },
}));
const StyledInnerContainer = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: 0,
  },
}));
export default StatSection;
