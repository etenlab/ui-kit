import React from 'react';

import { Stack } from '@mui/material';
import { Chip } from './chip';

interface GroupedItem {
  type: string;
  count: number;
}

interface IChip {
  items: Record<string, GroupedItem>;
  typesToExclude: string[];
  isNode: boolean;
  clickHandler: (name: string, isChecked: boolean) => void;
}

export const Chips = ({
  items,
  typesToExclude,
  isNode,
  clickHandler,
}: IChip) => {
  return (
    <Stack display={'flex'} flexDirection={'row'} gap={'6px'}>
      {Object.entries(items).map((key) => {
        return (
          <Chip
            name={key[0]}
            count={key[1].count}
            isNode={isNode}
            isChecked={!typesToExclude.includes(key[0])}
            key={`${key[0]}:${key[1]}`}
            clickHandler={clickHandler}
          />
        );
      })}
    </Stack>
  );
};
