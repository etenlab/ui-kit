import { Container, Typography, styled } from '@mui/material';
import React from 'react';

interface IProps {
  className?: string;
  caption?: string;
  imageUrl?: string;
}
export function AboutPictureSection(props: IProps) {
  const { caption, imageUrl } = props;
  return (
    <StyledCompWrapper className={`about-picture-section ${props.className}`}>
      <StyledInnerContainer className="inner-container">
        <Typography variant={'h2'} color={'text.darker-gray'}>
          {caption}
        </Typography>
        <StyledImgBox
          style={{ backgroundImage: `url(${imageUrl || ''})` }}
        ></StyledImgBox>
      </StyledInnerContainer>
    </StyledCompWrapper>
  );
}

const StyledCompWrapper = styled(Container)(({ theme }) => ({
  marginTop: '60px',
  marginBottom: '120px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '40px',
    marginBottom: '80px',
  },
}));
const StyledInnerContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background['light-gray'],
  height: '409px',
  width: '788px',
  position: 'relative',
  margin: 'auto',
  padding: '25px',
  color: theme.palette.text['darker-gray'],
  [theme.breakpoints.down('sm')]: {
    height: '173px',
    width: '100%',
    padding: '10px',
  },
}));
const StyledImgBox = styled('div')(({ theme }) => ({
  height: '409px',
  width: '586px',
  backgroundColor: theme.palette.background['darker-gray'],
  margin: 'auto',
  marginTop: '5%',
  [theme.breakpoints.down('sm')]: {
    height: '176px',
    width: '90%',
    marginTop: '5%',
  },
}));

export default AboutPictureSection;
