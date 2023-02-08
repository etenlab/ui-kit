import { styled } from '@mui/material/styles';

import { colors } from '../../ThemeProvider';

export const TooltipUserName = styled('div')({
  margin: 'auto',
  padding: '2px 0',
});

export const EmojiWrapper = styled('div')({
  margin: 'auto',
  borderRadius: '8px',
  marginBottom: '8px',
  width: '50px',
  height: '50px',
  background: colors['white'],
});
