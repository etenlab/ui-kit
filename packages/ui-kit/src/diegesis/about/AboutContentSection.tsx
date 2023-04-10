import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import React from 'react';
import { BsDot } from 'react-icons/bs';

interface IProps {
  className?: string;
  title?: string;
  description?: string;
  points?: string[];
}
export function AboutContentSection(props: IProps) {
  const { title, description, points = [] } = props;
  return (
    <Container>
      <Typography
        variant={'h2'}
        fontFamily={'Noto Serif Display'}
        color={'text.darker-gray'}
        lineHeight={'30px'}
        fontWeight={700}
      >
        {title}
      </Typography>
      <Typography
        variant={'body1'}
        fontFamily={'Noto Serif Display'}
        color={'text.darker-gray'}
        marginTop="10px"
        fontSize="20px"
        lineHeight="30px"
        fontWeight="normal"
      >
        {description}
      </Typography>
      {points.length > 0 ? (
        <StyledList>
          {points.map((point, idx) => (
            <ListItem key={idx} disablePadding={true} dense={false}>
              <ListItemIcon>
                <BsDot size={34} color={'#60D0B2'} />
              </ListItemIcon>
              <ListItemText primary={point} />
            </ListItem>
          ))}
        </StyledList>
      ) : (
        <></>
      )}
    </Container>
  );
}

const StyledList = styled(List)(({ theme }) => ({
  marginTop: '25px',
  marginBottom: '25px',
  fontSize: '20px',
  '.MuiList-root .MuiListItemIcon-root': {
    minWidth: 'auto',
  },
  '.MuiList-root .MuiTypography-body1': {
    marginTop: '0px',
  },
  '.MuiList-root .MuiListItem-root': {
    borderTop: `1px solid ${theme.palette.background['light-gray2']}`,
  },
}));
export default AboutContentSection;
