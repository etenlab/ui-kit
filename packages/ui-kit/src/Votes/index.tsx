import React from 'react';
import { BiLike, BiDislike } from '../icons';

import './Votes.css';

export function Votes({
  upVotes,
  downVotes,
}: {
  upVotes: number;
  downVotes: number;
}) {
  return (
    <div className="votes">
      <div className="vote">
        <BiLike />
        {upVotes}
      </div>
      <div className="vote">
        <BiDislike />
        {downVotes}
      </div>
    </div>
  );
}
