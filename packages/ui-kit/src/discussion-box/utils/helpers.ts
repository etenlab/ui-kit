import { IDiscussion, IPost, IReaction } from './types';

export function recalcDiscusionWithNewPost(
  discussion: IDiscussion,
  newPost: IPost,
): IDiscussion {
  if (
    discussion.posts.find((post: IPost) => post.post_id === newPost.post_id)
  ) {
    // Already exists, then return without adding
    return discussion;
  } else {
    // Add new Post
    return {
      ...discussion,
      posts: [...discussion.posts, newPost],
    };
  }
}

export function recalcDiscusionWithUpdatedPost(
  discussion: IDiscussion,
  updatedPost: IPost,
): IDiscussion {
  const posts = discussion.posts.map((post) => {
    // found updated post and return updated result
    if (post.post_id === updatedPost.post_id) {
      return updatedPost;
    }

    // found related post and return with changing
    if (post.reply_id === updatedPost.post_id) {
      return {
        ...post,
        reply: {
          is_edited: updatedPost.is_edited,
          user: {
            username: updatedPost.user.username,
          },
          plain_text: updatedPost.plain_text,
          files: updatedPost.files.map(
            (file) => file.relationship_post_file_id,
          ),
        },
      };
    }

    return post;
  });

  return {
    ...discussion,
    posts: posts,
  } as IDiscussion;
}

export function recalcDiscussionWithDeletedPostId(
  discussion: IDiscussion,
  postId: string,
): IDiscussion {
  const posts = discussion.posts
    // Remove deleted post from list
    .filter((post) => post.post_id !== postId)
    // Resolve related posts
    .map((post) => {
      if (post.reply_id === postId) {
        return {
          ...post,
          reply: undefined,
        } as IPost;
      }

      return post;
    });

  return {
    ...discussion,
    posts: posts,
  } as IDiscussion;
}

export function recalcDiscussionWithNewReation(
  discussion: IDiscussion,
  newReaction: IReaction,
): IDiscussion {
  const post_id = newReaction.post_id;
  const reaction_id = newReaction.reaction_id;

  return {
    ...discussion,
    posts: discussion.posts.map((post) => {
      if (post.post_id !== post_id) {
        return post;
      }

      if (
        post.reactions.find((reaction) => reaction.reaction_id === reaction_id)
      ) {
        return post;
      }

      return {
        ...post,
        reactions: [...post.reactions, newReaction],
      };
    }),
  };
}

export function recalcDiscusionWithDeletedReactionId(
  discussion: IDiscussion,
  reactionId: string,
): IDiscussion {
  return {
    ...discussion,
    posts: discussion.posts.map((post) => ({
      ...post,
      reactions: post.reactions.filter(
        (reaction) => reaction.reaction_id !== reactionId,
      ),
    })),
  };
}

type MapContentToReactions = {
  [index: string]: {
    content: string;
    reactions: IReaction[];
  };
};

export function sortByContent(reactions: IReaction[]) {
  const mapContentToReactions: MapContentToReactions = {};

  reactions.forEach((reaction) => {
    if (mapContentToReactions[reaction.content]) {
      mapContentToReactions[reaction.content].reactions.push(reaction);
    } else {
      mapContentToReactions[reaction.content] = {
        content: reaction.content,
        reactions: [reaction],
      };
    }
  });

  return Object.values(mapContentToReactions).sort((A, B) => {
    if (A.content > B.content) return 1;
    if (A.content < B.content) return -1;
    return 0;
  });
}

export const getMimeType = (fileType: string | null): string => {
  if (fileType === null || fileType.trim().length === 0) {
    return 'normal';
  }

  const classic = fileType.trim().split('/');

  if (classic.length < 2) return 'normal';

  switch (classic[0]) {
    case 'video': {
      return 'video';
    }
    case 'audio': {
      return 'audio';
    }
    case 'image': {
      return 'image';
    }
    default: {
      return 'normal';
    }
  }
};
