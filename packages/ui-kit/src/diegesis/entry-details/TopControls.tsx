import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { AiOutlineDownload, AiOutlineFileText } from "react-icons/ai";
import { BackButton } from "../BackButton";

export default function TopControls() {
    return (
        <Stack direction={'column'} alignItems={'flex-start'} justifyContent={'center'}>
            <BackButton />
            <Stack direction={'row'} className="mt-1 full-width" alignItems={'center'} justifyContent={'space-between'}>
                <Typography variant={'h1'} className="page-title mr-2">
                    Bible in Basic English
                </Typography>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'}>
                    <Button
                        sx={{ fontWeight: 700, fontSize: '1.3rem', textTransform: 'none', borderRadius: '2rem', padding: '0.8rem', minWidth: '12rem', marginRight: '1rem' }}
                        startIcon={<AiOutlineFileText />}
                        variant={'contained'}
                        color={'green'}
                        size={'large'}
                    >
                        View
                    </Button>
                    <Button
                        sx={{ fontWeight: 700, fontSize: '1.3rem', textTransform: 'none', borderRadius: '2rem', padding: '0.8rem', minWidth: '12rem' }}
                        startIcon={<AiOutlineDownload />}
                        variant={'contained'}
                        color={'green'}
                        size={'large'}
                    >
                        Download
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}