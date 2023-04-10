import { styled, Stack } from '@mui/material';

export const QuillContainer = styled(Stack)(({ theme }) => ({
  '& .quill': {
    color: theme.palette.text['gray'],
  },
  '& .ql-toolbar.ql-snow': {
    borderTop: `1px solid ${theme.palette.text['middle-gray']}`,
    borderRight: 'none',
    borderLeft: 'none',
    padding: '6px 12px',
    '& span.ql-formats': {
      paddingRight: '10px',
      borderRight: `1px solid ${theme.palette.text['middle-gray']}`,
      '&:last-of-type': {
        border: 'none',
      },
      '& .ql-stroke': {
        stroke: theme.palette.text['gray'],
      },
      '& .ql-fill': {
        fill: theme.palette.text['gray'],
      },
    },
  },
  '& .ql-container.ql-snow': {
    maxHeight: '400px',
    overflowY: 'auto',
    border: 'none',
    '& .ql-editor': {
      padding: '10px 20px',
    },
  },
}));
