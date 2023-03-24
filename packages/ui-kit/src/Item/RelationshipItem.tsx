import React from 'react';

import { Item } from '.';
import { Relationship } from 'node-type';

export function RelationshipItem({
  relationship: { relationship_type, propertyKeys },
}: {
  relationship: Relationship;
}) {
  return <Item success type={relationship_type} propertyKeys={propertyKeys} />;
}
