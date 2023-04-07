import { Stack, Typography, styled } from '@mui/material';
import React from 'react';

interface IProps {
  numbers: number;
  category: string;
  description: string;
}
export function StatWithDescription(props: IProps) {
  return (
    <StyledWrapper
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <StatTypo variant={'h1'} className="stat">
        {props.numbers}
      </StatTypo>
      <StatCategoryTypo variant={'h1'}>{props.category}</StatCategoryTypo>
      <StatDescriptionTypo variant={'body1'}>
        {props.description}
      </StatDescriptionTypo>
    </StyledWrapper>
  );
}

//#region styled component
const StyledWrapper = styled(Stack)(({ theme }) => ({
  textAlign: 'center',
  borderTop: `1px solid`,
  borderBottom: '1px solid',
  borderColor: theme.palette.text['turquoise-light'],
  padding: '1.25rem 2.5rem',
  alignSelf: 'stretch',
  flex: 1,
  [theme.breakpoints.down('sm')]: {
    padding: '1rem 1.5rem',
    alignSelf: 'stretch',
    flex: 1,
  },
}));
const StatTypo = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(84),
  lineHeight: theme.typography.pxToRem(84),
  padding: 0,
  margin: 0,
  color: theme.palette.text['turquoise-light'],
  fontFamily: 'helvetica',
}));
const StatCategoryTypo = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  lineHeight: '28px',
  padding: 0,
  margin: '12px 0px',
  fontFamily: 'helvetica',
}));
const StatDescriptionTypo = styled(Typography)(({ theme }) => ({
  padding: 0,
  margin: 0,
  color: theme.palette.text['lighter-gray'],
  fontSize: '18px',
  fontFamily: 'helvetica',
  [theme.breakpoints.down('sm')]: {
    padding: '15px 25px',
    alignSelf: 'stretch',
    flex: 1,
  },
}));
//#endregion

export default StatWithDescription;
