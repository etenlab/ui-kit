import React from 'react';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { InnerBox, ItemsBox } from './styled';
import { SearchInput } from '../../input';

import { NodeItem } from '../../Item/NodeItem';
import { Node } from 'node-type';

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
      <InnerBox>
        <ItemsBox>
          {nodes.map((node, index) => (
            <NodeItem key={index} node={node} onClick={onClick} />
          ))}
        </ItemsBox>
      </InnerBox>
    </div>
  );
}
