import { VoteButton } from '@eten-lab/ui-kit';
import { Grid, GridDirection } from '@mui/material';
import React from 'react';

type VoteButtonGroupProps = {
  likeCount: number;
  dislikeCount: number;
  like: boolean;
  dislike: boolean;
  setLike?(val: boolean): void;
  setDislike?(val: boolean): void;
  displayButtons?: string;
  alignButtons?: string;
  item?: boolean;
  container?: boolean;
  direction?: GridDirection;
  alignItems?: string;
  justifyContent?: string;
};

export function VoteButtonGroup({
  likeCount,
  dislikeCount,
  like,
  dislike,
  setLike,
  setDislike,
  ...others
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
    <Grid {...others} container columnGap={'14px'} sx={{ py: '8px' }}>
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
