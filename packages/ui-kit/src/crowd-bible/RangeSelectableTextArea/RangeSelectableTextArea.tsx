import React, { Fragment } from 'react';

import { StyledBox } from './styled';

type Position = number | null;

type TextSelectionProps = {
  text: string;
  range: {
    start: Position;
    end: Position;
  };
  onChangeRange({ start, end }: { start: Position; end: Position }): void;
};

export function RangeSelectableTextArea({
  text,
  range,
  onChangeRange,
}: TextSelectionProps) {
  const handleSelectWord = (position: number) => {
    // Set the starting position for range selection
    if (range.start === null) {
      onChangeRange({
        start: position,
        end: null,
      });
      return;
    }

    // Validate index value
    if (position < range.start) {
      alert('The last selection must be positioned after the first!');
      return;
    }

    if (range.end === null) {
      onChangeRange({
        start: range.start,
        end: position,
      });
      return;
    }

    if (position === range.start) {
      onChangeRange({
        start: null,
        end: null,
      });
      return;
    }

    if (position === range.end) {
      onChangeRange({
        start: range.start,
        end: null,
      });
      return;
    }

    onChangeRange({
      start: range.start,
      end: position,
    });
  };

  const words = text.split(' ');

  const start = range.start !== null ? range.start : words.length;
  const end = range.end !== null ? range.end : start;

  const wordToJSX =
    (selected: boolean, start: number, IsAddSpaceToEnd: boolean) =>
    (word: string, index: number) =>
      (
        <Fragment key={start + index}>
          {IsAddSpaceToEnd || (index === 0 && selected) ? null : (
            <span className="space"> </span>
          )}
          <span
            onClick={() => handleSelectWord(index + start)}
            className="word"
          >
            {word}
          </span>
          {IsAddSpaceToEnd ? <span className="space"> </span> : null}
        </Fragment>
      );

  const firstPart = words.slice(0, start).map(wordToJSX(false, 0, true));
  const secondPart = words.slice(end + 1).map(wordToJSX(false, end + 1, false));
  const selectedPart = words
    .slice(start, end + 1)
    .map(wordToJSX(true, start, false));

  return (
    <StyledBox>
      {firstPart}
      <span className="selectedText">{selectedPart}</span>
      {secondPart}
    </StyledBox>
  );
}
