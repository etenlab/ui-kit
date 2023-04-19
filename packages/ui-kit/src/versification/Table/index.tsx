import React, { useState } from 'react';

import { Box, Typography, ButtonGroup, IconButton } from '@mui/material';

import { useColorModeContext } from '../../ThemeProvider';
import { TbLayoutRows, TbLayoutColumns, TbArrowBack } from '../../icons';
import { BibleBook } from './types';
import { RowView } from './RowView';
import { ColumnView } from './ColumnView';
import { LineBreakView } from './LineBreakView';

const views = [
  { name: 'row', Icon: TbLayoutRows, View: RowView },
  { name: 'column', Icon: TbLayoutColumns, View: ColumnView },
  { name: 'lineBreak', Icon: TbArrowBack, View: LineBreakView },
];

export type TableProps = Parameters<typeof Table>[number];

export function Table({
  bibleBook,
  onNewIdentifierSave,
}: {
  bibleBook: BibleBook;
  onNewIdentifierSave(id: string, value: string): void;
}) {
  const { getColor } = useColorModeContext();
  const [activeViewName, setActiveViewName] = useState(views[0].name);
  const { View } = views.find(({ name }) => name === activeViewName)!;

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="0px 14px 5px"
      >
        <Typography
          sx={{
            textTransform: 'uppercase',
            opacity: 0.5,
            fontWeight: 600,
            fontSize: '14px',
            letterSpacing: '0.05em',
            color: getColor('gray'),
          }}
        >
          Versification table
        </Typography>
        <ButtonGroup>
          {views.map(({ name, Icon }) => (
            <IconButton
              key={name}
              size="small"
              sx={{
                color: getColor(
                  name === activeViewName ? 'gray' : 'middle-gray',
                ),
                '& svg': {
                  strokeWidth: '2.75px',
                  width: '25px',
                  height: '25px',
                },
              }}
              {...(name !== activeViewName && {
                onClick: () => setActiveViewName(name),
              })}
            >
              <Icon />
            </IconButton>
          ))}
        </ButtonGroup>
      </Box>
      <View bibleBook={bibleBook} onNewIdentifierSave={onNewIdentifierSave} />
    </>
  );
}
