import { styled, IconButton } from '@mui/material';

export const ReactionPlusButtonWrapper = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.text['gray']}`,
  borderRadius: '4px',
  padding: '4px',
  color: theme.palette.text['gray'],
  '& svg': {
    fontSize: '15px',
    strokeWidth: '0.5px',
  },
}));
