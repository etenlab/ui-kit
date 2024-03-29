import React from 'react';
import { Box, ListItemButton, ListItemText } from '@mui/material';
import { VoteButtonGroup } from '../VoteButtonGroup';

type VotableContent = {
  content: string;
  upVotes: number;
  downVotes: number;
  id: string | null;
  candidateId: string | null;
};

type VotableItem = {
  title: VotableContent;
  contents: VotableContent[];
  contentElectionId: string | null;
};

type ItemsClickableListProps = {
  items: Array<VotableItem>;
  setSelectedItem: (item: VotableItem) => void;
  setDislikeItem: (candidateId: string | null) => void;
  setLikeItem: (candidateId: string | null) => void;
};

export function ItemsClickableList({
  items,
  setSelectedItem,
  setDislikeItem,
  setLikeItem,
}: ItemsClickableListProps) {
  return (
    <>
      {items.map((it) => (
        <Box display={'flex'} key={it.title.id}>
          <Box flex={4}>
            <ListItemButton onClick={() => setSelectedItem(it)}>
              <ListItemText primary={it.title.content} color="dark" />
            </ListItemButton>
          </Box>
          <Box display={'flex'} flex={1} minWidth={'120px'}>
            <VoteButtonGroup
              item
              container
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              like={false}
              dislike={false}
              likeCount={it.title.upVotes}
              dislikeCount={it.title.downVotes}
              setDislike={() => setDislikeItem(it.title.candidateId)}
              setLike={() => setLikeItem(it.title.candidateId)}
            ></VoteButtonGroup>
          </Box>
        </Box>
      ))}
    </>
  );
}
