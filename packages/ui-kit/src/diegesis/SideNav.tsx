import { Button, Divider, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import { CloseIcon } from './icons';
import { MdAccountCircle } from 'react-icons/md';

export type NavOption = {
  title: string;
  href?: string;
  variant: 'big' | 'bordered' | 'small';
  icon?: JSX.Element;
  onClick?: () => void;
};
export type SideNavProps = {
  open: boolean;
  closeBtnText?: string;
  close: () => void;
  options?: NavOption[];
};

//#region data
const defaultOptions: NavOption[] = [
  { title: 'Home', variant: 'big', href: '/' },
  { title: 'Entries', variant: 'big', href: '/' },
  { title: 'Technology', variant: 'big', href: '/' },
  { title: 'About', variant: 'big', href: '/' },
  {
    title: 'Account Settings',
    variant: 'small',
    href: '/',
    icon: <MdAccountCircle size={24} className="mr-2" />,
  },
  { title: 'Terms & conditions', variant: 'small', href: '/' },
  { title: 'Privacy policy', variant: 'small', href: '/' },
];
export const MOCK_SIDE_NAV_PROPS: Partial<SideNavProps> = {
  options: defaultOptions,
  closeBtnText: 'Close',
};
//#endregion

export function SideNav(props: SideNavProps) {
  const { open, close } = props;
  return (
    <SideNavWrapper open={open}>
      <Stack
        direction={'row'}
        width={'100%'}
        alignItems={'center'}
        justifyContent={'flex-end'}
        onClick={() => {
          close();
        }}
      >
        <Typography
          variant={'caption'}
          color={'text.darker-gray'}
          fontSize={'1.25rem'}
          lineHeight={'1.25rem'}
        >
          {props.closeBtnText}
        </Typography>
        <CloseIcon />
      </Stack>
      <Stack
        direction={'column'}
        width={'100%'}
        height={'100%'}
        marginTop={'3.1rem'}
        overflow={'hidden auto'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
      >
        {props.options?.map((option, oIdx) => {
          switch (option.variant) {
            case 'big':
              return (
                <BigNavButton
                  key={oIdx}
                  href={option.href}
                  variant={'text'}
                  color={'dark'}
                  size={'large'}
                  onClick={() => {
                    if (option.onClick) option.onClick();
                  }}
                >
                  {option.title}
                </BigNavButton>
              );
            case 'bordered':
              return (
                <React.Fragment key={oIdx}>
                  <Divider className="full-width"></Divider>
                  <MdNavButton
                    key={oIdx}
                    href={option.href}
                    variant={'text'}
                    size={'medium'}
                    color={'dark'}
                  >
                    <Stack direction={'row'} alignItems={'center'}>
                      {option.icon}
                      {option.title}
                    </Stack>
                  </MdNavButton>
                  <Divider className="full-width"></Divider>
                </React.Fragment>
              );
            case 'small':
              return (
                <MdNavButton
                  key={oIdx}
                  href={option.href}
                  variant={'text'}
                  color={'dark'}
                  size={'medium'}
                >
                  {option.title}
                </MdNavButton>
              );
            default:
          }
          return <></>;
        })}
      </Stack>
    </SideNavWrapper>
  );
}

//#region styled components
const SideNavWrapper = styled<any>(Stack)(({ theme, open }) => ({
  flexDirection: 'column',
  alignItems: 'start',
  background: theme.palette.background['light-gray2'],
  height: '100vh',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  padding: open ? '3rem' : '0rem',
  paddingTop: open ? '1.7rem' : '0rem',
  paddingRight: open ? '1.7rem' : '0rem',
  zIndex: 10,
  width: open ? '348px' : '0px',
  transition: '0.5s',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: open ? '1.2rem' : '0rem',
    width: open ? '100%' : '0rem',
  },
}));
const BigNavButton = styled(Button)(() => ({
  textTransform: 'none',
  fontSize: '3rem',
  lineHeight: '4.4rem',
  fontWeight: 400,
  padding: '0px',
  width: '100%',
  display: 'block',
  size: 'large',
}));
const MdNavButton = styled(Button)(() => ({
  textTransform: 'none',
  fontSize: '1.25rem',
  lineHeight: '1.25rem',
  fontWeight: 400,
  padding: '1rem 0px',
  width: '100%',
  display: 'block',
  size: 'medium',
}));
//#endregion

export default SideNav;
