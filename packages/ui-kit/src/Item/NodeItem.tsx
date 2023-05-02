import React from 'react';
import { Item } from '.';
import { Node } from 'node-type';

export function NodeItem({
  node: { node_type, propertyKeys },
  warning = false,
  showRelation,
  onClick,
}: {
  node: Node;
  onClick?: () => void;
  warning: boolean;
  showRelation: boolean;
}) {
  return (
    <Item
      success={false}
      warning={warning}
      type={node_type}
      showRelation={showRelation}
      propertyKeys={propertyKeys}
      onClick={onClick}
    />
  );
}
