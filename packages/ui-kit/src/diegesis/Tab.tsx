import { Tab, Tabs, styled } from '@mui/material';
import React from 'react';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onClick: (event: React.SyntheticEvent) => void;
  onChange?: (event: React.SyntheticEvent, newValue: number) => void;
  className?: string;
  getColor: (color: string) => string;
}

export const CustomTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} />
))(({ theme, getColor }) => ({
  '& .MuiTabs-flexContainer': {
    padding: '0px 1rem',
  },
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    top: '70%',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: getColor('turquoise-light'),
    margin: '0px 1rem',
    height: '1px',
  },
}));

interface StyledTabProps {
  label: string;
  value: number;
  getColor: (color: string) => string;
}

export const CustomTab = styled((props: StyledTabProps) => (
  <Tab {...props} wrapped={true} />
))(({ theme, getColor }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(20),
  textDecoration: 'underline',
  textUnderlineOffset: '0.5rem',
  textDecorationColor: getColor('turquoise-light'),
  padding: '1rem',
  paddingBottom: '2rem',
  color: getColor('dark'),
  '&.Mui-selected': {
    backgroundColor: getColor('light-gray'),
    color: getColor('dark'),
  },
}));
