import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useColorModeContext } from '../../ThemeProvider';
import './Home.css';

interface IProps {
  numbers: number;
  category: string;
  description: string;
}
export function StatWithDescription(props: IProps) {
  const colorMode = useColorModeContext();
  return (
    <Stack
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      className={'stat-with-des'}
    >
      <Typography variant={'h1'} className="stat">
        {props.numbers}
      </Typography>
      <Typography
        variant={'h1'}
        className="stat-category"
        sx={{ color: colorMode.getColor('darker-gray') }}
      >
        {props.category}
      </Typography>
      <Typography
        variant={'body1'}
        className="stat-description"
        sx={{ color: colorMode.getColor('lighter-gray') }}
      >
        {props.description}
      </Typography>
    </Stack>
  );
}
export default StatWithDescription;
