import { Stack, Typography } from "@mui/material"
import React from "react"
import AppLogo from "./AppLogo"
import { MenuIcon } from "./icons"
import './Page.css'

interface IProps {

}
export function PageHeader(props: IProps) {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} className={'page-header'}>
            <Stack direction={'row'} alignItems={'center'}>
                <AppLogo className={'app-logo'} />
                <Typography variant="body1" className="header-title">
                    Open source Bibles resources
                </Typography>
            </Stack>
            <Stack>
                <MenuIcon />
            </Stack>
        </Stack>
    )
}
export default PageHeader