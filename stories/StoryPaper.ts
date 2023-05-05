import { styled } from '@mui/material';

export const StoryPaper = styled('div')(({ theme }) => ({
  margin: '20px',
  background: theme.palette.text.disable,
  width: 'calc(100% - 20px)',
}));
