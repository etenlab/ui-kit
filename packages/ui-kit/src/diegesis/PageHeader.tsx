import { Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import AppLogo from './AppLogo';
import { MenuIcon } from './icons';
import './Page.css';

interface IProps {
    openSideNav?: () => void
    title?: string
}
export function PageHeader(props: IProps) {
    const { openSideNav, title = 'Open source Bibles resources' } = props
    return (
        <Container className={'page-header'}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Stack direction={'row'} alignItems={'center'}>
                    <AppLogo className={'app-logo'} />
                    <Typography variant="body1" className="header-title">
                        {title}
                    </Typography>
                </Stack>
                {
                    openSideNav
                        ?
                        <Stack className="nav-btn">
                            <MenuIcon onClick={() => { openSideNav() }} />
                        </Stack> : <></>
                }
            </Stack>
        </Container>
    )
}
export default PageHeader;
