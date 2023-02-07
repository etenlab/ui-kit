import React from 'react';

import { IconButton, PaletteColor, Stack, Typography } from '@mui/material';

import { Button } from '../../button';
import { FiX } from '../../icons';

type KindSelectionBoxProps = {
  title: string;
  label: string;
  onTextClick(): void;
  onChapterClick(): void;
  onVerseClick(): void;
  onCancel(): void;
};

export function KindSelectionBox({
  title,
  label,
  onTextClick,
  onChapterClick,
  onVerseClick,
  onCancel,
}: KindSelectionBoxProps) {
  return (
    <Stack gap="12px" sx={{ padding: '20px' }}>
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h2">{title}</Typography>
          <IconButton onClick={onCancel}>
            <FiX />
          </IconButton>
        </Stack>
        <Typography
          variant="body3"
          sx={{ color: (theme) => (theme.palette.gray as PaletteColor).main }}
        >
          {label}
        </Typography>
      </Stack>
      <Button fullWidth color="dark" variant="outlined" onClick={onTextClick}>
        Part of the Text (word, phrase, paragraph)
      </Button>
      <Button
        fullWidth
        color="dark"
        variant="outlined"
        onClick={onChapterClick}
      >
        Chapter
      </Button>
      <Button fullWidth color="dark" variant="outlined" onClick={onVerseClick}>
        Verse
      </Button>
    </Stack>
  );
}
