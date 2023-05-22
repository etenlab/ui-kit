import { Stack } from '@mui/material';
import React from 'react';
import { ActionButtonProps, FlexibleActionButtons } from './ActionButtons';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from '../UIConfigProvider';
import { withFlexible } from '../withFlexible';

export type BottomActionButtonsConfig = BasicUIConfig & {
  contents: {};
  styles: {};
};
export const defaultBottomActionButtonConfig: BottomActionButtonsConfig = {
  componentName: 'BottomActionButtons',
  contents: {},
  styles: {},
};
export type BottomActionButtonsProps =
  BasicFlexibleProps<BottomActionButtonsConfig> & {
    actionButtonProps?: ActionButtonProps;
  };
export const BottomActionButtons: FlexibleComponent<
  BottomActionButtonsProps
> = ({ uiConfig = defaultBottomActionButtonConfig, actionButtonProps }) => {
  return (
    <Stack
      flexDirection={'row'}
      width={'100%'}
      alignItems={'center'}
      justifyContent={'flex-end'}
      sx={(theme) => ({
        marginTop: '50px',
        marginBottom: '50px',
        [theme.breakpoints.down('sm')]: {
          marginTop: '20px',
          marginBottom: '20px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          '.MuiButton-containedGreen': {
            fontSize: '1rem',
            width: '47% !important',
          },
        },
      })}
    >
      <Stack flex={2}></Stack>
      <Stack
        flex={1}
        sx={(theme) => ({
          [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
        })}
      >
        <FlexibleActionButtons
          {...actionButtonProps}
          id="bottom-action-buttons"
          parentPath={uiConfig.configPath!}
        />
      </Stack>
    </Stack>
  );
};
BottomActionButtons.componentName =
  defaultBottomActionButtonConfig.componentName;

export const FlexibleBottomActionButtons = withFlexible<
  BottomActionButtonsConfig,
  BottomActionButtonsProps
>(BottomActionButtons, defaultBottomActionButtonConfig);
