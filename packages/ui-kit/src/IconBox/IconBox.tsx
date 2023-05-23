import React from 'react';

import { Stack, Typography } from '@mui/material';

import { BiLike, BiDislike } from '../icons';
import { useColorModeContext } from '../ThemeProvider';

export const IconBox = ({
  isSuccess,
  text,
}: {
  isSuccess: boolean;
  text: string;
}) => {
  const { getColor } = useColorModeContext();
  const bgColor = isSuccess ? getColor('light-green') : getColor('light-red');
  const fillColor = isSuccess ? getColor('green') : getColor('red');
  const icon = isSuccess ? (
    <BiLike fontSize={40} fill={fillColor} />
  ) : (
    <BiDislike fontSize={40} fill={fillColor} />
  );
  return (
    <Stack alignItems="center" gap={2}>
      <Stack
        width={109}
        height={109}
        borderRadius={2}
        bgcolor={bgColor}
        justifyContent="center"
        alignItems="center"
      >
        {icon}
      </Stack>
      <Typography variant="h3">{text}</Typography>
    </Stack>
  );
};
