import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Backdrop,
  Stack,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Divider,
  Snackbar,
  Alert,
} from '@mui/material';

import { useColorModeContext } from '../ThemeProvider';

import { useLazyQuery } from '@apollo/client';

import { GET_DISCUSSIONS_SUMMARY_BY_USER_ID } from './graphql/discussionQuery';

export function DiscussionList({ userId }: { userId: number }) {
  const navigate = useNavigate();
  const { getColor } = useColorModeContext();

  const [getDiscussionsSummaryByUserId, { called, loading, error, data }] =
    useLazyQuery(GET_DISCUSSIONS_SUMMARY_BY_USER_ID, {
      fetchPolicy: 'no-cache',
    });

  useEffect(() => {
    if (userId) {
      getDiscussionsSummaryByUserId({
        variables: {
          userId,
        },
      });
    }
  }, [userId, getDiscussionsSummaryByUserId]);

  if (error) {
    <Snackbar
      open
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      key="bottom-right"
    >
      <Alert variant="filled" severity="error" sx={{ width: '100%' }}>
        Network Issue
      </Alert>
    </Snackbar>;
  }

  if (called && loading) {
    return (
      <Backdrop
        sx={{ color: getColor('bg-main'), zIndex: 1000 }}
        open={loading}
      >
        <Stack justifyContent="center">
          <div style={{ margin: 'auto' }}>
            <CircularProgress color="inherit" />
          </div>
          <div>LOADING</div>
        </Stack>
      </Backdrop>
    );
  }

  if (data === undefined) {
    return <div>No Discussions...</div>;
  }

  return (
    <List>
      {data.getDiscussionsSummaryByUserId.map(
        ({
          id,
          table_name,
          row,
          total_posts,
        }: {
          id: number;
          table_name: string;
          row: number;
          total_posts: number;
        }) => (
          <Fragment key={id}>
            <ListItem
              disablePadding
              onClick={() => {
                navigate(`/translation-app/discussion/${table_name}/${row}`);
              }}
            >
              <ListItemText
                primary={`${table_name} #${row}`}
                secondary={`Total discussions: ${total_posts}`}
              />
            </ListItem>
            <Divider />
          </Fragment>
        ),
      )}
    </List>
  );
}
