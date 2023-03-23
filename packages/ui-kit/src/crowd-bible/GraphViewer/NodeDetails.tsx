import React from 'react';
import { Fragment } from 'react';

import { CircularProgress } from '@mui/material';
import { NodeItem } from '../../Item/NodeItem';
import { RelationshipItem } from '../../Item/RelationshipItem';

import { Node } from 'node-type';

export function NodeDetails({
  node,
  isLoading,
  onClick,
}: {
  node: Node;
  isLoading: boolean;
  onClick: () => void;
}) {
  return (
    <>
      {isLoading && <CircularProgress />}
      <div className="inner">
        {node && (
          <>
            <div className="label">selected node</div>
            <NodeItem node={node} warning />
            {node.relationships && node.relationships.length > 0 && (
              <div style={{ marginTop: 15 }}>
                <div className="label">relationships</div>
                <div>
                  {node.relationships.map((relationship, index) => {
                    const relationshipNode =
                      relationship.fromNode.node_id !== node.node_id
                        ? relationship.fromNode
                        : relationship.toNode;

                    return (
                      <Fragment key={index}>
                        <RelationshipItem relationship={relationship} />
                        <NodeItem
                          node={relationshipNode}
                          warning
                          showRelation
                          onClick={onClick}
                        />
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}