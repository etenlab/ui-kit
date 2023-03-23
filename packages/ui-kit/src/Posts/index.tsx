import React from 'react';

import { IoChatboxOutline } from '../icons';
import './Posts.css';
import { Post } from 'node-type';

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="posts">
      <IoChatboxOutline />
      {posts.length}
    </div>
  );
}
