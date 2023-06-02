import { Tab, Tabs, styled } from '@mui/material';
import React from 'react';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onClick: (event: React.SyntheticEvent) => void;
  onChange?: (event: React.SyntheticEvent, newValue: number) => void;
  className?: string;
}

export const CustomTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} />
))(({ theme }) => ({
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
    backgroundColor: theme.palette.background['turquoise-light'],
    margin: '0px 1rem',
    height: '1px',
  },
}));

interface StyledTabProps {
  label: string;
  value: number;
}

export const CustomTab = styled((props: StyledTabProps) => (
  <Tab {...props} wrapped={true} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: '1.25rem',
  textDecoration: 'underline',
  textUnderlineOffset: '0.5rem',
  textDecorationColor: theme.palette.text['turquoise-light'],
  padding: '1rem',
  paddingBottom: '2rem',
  color: theme.palette.text.dark,
  '&.Mui-selected': {
    backgroundColor: theme.palette.background['light-gray'],
    color: theme.palette.text.dark,
  },
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));
