import { styled, Stack } from '@mui/material';
import { colors } from '../../ThemeProvider';

export const QuillContainer = styled(Stack)({
  '& .quill': {
    color: colors['gray'],
  },
  '& .ql-toolbar.ql-snow': {
    borderTop: `1px solid ${colors['middle-gray']}`,
    borderRight: 'none',
    borderLeft: 'none',
    padding: '6px 12px',
    '& span.ql-formats': {
      paddingRight: '10px',
      borderRight: `1px solid ${colors['middle-gray']}`,
      '&:last-child': {
        border: 'none',
      },
      '& .ql-stroke': {
        stroke: colors['gray'],
      },
      '& .ql-fill': {
        fill: colors['gray'],
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
});
