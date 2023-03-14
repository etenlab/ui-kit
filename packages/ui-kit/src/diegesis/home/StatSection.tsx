import { Container } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import StatWithDescription from './StatWithDescription';
import './Home.css';

interface IProps {}
export function StatSection(props: IProps) {
  return (
    <Container className="stat-section">
      <Stack
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
      </Stack>
    </Container>
  );
}
export default StatSection;
