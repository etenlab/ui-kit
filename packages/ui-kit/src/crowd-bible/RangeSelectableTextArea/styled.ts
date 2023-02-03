import { styled, Box } from '@mui/material';

export const StyledBox = styled(Box)({
  fontWeight: 400,
  fontSize: '14px',
  color: '#1B1B1B',
  lineHeight: '30px',
  textAlign: 'justify',
  '& .selectedText .word:first-child, & .selectedText .word:last-child': {
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
});
