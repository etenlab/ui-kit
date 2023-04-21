import { styled } from '@mui/material';

export const StoryPaper = styled('div')(({ theme }) => ({
  margin: '3em',
  background: theme.palette.text.disable,
  width: '700px',
}));
