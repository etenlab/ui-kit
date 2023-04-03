import React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { CircularProgress } from '@mui/material';
import { InnerBox, ItemsBox } from './styled';
import { SearchInput } from '../../input';

import { NodeItem } from '../../Item/NodeItem';
import { Node } from 'node-type';

export function SearchNode({
  nodes,
  setSearch,
  isLoading,
  history,
}: {
  nodes: Node[];
  setSearch: (input: string) => void;
  isLoading: boolean;
  history?: RouteComponentProps['history'];
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
        fullWidth
      />
      <InnerBox>
        <ItemsBox>
          {nodes.map((node, index) => (
            <NodeItem
              key={index}
              node={node}
              warning={false}
              showRelation={false}
              onClick={() => {
                if (history) {
                  history.push(`/graph-viewer/node/${node.id}`);
                  window.location.reload();
                }
              }}
            />
          ))}
        </ItemsBox>
      </InnerBox>
    </div>
  );
}
