import { Stack, Typography } from "@mui/material";
import React from "react";
import './Home.css';

interface IProps {
    numbers: number,
    category: string,
    description: string
}
export function StatWithDescription(props: IProps) {
    return (
        <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} className={'StatWithDescription'}>
            <Typography variant={'h1'} className='stat'>{props.numbers}</Typography>
            <Typography variant={'h1'} className='stat-category'>{props.category}</Typography>
            <Typography variant={'body1'} className='stat-description'>{props.description}</Typography>
        </Stack>
    )
}
export default StatWithDescription