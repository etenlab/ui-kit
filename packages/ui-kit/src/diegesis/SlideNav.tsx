import { Stack } from "@mui/material"
import React from "react"
import { CloseIcon } from "./icons"

interface IProps {

}
export function SideNav(props: IProps) {
    return (
        <Stack direction={'column'} alignItems={'start'} className={''}>
            <Stack direction={'row'} className='full-width' alignItems={'flex-end'}>
                <CloseIcon />
            </Stack>
            <Stack direction={'row'} className='full-width mt-2' alignItems={'center'} justifyContent={'space-between'}>
            </Stack>
        </Stack>
    )
}
export default SideNav