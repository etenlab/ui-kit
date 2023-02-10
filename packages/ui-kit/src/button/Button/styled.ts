import { styled, Button } from '@mui/material';

export const StyledButton = styled(Button)({
  gap: 10,
  paddingTop: 11,
  paddingBottom: 11,
  borderRadius: 10,
  fontWeight: 700,
  fontSize: 14,
  lineHeight: '18px',
  textTransform: 'none',
  '&.MuiButton-sizeSmall': {
    minWidth: '157px',
    borderRadius: '4px',
    fontWeight: 400,
    padding: '9px',
    '& .MuiButton-startIcon': {
      marginRight: 0,
    },
  },
});
