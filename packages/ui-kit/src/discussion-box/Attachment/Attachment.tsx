import React, { ReactElement } from 'react';

import { IconButton, Box } from '@mui/material';

import { FileViewer } from '../FileViewer';
import { ImageViewer } from '../ImageViewer';
import { VideoPlayer } from '../VideoPlayer';
import { AudioPlayer } from '../AudioPlayer';

import { IFile } from '../types';
import { getMimeType } from '../utils/helpers';
import { DiRemove } from '../../icons';
import { useColorModeContext } from '../../ThemeProvider';

type WrapperProps = {
  onRemove(): void;
  mode: 'view' | 'quill';
  children: JSX.Element;
};

export function Wrapper({ onRemove, mode, children }: WrapperProps) {
  const { getColor } = useColorModeContext();
  const sxObj =
    mode === 'view'
      ? {
          top: 0,
          right: '-25px',
        }
      : {
          top: '3px',
          right: '3px',
        };

  return (
    <Box
      sx={{
        display: 'inline-block',
        position: 'relative',
      }}
    >
      {children}
      <IconButton
        onClick={onRemove}
        sx={{
          position: 'absolute',
          padding: '3px',
          border: 'none',
          background: `rgba(0, 0, 0, 0.5)`,
          color: getColor('white'),
          ...sxObj,
        }}
      >
        <DiRemove style={{ fontSize: '15px' }} />
      </IconButton>
    </Box>
  );
}

type AttachmentProps = {
  file: IFile;
  mode?: 'view' | 'quill';
  onRemove(): void;
};

export function Attachment({ file, mode = 'view', onRemove }: AttachmentProps) {
  const mime = getMimeType(file.file_type);

  let content: ReactElement;

  switch (mime) {
    case 'video': {
      content = (
        <VideoPlayer
          src={file.file_url}
          file_type={file.file_type || ''}
          mode={mode}
        />
      );
      break;
    }
    case 'audio': {
      content = (
        <AudioPlayer
          src={file.file_url}
          file_type={file.file_type || ''}
          mode={mode}
        />
      );
      break;
    }
    case 'image': {
      content = (
        <ImageViewer
          src={file.file_url}
          file_name={file.file_name}
          mode={mode}
        />
      );
      break;
    }
    default: {
      content = <FileViewer file={file} mode={mode} />;
      break;
    }
  }

  return (
    <Wrapper onRemove={onRemove} mode={mode}>
      {content}
    </Wrapper>
  );
}
