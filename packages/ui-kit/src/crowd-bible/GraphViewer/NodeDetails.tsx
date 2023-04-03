import React from 'react';
import { Fragment } from 'react';

import { CircularProgress } from '@mui/material';
import { NodeItem } from '../../Item/NodeItem';
import { RelationshipItem } from '../../Item/RelationshipItem';

import { Node } from 'node-type';
import { InnerBox, ItemsBox } from './styled';

export function NodeDetails({
  node,
  isLoading,
  setNodeId,
}: {
  node: Node;
  isLoading: boolean;
  setNodeId: (id: string) => void;
}) {
  return (
    <>
      {isLoading && <CircularProgress />}
      <InnerBox>
        {node && (
          <>
            <ItemsBox className="label">selected node</ItemsBox>
            <NodeItem node={node} warning={true} showRelation={false} />
            {node.nodeRelationships && node.nodeRelationships.length > 0 && (
              <div style={{ marginTop: 15 }}>
                <div className="label">relationships</div>
                <div>
                  {node.nodeRelationships.map((relationship, index) => {
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
                          onClick={() => setNodeId(relationshipNode.id)}
                        />
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </InnerBox>
    </>
  );
}
