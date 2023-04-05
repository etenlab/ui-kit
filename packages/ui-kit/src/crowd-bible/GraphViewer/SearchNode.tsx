import React, { useMemo } from 'react';
import { useState } from 'react';

import { Box, Typography } from '@mui/material';
import { InnerBox, ItemsBox } from './styled';
import { SearchInput } from '../../input';

import { NodeItem } from '../../Item/NodeItem';
import { Node } from 'node-type';
import { Chips } from '../../chips';
import { useFilter } from './useFilter';

interface GroupedItem {
  type: string;
  count: number;
}

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

  const { typesToExclude, filterHandler } = useFilter();

  const groupedByType = () => {
    return nodes.reduce((prev: Record<string, GroupedItem>, node) => {
      if (!prev[node.node_type]) {
        prev[node.node_type] = {
          type: node.node_type,
          count: 1,
        };
      } else {
        prev[node.node_type].count++;
      }
      return prev;
    }, {});
  };

  const filteredNodes = useMemo(() => {
    return nodes.filter((node) => !typesToExclude.includes(node.node_type));
  }, [nodes, typesToExclude]);

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
      <Box display={'flex'} flexDirection={'row'} gap={'20px'}>
        <Typography variant="body2">Total Nodes: {nodes.length}</Typography>
        <Typography variant="body2">Showing: {filteredNodes.length}</Typography>
      </Box>
      <Box paddingY={'15px'}>
        <Chips
          items={groupedByType()}
          typesToExclude={typesToExclude}
          isNode={true}
          clickHandler={filterHandler}
        />
      </Box>
      <InnerBox>
        {!!search && !filteredNodes.length && (
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
            No Result
          </Typography>
        )}
        <ItemsBox>
          {filteredNodes.map((node, index) => (
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
