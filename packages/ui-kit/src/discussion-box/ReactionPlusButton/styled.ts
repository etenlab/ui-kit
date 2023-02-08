import { styled, IconButton } from '@mui/material';
import { colors } from '../../ThemeProvider';

export const ReactionPlusButtonWrapper = styled(IconButton)({
  border: `1px solid ${colors['gray']}`,
  borderRadius: '4px',
  padding: '4px',
  color: colors['gray'],
  '& svg': {
    fontSize: '15px',
    strokeWidth: '0.5px',
  },
});
