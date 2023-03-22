import React from 'react';
import { Box, ListItemButton, ListItemText } from '@mui/material';
import { CrowdBibleUI } from '../..';
const { VoteButtonGroup } = CrowdBibleUI;

type Content = {
  content: string;
  upVote: number;
  downVote: number;
};

type Item = {
  title: Content;
  contents: Content[];
};

type ItemsClickableListProps = {
  items: Array<Item>;
  setSelectedItem: (item: Item) => void;
  setDislikeItem: (itemid: string) => void;
  setLikeItem: (itemid: string) => void;
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
        <Box display={'flex'} key={it.title.content}>
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
              likeCount={it.title.upVote}
              dislikeCount={it.title.downVote}
              setDislike={() => setDislikeItem(it.title.content)}
              setLike={() => setLikeItem(it.title.content)}
            ></VoteButtonGroup>
          </Box>
        </Box>
      ))}
    </>
  );
}
