import { Button, Stack } from '@mui/material';
import React from 'react';
import { AiOutlineDownload, AiOutlineFileText } from 'react-icons/ai';
import { BasicFlexibleProps, BasicUIConfig } from '../UIConfigProvider';
import { withFlexible } from '../withFlexible';

type ActionButtonConfig = BasicUIConfig & {
  contents: {
    viewBtnText?: string;
    viewBtnHref?: string;
    downloadBtnText?: string;
    downloadBtnHref?: string;
  };
  styles: {
    fontWeight: string;
    fontSize: string;
    textTransform: string;
    borderRadius: string;
    padding: string;
    width: string;
    color: string;
  };
};
export type ActionButtonProps = BasicFlexibleProps<ActionButtonConfig> & {
  onViewBtnClick?: (e: any) => void;
  onDownloadBtnClick?: (e: any) => void;
};
export const defaultActionButtonsConfig: ActionButtonConfig = {
  componentName: ActionButtons.name,
  contents: {
    viewBtnText: 'View',
    viewBtnHref: '/',
    downloadBtnText: 'Download',
    downloadBtnHref: '/',
  },
  styles: {
    fontWeight: '700',
    fontSize: '1.3rem',
    textTransform: 'none',
    borderRadius: '2rem',
    padding: '0.8rem',
    width: '47%',
    color: '#1B1B1B',
    bgColor: '#60D0B2',
  },
};
export function ActionButtons({
  uiConfig = defaultActionButtonsConfig,
  onViewBtnClick,
  onDownloadBtnClick,
}: ActionButtonProps) {
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
          marginRight: '1rem',
          fontWeight: uiConfig.styles.fontWeight,
          fontSize: uiConfig.styles.fontSize,
          textTransform: uiConfig.styles.textTransform,
          borderRadius: uiConfig.styles.borderRadius,
          padding: uiConfig.styles.padding,
          width: uiConfig.styles.width,
        }}
        startIcon={<AiOutlineFileText />}
        variant={'contained'}
        color={'green'}
        size={'large'}
        href={uiConfig.contents.viewBtnHref}
        onClick={onViewBtnClick}
      >
        {uiConfig.contents.viewBtnText}
      </Button>
      <Button
        sx={{
          fontWeight: uiConfig.styles.fontWeight,
          fontSize: uiConfig.styles.fontSize,
          textTransform: uiConfig.styles.textTransform,
          borderRadius: uiConfig.styles.borderRadius,
          padding: uiConfig.styles.padding,
          width: uiConfig.styles.width,
        }}
        href={uiConfig.contents.downloadBtnHref}
        startIcon={<AiOutlineDownload />}
        variant={'contained'}
        color={'green'}
        size={'large'}
        onClick={onDownloadBtnClick}
      >
        {uiConfig.contents.downloadBtnText}
      </Button>
    </Stack>
  );
}
export const FlexibleActionButtons = withFlexible<
  ActionButtonConfig,
  ActionButtonProps
>(ActionButtons, defaultActionButtonsConfig);
