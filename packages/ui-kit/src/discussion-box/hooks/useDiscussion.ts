import { useEffect, useCallback, Dispatch, useRef } from 'react';

import { useMutation, useLazyQuery } from '@apollo/client';

import { GET_DISCUSSIONS, CREATE_DISCUSSION } from '../graphql/discussionQuery';

import {
  IDiscussion,
  ActionType,
  ChangeDiscussionParams,
} from '../utils/types';

import { loadDiscussion } from '../reducers/discussion.actions';
import { alertFeedback } from '../reducers/global.actions';

type UseDiscussionProps = {
  discussion: IDiscussion | null;
  dispatch: Dispatch<ActionType<unknown>>;
};

export function useDiscussion({ discussion, dispatch }: UseDiscussionProps) {
  const discussionRef = useRef<ChangeDiscussionParams | null>(null);

  const [
    createDiscussion,
    {
      data: newDiscussionData,
      error: createDiscussionError,
      loading: newDiscussionLoading,
    },
  ] = useMutation(CREATE_DISCUSSION);

  const [
    getDiscussions,
    {
      called: discussionCalled,
      loading: discussionLoading,
      error: discussionError,
      data: discussionData,
    },
  ] = useLazyQuery(GET_DISCUSSIONS, {
    fetchPolicy: 'no-cache',
  });

  const changeDiscussion = useCallback(
    ({ table_name, row_id }: ChangeDiscussionParams) => {
      if (table_name.length === 0 || row_id.length === 0) {
        alertFeedback('error', 'Error at table_name or row_id');
        return;
      }

      if (
        table_name === discussion?.table_name ||
        row_id === discussion?.row_id
      ) {
        return;
      }

      // Save params
      discussionRef.current = {
        table_name,
        row_id,
      };

      getDiscussions({
        variables: {
          table_name,
          row_id,
        },
      });
    },
    [getDiscussions, discussion],
  );

  // Substitute 'discussionData' came from server to 'discussion'
  useEffect(() => {
    // check load successness
    if (discussionCalled && !!discussionError) {
      dispatch(
        alertFeedback(
          'error',
          `Failed in loading discussion! Check your network connectivity`,
        ),
      );
      return;
    }

    if (discussionData === undefined) {
      return;
    }

    if (discussionData.discussions.length > 0) {
      dispatch(loadDiscussion(discussionData.discussions[0]));
      return;
    }

    // create a new Discussion with new table_name and row
    if (discussionRef.current) {
      createDiscussion({
        variables: {
          discussion: {
            row_id: discussionRef.current.row_id,
            table_name: discussionRef.current.table_name,
          },
        },
      });
    }
  }, [
    discussionError,
    discussionLoading,
    discussionCalled,
    discussionData,
    createDiscussion,
    dispatch,
  ]);

  // Sync 'discussion' with 'createdDiscussion' data
  useEffect(() => {
    if (!!createDiscussionError) {
      dispatch(
        alertFeedback(
          'error',
          `Failed in creating new discussion with #table_name: ${discussionRef.current?.table_name}, #row: ${discussionRef.current?.row_id}!`,
        ),
      );
      return;
    }

    if (newDiscussionData === undefined) {
      return;
    }

    const newDiscussion = newDiscussionData.createDiscussion;

    if (
      newDiscussion.table_name !== discussionRef.current?.table_name ||
      newDiscussion.row_id !== discussionRef.current?.row_id
    ) {
      dispatch(alertFeedback('warning', `Received not required discussion!`));
      return;
    }

    dispatch(loadDiscussion(newDiscussion));
  }, [
    newDiscussionData,
    createDiscussionError,
    newDiscussionLoading,
    dispatch,
  ]);

  return {
    loading: discussionLoading,
    changeDiscussion,
  };
}
