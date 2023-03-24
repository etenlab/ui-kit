import React from 'react';
import { Box } from '@mui/material';
import { BiLike, BiDislike } from '../icons';
import { VoteBox } from './styled';

export function Votes({
  upVotes,
  downVotes,
}: {
  upVotes: number;
  downVotes: number;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        opacity: 0.5,
        marginRight: '10px',
      }}
    >
      <VoteBox>
        <BiLike />
        <Box sx={{ ml: '5px' }}>{upVotes}</Box>
      </VoteBox>
      <VoteBox>
        <BiDislike />
        <Box sx={{ ml: '5px' }}>{downVotes}</Box>
      </VoteBox>
    </Box>
  );
}
