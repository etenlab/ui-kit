import React from 'react';

import {
  Stack,
  Grid,
  Divider,
  List,
  ListItem,
  Typography,
  Button,
} from '@mui/material';
import { VoteButtonGroup } from '../VoteButtonGroup';

type Content = {
  content: string;
  upVote: number;
  downVote: number;
};

type Item = {
  title: Content;
  contents: Content[];
};

type WordTableProps = {
  items: Item[];
  label_1: string;
  label_2: string;
};

export function WordTable({ items, label_1, label_2 }: WordTableProps) {
  return (
    <div>
      <Grid container sx={{ py: '14px' }}>
        <Grid item xs={5}>
          <Typography variant="subtitle1" sx={{ color: '#8F8F8F' }}>
            {label_1}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="subtitle1" sx={{ color: '#8F8F8F' }}>
            {label_2}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        sx={{ color: '#1E1E1E' }}
      >
        {items.map(({ title, contents }) => (
          <Grid container key={title.content} sx={{ py: '14px' }}>
            <Grid xs={5}>
              <Typography
                variant="caption"
                sx={{ lineHeight: '17px', color: '#1E1E1E' }}
              >
                {title.content}
              </Typography>
              <VoteButtonGroup
                likeCount={title.upVote}
                dislikeCount={title.downVote}
                like={false}
                dislike={false}
              />
              <Button
                sx={{
                  p: 0,
                  color: '#121212',
                  fontWeight: 600,
                  textTransform: 'none',
                  textDecoration: 'underline',
                }}
                onClick={() => alert('New Definition clicked')}
              >
                + New Definition
              </Button>
            </Grid>
            <Grid xs={7}>
              <List
                sx={{
                  listStyleType: 'disc',
                  pl: 2,
                  py: 0,
                }}
              >
                {contents.map(({ content, upVote, downVote }) => (
                  <ListItem
                    sx={{
                      display: 'list-item',
                      padding: 0,
                      fontSize: '12px',
                      lineHeight: '17px',
                    }}
                  >
                    <div>{content}</div>
                    <div>
                      <VoteButtonGroup
                        likeCount={upVote}
                        dislikeCount={downVote}
                        like={false}
                        dislike={false}
                      />
                    </div>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        ))}
      </Stack>
    </div>
  );
}
