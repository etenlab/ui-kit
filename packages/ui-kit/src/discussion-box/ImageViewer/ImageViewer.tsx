import React, { useState } from 'react';

import { Modal, styled, Box } from '@mui/material';
import { useColorModeContext } from '../../ThemeProvider';

const DownloadText = styled('span')(({ theme }) => ({
  display: 'block',
  color: theme.palette.text['blue-primary'],
  textDecoration: 'underline',
  cursor: 'pointer',
}));

const handleDownload = (file_name: string, file_url: string) => {
  let hiddenElement = document.createElement('a');
  hiddenElement.href = encodeURI(file_url);
  hiddenElement.download = file_name;
  hiddenElement.click();
};

export function ImageViewer({
  src,
  file_name,
  mode,
}: {
  src: string;
  file_name: string;
  mode: 'view' | 'quill';
}) {
  const { getColor } = useColorModeContext();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const attr =
    mode === 'quill'
      ? {
          width: '50px',
          height: '50px',
          style: {
            borderRadius: '4px',
            border: `1px solid ${getColor('dark')}`,
          },
        }
      : {
          width: '100px',
          height: '100px',
          style: {
            cursor: 'zoom-in',
            borderRadius: '10px',
            border: `1px solid ${getColor('dark')}`,
          },
        };

  return (
    <>
      <img
        src={src}
        {...attr}
        loading="lazy"
        alt={file_name}
        onClick={handleOpen}
      />
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto',
            height: '70%',
            bgcolor: 'background.paper',
            border: `2px solid ${getColor('dark')}`,
            boxShadow: 24,
            p: 4,
          }}
        >
          <img src={src} height="100%" loading="lazy" alt="fee" />
          <DownloadText
            onClick={() => {
              handleDownload(file_name, src);
            }}
          >
            Click And Download
          </DownloadText>
        </Box>
      </Modal>
    </>
  );
}
