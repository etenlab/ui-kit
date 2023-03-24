import { styled, Box } from '@mui/material';

export const VoteBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  minWidth: '32px',
  '& + &': {
    marginLeft: '8px',
  },
});
