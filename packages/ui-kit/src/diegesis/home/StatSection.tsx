import { Container, styled } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import StatWithDescription, { StatWithDescProps } from './StatWithDescription';

export type StatSectionProps = {
  stats: StatWithDescProps[];
};
export const MOCK_STAT_SECTION_PROPS: Partial<StatSectionProps> = {
  stats: [
    {
      numbers: 2304,
      category: 'entries',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus sem, dapibus a sapien condimentum.',
    },
    {
      numbers: 102,
      category: 'languages',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus sem, dapibus a sapien condimentum.',
    },
    {
      numbers: 984,
      category: 'contributors',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus sem, dapibus a sapien condimentum.',
    },
  ],
};
export function StatSection(props: StatSectionProps) {
  return (
    <StyledContainer>
      <StyledInnerContainer
        direction={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={3}
      >
        {props.stats.map((stat, idx) => (
          <StatWithDescription
            key={idx}
            numbers={stat.numbers}
            category={stat.category}
            description={stat.description}
          />
        ))}
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
