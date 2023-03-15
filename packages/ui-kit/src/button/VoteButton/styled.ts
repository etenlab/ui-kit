import { styled, Button } from '@mui/material';

export const StyledButton = styled(Button)({
  minWidth: '51px',
  width: '51px',
  height: '24px',
  padding: '5px 9px',
  borderRadius: 4,
  fontWeight: 700,
  fontSize: 12,
  lineHeight: '15px',
  textTransform: 'none',
  '& .MuiButton-startIcon': {
    marginRight: '4px',
  },
});
