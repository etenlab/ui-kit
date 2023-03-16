import { Grid } from '@mui/material';
import React from 'react';

import { VoteButton } from '../../button';

type VoteButtonGroupProps = {
  likeCount: number;
  dislikeCount: number;
  like: boolean;
  dislike: boolean;
  setLike?(val: boolean): void;
  setDislike?(val: boolean): void;
};

export function VoteButtonGroup({
  likeCount,
  dislikeCount,
  like,
  dislike,
  setLike,
  setDislike,
}: VoteButtonGroupProps) {
  const handleLikeChange = () => {
    if (!like && dislike) {
      if (setDislike) {
        setDislike(false);
      }
    }
    if (setLike) {
      setLike(!like);
    }
  };

  const handleDislikeChange = () => {
    if (like && !dislike) {
      if (setLike) {
        setLike(false);
      }
    }
    if (setDislike) {
      setDislike(!dislike);
    }
  };

  return (
    <Grid container columnGap={'14px'} sx={{ py: '8px' }}>
      <Grid item>
        <VoteButton
          isLike={true}
          count={likeCount + Number(like)}
          onClick={handleLikeChange}
        />
      </Grid>
      <Grid item>
        <VoteButton
          isLike={false}
          count={dislikeCount + Number(dislike)}
          onClick={handleDislikeChange}
        />
      </Grid>
    </Grid>
  );
}
