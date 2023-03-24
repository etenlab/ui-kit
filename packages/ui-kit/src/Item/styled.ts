import { styled, Box, SvgIcon } from '@mui/material';

interface ItemBoxProps {
  success?: boolean;
  warning?: boolean;
  onClick?: () => void;
  showRelation?: boolean;
}

export const ItemBox = styled(Box)<ItemBoxProps>(
  ({ success, warning, onClick, showRelation }) => ({
    border: success
      ? '2px solid rgba(45, 211, 111, 0.5)'
      : warning
      ? '2px solid rgba(255, 196, 9, 0.5)'
      : '2px solid #f5f6f9',
    marginTop: '10px',
    marginLeft: showRelation ? '50px' : '0',
    position: 'relative',
    padding: '15px',
    '&:hover, &:active': onClick
      ? {
          cursor: 'pointer',
          backgroundColor: 'rgba(152, 154, 162, 0.05)',
        }
      : {},
  }),
);

export const ArrowSvg = styled(SvgIcon)({
  position: 'absolute',
  top: '-12px',
  left: '-50px',
  height: '50px',
  width: '50px',
});

export const PropertyKeyBlockBox = styled(Box)({
  padding: '6px 10px',
  border: '2px solid rgba(66, 140, 255, 0.6)',
  borderRadius: '10px',
  '& + &': {
    marginTop: '5px',
  },
});
