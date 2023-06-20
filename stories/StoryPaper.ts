import { styled } from '@mui/material';
import { designColors } from '../packages/ui-kit/src/ThemeProvider';

export const StoryPaper = styled('div')(({ theme }) => ({
  margin: '20px',
  background:
    theme.palette.mode === 'light'
      ? designColors.disable
      : designColors['dark/bg'],
  width: 'calc(100% - 20px)',
}));
