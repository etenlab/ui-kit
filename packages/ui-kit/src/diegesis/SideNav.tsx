import { Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { CloseIcon } from './icons';
import { MdAccountCircle } from 'react-icons/md';


interface INavOption {
  title: string
  href?: string
  variant: 'big' | 'bordered' | 'small'
  icon?: JSX.Element
  onClick?: () => void
}
interface IProps {
  open: boolean;
  close: () => void;
  options?: INavOption[]
}

//#region data
const defaultOptions: INavOption[] = [
  { title: 'Home', variant: 'big', href: '/' },
  { title: 'Entries', variant: 'big', href: '/' },
  { title: 'Technology', variant: 'big', href: '/' },
  { title: 'About', variant: 'big', href: '/' },
  { title: 'Account Settings', variant: 'bordered', href: '/', icon: <MdAccountCircle size={24} className='mr-2' /> },
  { title: 'Terms & conditions', variant: 'small', href: '/' },
  { title: 'Privacy policy', variant: 'small', href: '/' },
]
//#endregion

export function SideNav(props: IProps) {
  const { open, close, options = defaultOptions } = props;
  return (
    <Stack
      direction={'column'}
      alignItems={'start'}
      className={`side-nav-container ${open ? 'show-side-nav' : 'hide-side-nav'}`}
    >
      <Stack
        direction={'row'}
        className="full-width close-btn"
        alignItems={'center'}
        justifyContent={'flex-end'}
        onClick={() => {
          close();
        }}
      >
        <Typography variant={'caption'}>Close</Typography>
        <CloseIcon />
      </Stack>
      <Stack
        direction={'column'}
        className="full-width nav-items-container"
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
      >
        {
          options.map((option, oIdx) => {
            switch (option.variant) {
              case 'big':
                return (
                  <Button
                    key={oIdx}
                    href={option.href}
                    variant={'text'}
                    size={'large'}
                    color={'dark'}
                    className="big-nav-item"
                    onClick={() => {
                      if (option.onClick) option.onClick()
                    }}
                  >
                    {option.title}
                  </Button>
                )
              case 'bordered':
                return (
                  <React.Fragment key={oIdx}>
                    <Divider className="full-width"></Divider>
                    <Button
                      key={oIdx}
                      href={option.href}
                      variant={'text'}
                      size={'medium'}
                      color={'dark'}
                      className="md-nav-item"
                    >
                      <Stack direction={'row'} alignItems={'center'}>
                        {option.icon}
                        {/* <MdAccountCircle size={24} className={'mr-1'} /> */}
                        {option.title}
                      </Stack>
                    </Button>
                    <Divider className="full-width"></Divider>
                  </React.Fragment>
                )
              case 'small':
                return (
                  <Button
                    key={oIdx}
                    href={option.href}
                    variant={'text'}
                    size={'medium'}
                    color={'dark'}
                    className="md-nav-item"
                  >
                    {option.title}
                  </Button>
                )
              default:
            }
            return <></>
          })
        }
      </Stack>
    </Stack>
  );
}
export default SideNav;
