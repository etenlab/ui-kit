import { Button, Stack } from '@mui/material';
import React from 'react';
import { AiOutlineDownload, AiOutlineFileText } from 'react-icons/ai';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from '../UIConfigProvider';
import { withFlexible } from '../withFlexible';

type ActionButtonConfig = BasicUIConfig & {
  contents: {
    downloadBtnText?: string;
    viewBtnText?: string;
  };
  styles: {
    fontWeight: string;
    fontSize: string;
    textTransform: string;
    borderRadius: string;
    padding: string;
    width: string;
    textColor: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
  };
};
export type ActionButtonProps = BasicFlexibleProps<ActionButtonConfig> & {
  onViewBtnClick?: (e: any) => void;
  onDownloadBtnClick?: (e: any) => void;
  downloadBtnHref?: string;
  viewBtnHref?: string;
};

export const defaultActionButtonsConfig: ActionButtonConfig = {
  componentName: 'ActionButtons',
  contents: {
    viewBtnText: 'View',
    downloadBtnText: 'Download',
  },
  styles: {
    fontWeight: '700',
    fontSize: '1.3rem',
    textTransform: 'none',
    borderRadius: '2rem',
    padding: '0.8rem',
    width: '47%',
    textColor: '#1B1B1B',
    backgroundColor: '#60D0B2',
    hoverBackgroundColor: '#4EAA91',
  },
};
export const mockActionButtonsProps: ActionButtonProps = {
  id: 'action-buttons',
  parentPath: '/',
  uiConfig: defaultActionButtonsConfig,
};

export const ActionButtons: FlexibleComponent<ActionButtonProps> = ({
  uiConfig = defaultActionButtonsConfig,
  onViewBtnClick,
  onDownloadBtnClick,
  viewBtnHref,
  downloadBtnHref,
}) => {
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
          color: uiConfig.styles.textColor,
          backgroundColor: uiConfig.styles.backgroundColor,
          '&:hover, &.Mui-focusVisible': {
            backgroundColor: uiConfig.styles.hoverBackgroundColor,
          },
        }}
        startIcon={<AiOutlineFileText />}
        variant={'contained'}
        size={'large'}
        href={viewBtnHref}
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
          color: uiConfig.styles.textColor,
          backgroundColor: uiConfig.styles.backgroundColor,
          '&:hover, &.Mui-focusVisible': {
            backgroundColor: uiConfig.styles.hoverBackgroundColor,
          },
        }}
        href={downloadBtnHref}
        startIcon={<AiOutlineDownload />}
        variant={'contained'}
        size={'large'}
        onClick={onDownloadBtnClick}
      >
        {uiConfig.contents.downloadBtnText}
      </Button>
    </Stack>
  );
};
ActionButtons.componentName = defaultActionButtonsConfig.componentName;

export const FlexibleActionButtons = withFlexible<
  ActionButtonConfig,
  ActionButtonProps
>(ActionButtons, defaultActionButtonsConfig);
