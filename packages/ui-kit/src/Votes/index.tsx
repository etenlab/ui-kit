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
        {upVotes}
      </VoteBox>
      <VoteBox>
        <BiDislike />
        {downVotes}
      </VoteBox>
    </Box>
  );
}
