import { Stack, Typography } from "@mui/material"
import React from "react"
import AppLogo from "./AppLogo"

interface IProps {

}
export function PageFooter(props: IProps) {
    return (
        <Stack direction={'column'} alignItems={'start'} className={'page-footer'}>
            <Stack direction={'row'} className='full-width' alignItems={'center'}>
                <AppLogo varient={'light'} />
            </Stack>
            <Stack direction={'row'} className='full-width mt-2' alignItems={'center'} justifyContent={'space-between'}>
                <Typography variant="body1" className="">Diegesis.Bible is a project by MVH Solutions that uses the Proskomma Scripture Runtime Engine.</Typography>
                <Typography variant="body1" className="">© MVH Solutions {new Date().getFullYear()}</Typography>
            </Stack>
        </Stack>
    )
}
export default PageFooter