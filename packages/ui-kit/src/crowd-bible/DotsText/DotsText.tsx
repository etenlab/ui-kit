import React, { Fragment, useState } from 'react';

import { Box, PaletteColor, useTheme } from '@mui/material';
import { useColorModeContext } from '../../ThemeProvider';

type Range = {
  id: unknown;
  start: number;
  end: number;
};

type DotsTextProps = {
  text: string;
  ranges: Range[];
  onSelect(id: unknown): void;
  dotColor: 'yellow' | 'blue-primary';
  selectedColor: 'light-blue' | 'middle-yellow';
};

export function DotsText({
  text,
  ranges,
  onSelect,
  dotColor,
  selectedColor,
}: DotsTextProps) {
  const { getColor } = useColorModeContext();
  const [selected, setSelected] = useState<Range | null>(null);
  const theme = useTheme();
  const dotPaletteColor = (theme.palette[dotColor] as PaletteColor).main;
  const selectedPaletteColor = (theme.palette[selectedColor] as PaletteColor)
    .main;

  const handleClick = (range: Range) => {
    onSelect(range.id);
    setSelected(range);
  };

  const words = text.split(' ');

  const start =
    selected && selected.start !== null ? selected.start : words.length;
  const end = selected && selected.end !== null ? selected.end : start;

  const wordToJSX =
    (selected: boolean, start: number, IsAddSpaceToEnd: boolean) =>
    (word: string, index: number) => {
      const dot = ranges.find((range) => range.start === start + index);

      return (
        <Fragment key={start + index}>
          {IsAddSpaceToEnd || (index === 0 && selected) ? null : ' '}
          {dot ? (
            <span onClick={() => handleClick(dot)} className="word">
              {word}
            </span>
          ) : (
            word
          )}
          {IsAddSpaceToEnd ? ' ' : null}
        </Fragment>
      );
    };

  const firstPart = words.slice(0, start).map(wordToJSX(false, 0, true));
  const secondPart = words.slice(end + 1).map(wordToJSX(false, end + 1, false));
  const selectedPart = words
    .slice(start, end + 1)
    .map(wordToJSX(true, start, false));

  return (
    <Box
      sx={{
        fontWeight: 400,
        fontSize: '14px',
        color: getColor('dark'),
        lineHeight: '30px',
        textAlign: 'justify',
        '& .selectedText .word:first-of-type': {
          fontWeight: 'bold',
        },
        '& .word': {
          position: 'relative',
          cursor: 'pointer',
          '&::before': {
            content: '""',
            position: 'absolute',
            padding: '3px',
            borderRadius: '50%',
            backgroundColor: dotPaletteColor,
          },
        },
        '& .selectedText': {
          padding: '4px 0',
          borderRadius: '4px',
          background: selectedPaletteColor,
        },
      }}
    >
      {firstPart}
      <span className="selectedText">{selectedPart}</span>
      {secondPart}
    </Box>
  );
}
