import { Dispatch, useCallback } from 'react';

import {
  ActionType,
  FeedbackType,
  EmojiModeType,
  IPost,
  IUser,
  EditorKinds,
} from '../utils/types';

import {
  setNewUser as setNewUserAction,
  alertFeedback as alertFeedbackAction,
  closeFeedback as closeFeedbackAction,
  openEmojiPicker as openEmojiPickerAction,
  closeEmojiPicker as closeEmojiPickerAction,
  changeEditorKind as changeEditorKindAction,
} from '../reducers/global.actions';

type UseGlobalProps = {
  dispatch: Dispatch<ActionType<unknown>>;
};

// This hook take care every chagnes of discussion's state via connecting graphql servers
export function useGlobal({ dispatch }: UseGlobalProps) {
  const setNewUser = useCallback(
    (user: IUser) => {
      dispatch(setNewUserAction(user));
    },
    [dispatch],
  );

  const alertFeedback = useCallback(
    (feedbackType: FeedbackType, message: string) => {
      dispatch(alertFeedbackAction(feedbackType, message));
    },
    [dispatch],
  );

  const closeFeedback = useCallback(() => {
    dispatch(closeFeedbackAction());
  }, [dispatch]);

  const openEmojiPicker = useCallback(
    (
      anchorEl: Element | null,
      post: IPost | null = null,
      mode: EmojiModeType = 'react',
    ) => {
      dispatch(openEmojiPickerAction(anchorEl, post, mode));
    },
    [dispatch],
  );

  const closeEmojiPicker = useCallback(() => {
    dispatch(closeEmojiPickerAction());
  }, [dispatch]);

  const changeEditorKind = useCallback(
    (kind: EditorKinds | null) => {
      dispatch(changeEditorKindAction(kind));
    },
    [dispatch],
  );

  return {
    setNewUser,
    alertFeedback,
    closeFeedback,
    openEmojiPicker,
    closeEmojiPicker,
    changeEditorKind,
  };
}
