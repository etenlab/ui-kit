import { styled, Box } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '14px',
  color: theme.palette.text['dark'],
  lineHeight: '30px',
  textAlign: 'justify',
  '& .selectedText .word:first-of-type, & .selectedText .word:last-of-type': {
    fontWeight: 'bold',
  },
  '& .word': {
    cursor: 'pointer',
  },
  '& .selectedText': {
    padding: '4px 0',
    borderRadius: '4px',
    background: '#e3eaf3',
  },
}));
