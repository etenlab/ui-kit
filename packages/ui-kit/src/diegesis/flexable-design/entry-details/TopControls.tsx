import { Stack } from '@mui/material';
import React from 'react';
import {
  ActionButtonProps,
  FlexibleActionButtons,
  mockActionButtonsProps,
} from './ActionButtons';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from '../UIConfigProvider';
import { PageTitleTypo } from '../../styleds/PageTitleTypo';
import { BackBtnProps, FlexibleBackButton } from '../BackButton';
import { withFlexible } from '../withFlexible';

export type EntryDetailTopControlConfig = BasicUIConfig & {
  contents: {
    title?: string;
  };
  styles: {};
};
export type EntryDetailTopControlProps =
  BasicFlexibleProps<EntryDetailTopControlConfig> & {
    title?: string;
    actionButtonProps?: ActionButtonProps;
    backBtnProps?: BackBtnProps;
  };

//#region data
export const defaultTopControlConfig: EntryDetailTopControlConfig = {
  componentName: 'TopControls',
  contents: {
    title: 'Bible in Basic English',
  },
  styles: {},
};
export const mockTopControlsProps: EntryDetailTopControlProps = {
  id: 'top-controls',
  parentPath: '/',
  title: 'Bible in Basic English',
  actionButtonProps: mockActionButtonsProps,
  uiConfig: defaultTopControlConfig
};
//#endregion

export const TopControls: FlexibleComponent<EntryDetailTopControlProps> = ({
  uiConfig = defaultTopControlConfig,
  title,
  actionButtonProps,
  backBtnProps,
}) => {
  return (
    <Stack
      flexDirection={'column'}
      alignItems={'flex-start'}
      justifyContent={'center'}
    >
      <FlexibleBackButton
        {...backBtnProps}
        id="back-button"
        parentPath={uiConfig.configPath!}
      />
      <Stack
        flexDirection={'row'}
        marginTop={'0.8rem'}
        width={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}
        sx={(theme) => ({
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            '.MuiButton-containedGreen': {
              fontSize: '1rem',
              width: '47% !important',
            },
          },
        })}
      >
        <PageTitleTypo variant="h1" marginRight={'0.5rem'} flex={2}>
          {title || uiConfig.contents.title}
        </PageTitleTypo>
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
            id="action-buttons"
            parentPath={uiConfig.configPath!}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
TopControls.componentName = defaultTopControlConfig.componentName;

export const FlexibleTopControls = withFlexible<
  EntryDetailTopControlConfig,
  EntryDetailTopControlProps
>(TopControls, defaultTopControlConfig);
