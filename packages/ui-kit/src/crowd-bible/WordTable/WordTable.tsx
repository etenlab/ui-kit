import React from 'react';

import { Stack, Grid, Divider, List, ListItem } from '@mui/material';

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
      <Grid container>
        <Grid item xs={5}>
          {label_1}
        </Grid>
        <Grid item xs={7}>
          {label_2}
        </Grid>
      </Grid>
      <Divider />
      <Stack direction="column" divider={<Divider flexItem />}>
        {items.map(({ title, contents }) => (
          <Grid container key={title.content}>
            <Grid xs={5}>{title.content}</Grid>
            <Grid xs={7}>
              <List
                sx={{
                  listStyleType: 'disc',
                  pl: 2,
                }}
              >
                {contents.map(({ content, upVote, downVote }) => (
                  <ListItem sx={{ display: 'list-item', padding: 0 }}>
                    {content}
                    <div>
                      {upVote} {downVote}
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
