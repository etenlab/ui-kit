import { Grid } from '@mui/material';
import React from 'react';

import { VoteButton } from '../../button';

type VoteButtonGroupProps = {
  likeCount: number;
  dislikeCount: number;
  like: boolean;
  dislike: boolean;
  setLike(val: boolean): void;
  setDislike(val: boolean): void;
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
      setDislike(false);
    }
    setLike(!like);
  };

  const handleDislikeChange = () => {
    if (like && !dislike) {
      setLike(false);
    }
    setDislike(!dislike);
  };

  return (
    <Grid container columnGap={'14px'}>
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
