import { Button, Divider, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import { CloseIcon } from '../icons';
import { MdAccountCircle } from 'react-icons/md';
import { withFlexible } from './withFlexible';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from './UIConfigProvider';

export type NavOption = {
  title: string;
  href?: string;
  variant: 'big' | 'bordered' | 'small' | 'custom' | 'category';
  icon?: JSX.Element;
  onClick?: () => void;
  activated?: boolean;
  element?: JSX.Element;
  options?: NavOption[];
};
interface SideNavConfig extends BasicUIConfig {
  contents: {
    closeBtnText: string;
  };
  styles: {
    background: string;
    closeBtnTextColor: string;
    navItemColor: string;
    activeNavItemColor: string;
    closeIconColor: string;
    dividerColor: string;
    dividerHeight: string;
  };
}
export const defaultSideNavConfig: SideNavConfig = {
  componentName: 'SideNav',
  contents: {
    closeBtnText: 'Close',
  },
  styles: {
    background: '#e3e3d9',
    closeBtnTextColor: '#31373A',
    navItemColor: '#1B1B1B',
    activeNavItemColor: '#60D0B2',
    closeIconColor: '#60D0B2',
    dividerColor: '#60D0B2',
    dividerHeight: '2px',
  },
};
export interface SideNavProps extends BasicFlexibleProps<SideNavConfig> {
  open: boolean;
  closeBtnText?: string;
  close: () => void;
  options?: NavOption[];
}

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
  {
    title: 'Admin',
    variant: 'category',
    href: '',
    options: [
      { title: '- UI', href: '/ui-config', variant: 'small' },
      { title: '- Static Pages', href: '/static-pages', variant: 'small' },
      { title: '- Logout', href: '/', variant: 'small' },
    ],
  },
];
export const mockSideNavProps: SideNavProps = {
  id: 'side-nav',
  parentPath: '/',
  options: defaultOptions,
  closeBtnText: 'Close',
  open: false,
  close: function (): void {},
  uiConfig: defaultSideNavConfig,
};

export const SideNav: FlexibleComponent<SideNavProps> = (props) => {
  const { open, close, uiConfig = defaultSideNavConfig, options } = props;
  return (
    <SideNavWrapper open={open} background={uiConfig.styles.background}>
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
          color={uiConfig.styles.closeBtnTextColor ?? 'text.darker-gray'}
          fontSize={'1.25rem'}
          lineHeight={'1.25rem'}
        >
          {uiConfig.contents.closeBtnText}
        </Typography>
        <CloseIcon color={uiConfig.styles.closeIconColor} />
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
        {options?.map((option, oIdx) => {
          switch (option.variant) {
            case 'big':
              return (
                <BigNavButton
                  key={oIdx}
                  href={option.href}
                  variant={'text'}
                  color={'dark'}
                  size={'large'}
                  sx={{
                    fontWeight: option.activated ? '800' : '400',
                    color: option.activated
                      ? uiConfig.styles.activeNavItemColor
                      : uiConfig.styles.navItemColor,
                  }}
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
                  <Divider
                    sx={{
                      width: '100%',
                      border: `${uiConfig.styles.dividerHeight} solid ${uiConfig.styles.dividerColor}`,
                    }}
                  />
                  <MdNavButton
                    key={oIdx}
                    href={option.href}
                    variant={'text'}
                    size={'medium'}
                    color={'dark'}
                    sx={{
                      fontWeight: option.activated ? '800' : '400',
                      color: option.activated
                        ? uiConfig.styles.activeNavItemColor
                        : uiConfig.styles.navItemColor,
                    }}
                    onClick={() => {
                      if (option.onClick) option.onClick();
                    }}
                  >
                    <Stack direction={'row'} alignItems={'center'}>
                      {option.icon}
                      {option.title}
                    </Stack>
                  </MdNavButton>
                  <Divider
                    sx={{
                      width: '100%',
                      border: `${uiConfig.styles.dividerHeight} solid ${uiConfig.styles.dividerColor}`,
                    }}
                  />
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
                  sx={{
                    fontWeight: option.activated ? '800' : '400',
                    color: option.activated
                      ? uiConfig.styles.activeNavItemColor
                      : uiConfig.styles.navItemColor,
                  }}
                  onClick={() => {
                    if (option.onClick) option.onClick();
                  }}
                >
                  {option.title}
                </MdNavButton>
              );
            case 'custom':
              return option.element;
            case 'category':
              return (
                <React.Fragment key={oIdx}>
                  <Divider
                    sx={{
                      width: '100%',
                      border: `${uiConfig.styles.dividerHeight} solid ${uiConfig.styles.dividerColor}`,
                    }}
                  />
                  {option.element ?? (
                    <MdNavButton
                      variant={'text'}
                      size={'small'}
                      sx={{ textAlign: 'left' }}
                      disabled
                    >
                      {option.title}
                    </MdNavButton>
                  )}
                  {option.options?.map((nestedOption) => {
                    return (
                      <MdNavButton
                        key={oIdx}
                        href={nestedOption.href}
                        variant={'text'}
                        color={'dark'}
                        size={'small'}
                        sx={{
                          fontWeight: nestedOption.activated ? '800' : '400',
                          color: nestedOption.activated
                            ? uiConfig.styles.activeNavItemColor
                            : uiConfig.styles.navItemColor,
                          py: 1,
                          fontSize: '1rem',
                        }}
                        onClick={() => {
                          if (nestedOption.onClick) nestedOption.onClick();
                        }}
                      >
                        {nestedOption.title}
                      </MdNavButton>
                    );
                  })}
                  <br />
                  <Divider
                    sx={{
                      width: '100%',
                      border: `${uiConfig.styles.dividerHeight} solid ${uiConfig.styles.dividerColor}`,
                    }}
                  />
                </React.Fragment>
              );
            default:
          }
          return <></>;
        })}
      </Stack>
    </SideNavWrapper>
  );
};

export const FlexibleSideNav = withFlexible<SideNavConfig, SideNavProps>(
  SideNav,
  defaultSideNavConfig,
);

const SideNavWrapper = styled(Stack)<{
  open: boolean;
  background: string;
}>(({ theme, open, background }) => ({
  flexDirection: 'column',
  alignItems: 'start',
  background: background ?? theme.palette.background['light-gray2'],
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
