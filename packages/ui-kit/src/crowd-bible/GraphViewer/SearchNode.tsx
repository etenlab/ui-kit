import React from 'react';
import { useState } from 'react';

import { Typography } from '@mui/material';
import { InnerBox, ItemsBox } from './styled';
import { SearchInput } from '../../input';

import { NodeItem } from '../../Item/NodeItem';
import { Node } from 'node-type';

export function SearchNode({
  nodes,
  search,
  setSearch,
  nodeClickHandler,
}: {
  nodes: Node[];
  search: string;
  setSearch: (input: string) => void;
  nodeClickHandler: (id: string) => void;
}) {
  const [input, setInput] = useState('');

  return (
    <>
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
        fullWidth
      />
      <InnerBox>
        {!!search && !nodes.length && (
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
            No Result
          </Typography>
        )}
        <ItemsBox>
          {nodes.map((node, index) => (
            <NodeItem
              key={index}
              node={node}
              warning={false}
              showRelation={false}
              onClick={() => nodeClickHandler(node.id)}
            />
          ))}
        </ItemsBox>
      </InnerBox>
    </>
  );
}
