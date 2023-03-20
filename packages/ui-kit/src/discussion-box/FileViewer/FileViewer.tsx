import React from 'react';

import { Stack, IconButton, Box, Typography } from '@mui/material';

import { BiDownload, BiFile } from '../../icons';
import { useColorModeContext } from '../../ThemeProvider';

import { IFile } from '../types';

const handleDownload = (file_name: string, file_url: string) => {
  let hiddenElement = document.createElement('a');
  hiddenElement.href = encodeURI(file_url);
  hiddenElement.download = file_name;
  hiddenElement.click();
};

export function FileSize({ fileSize }: { fileSize: number }) {
  let sizeWithUnit = '';

  if (fileSize < 1024) {
    sizeWithUnit = `${fileSize.toFixed(2)} Byte`;
  } else if (fileSize < 1024 * 1024) {
    sizeWithUnit = `${(fileSize / 1024).toFixed(2)} KB`;
  } else if (fileSize < 1024 * 1024 * 1024) {
    sizeWithUnit = `${(fileSize / (1024 * 1024)).toFixed(2)} MB`;
  } else {
    sizeWithUnit = `${(fileSize / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  }

  return (
    <Typography variant="body2" color="text.dark">
      {sizeWithUnit}
    </Typography>
  );
}

type FileViewerProps = {
  file: IFile;
  mode: 'quill' | 'view';
};

export function FileViewer({ file, mode }: FileViewerProps) {
  const { getColor } = useColorModeContext();
  const downloadButton =
    mode === 'view' ? (
      <IconButton
        onClick={() => {
          handleDownload(file.file_name, file.file_url);
        }}
      >
        <BiDownload style={{ fontSize: '30px', color: getColor('dark') }} />
      </IconButton>
    ) : null;

  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: 'row',
        color: getColor('dark'),
        padding: '10px',
        border: `1px solid ${getColor('dark')}`,
        borderRadius: '10px',
        gap: '10px',
        width: '290px',
      }}
    >
      <BiFile style={{ fontSize: '70px', margin: '-10px' }} />
      <Stack justifyContent="space-between">
        <Typography variant="body1" color="text.dark">
          {file.file_name}
        </Typography>
        <FileSize fileSize={file.file_size} />
      </Stack>
      {downloadButton}
    </Box>
  );
}
