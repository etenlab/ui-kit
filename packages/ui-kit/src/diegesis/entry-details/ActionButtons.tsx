import { Button, Stack } from "@mui/material";
import React from "react";
import { AiOutlineDownload, AiOutlineFileText } from "react-icons/ai";

type Props = {}
export default function ActionButtons(_props: Props) {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} className="full-width action-buttons">
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
    )
}