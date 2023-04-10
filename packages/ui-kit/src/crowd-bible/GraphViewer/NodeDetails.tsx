import React, { useMemo } from 'react';
import { Fragment } from 'react';

import { NodeItem } from '../../Item/NodeItem';
import { RelationshipItem } from '../../Item/RelationshipItem';
import { Box, Typography } from '@mui/material';
import { InnerBox, ItemsBox } from './styled';
import { Chips } from '../../chips';

import { Node } from 'node-type';
import { useFilter } from './useFilter';

interface GroupedItem {
  type: string;
  count: number;
}

export function NodeDetails({
  node,
  nodeClickHandler,
}: {
  node: Node;
  nodeClickHandler: (id: string) => void;
}) {
  const { typesToExclude, filterHandler } = useFilter();

  const groupedByType = () => {
    return (node?.toNodeRelationships ?? []).reduce(
      (prev: Record<string, GroupedItem>, rel) => {
        if (!prev[rel.relationship_type]) {
          prev[rel.relationship_type] = {
            type: rel.relationship_type,
            count: 1,
          };
        } else {
          prev[rel.relationship_type].count++;
        }
        return prev;
      },
      {},
    );
  };

  const filteredRelationships = useMemo(() => {
    return node?.toNodeRelationships?.filter(
      (rel) => !typesToExclude.includes(rel.relationship_type),
    );
  }, [node, typesToExclude]);

  return (
    <InnerBox>
      {node && (
        <>
          <Box display={'flex'} flexDirection={'row'} gap={'20px'}>
            <Typography variant="body2">
              Total Relationships: {node?.toNodeRelationships?.length}
            </Typography>
            <Typography variant="body2">
              Showing: {filteredRelationships?.length}
            </Typography>
          </Box>
          <Box paddingY={'15px'}>
            <Chips
              items={groupedByType()}
              typesToExclude={typesToExclude}
              isNode={false}
              clickHandler={filterHandler}
            />
          </Box>
          <InnerBox>
            <ItemsBox className="label">selected node</ItemsBox>
            <NodeItem node={node} warning={true} showRelation={false} />
            {filteredRelationships && filteredRelationships.length > 0 && (
              <div style={{ marginTop: 15 }}>
                <div className="label">relationships</div>
                <div>
                  {filteredRelationships.map((relationship, index) => {
                    const relationshipNode =
                      relationship.fromNode.id !== node.id
                        ? relationship.fromNode
                        : relationship.toNode;

                    return (
                      <Fragment key={index}>
                        <RelationshipItem relationship={relationship} />
                        <NodeItem
                          node={relationshipNode}
                          warning={true}
                          showRelation
                          onClick={() => nodeClickHandler(relationshipNode.id)}
                        />
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            )}
          </InnerBox>
        </>
      )}
    </InnerBox>
  );
}
