import React from 'react';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

import { SearchInput } from '../../input';

import { NodeItem } from '../../Item/NodeItem';
import { Node } from 'node-type';
import './Pages.css';

export function SearchNode({
  nodes,
  setSearch,
  isLoading,
  onClick,
}: {
  nodes: Node[];
  setSearch: (input: string) => void;
  isLoading: boolean;
  onClick: () => void;
}) {
  const [input, setInput] = useState('');

  return (
    <div>
      {isLoading && <CircularProgress />}
      <SearchInput
        placeholder="Search a node"
        value={input}
        onChange={(event) => setInput(event.target?.value?.toString() || '')}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            setSearch(input);
          }
        }}
        onBlur={() => setSearch(input)}
        // onClear={() => setSearch('')}
        fullWidth
      />
      <div className="inner">
        <div className="items">
          {nodes.map((node, index) => (
            <NodeItem key={index} node={node} onClick={onClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
