import { Button, Stack } from '@mui/material';
import React from 'react';
import { AiOutlineDownload, AiOutlineFileText } from 'react-icons/ai';

export type ActionButtonProps = {
  viewBtnText?: string;
  onViewBtnClick?: (e: any) => void;
  downloadBtnText?: string;
  onDownloadBtnClick?: (e: any) => void;
};
export const MOCK_ACTION_BTNS_PROPS: ActionButtonProps = {
  viewBtnText: 'View',
  downloadBtnText: 'Download',
};
export default function ActionButtons(props: ActionButtonProps) {
  return (
    <Stack
      flexDirection={'row'}
      alignItems={'center'}
      width={'100%'}
      sx={(theme) => ({
        [theme.breakpoints.down('sm')]: {
          marginTop: '1rem',
          marginBottom: '1rem',
          justifyContent: 'space-between',
        },
      })}
    >
      <Button
        sx={{
          fontWeight: 700,
          fontSize: '1.3rem',
          textTransform: 'none',
          borderRadius: '2rem',
          padding: '0.8rem',
          width: '47%',
          marginRight: '1rem',
        }}
        startIcon={<AiOutlineFileText />}
        variant={'contained'}
        color={'green'}
        size={'large'}
        onClick={props.onViewBtnClick}
      >
        {props.viewBtnText}
      </Button>
      <Button
        sx={{
          fontWeight: 700,
          fontSize: '1.3rem',
          textTransform: 'none',
          borderRadius: '2rem',
          padding: '0.8rem',
          width: '47%',
        }}
        startIcon={<AiOutlineDownload />}
        variant={'contained'}
        color={'green'}
        size={'large'}
        onClick={props.onDownloadBtnClick}
      >
        {props.downloadBtnText}
      </Button>
    </Stack>
  );
}
