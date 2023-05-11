import { Stack } from '@mui/material';
import React from 'react';
import { ActionButtonProps, FlexibleActionButtons } from './ActionButtons';
import { BasicFlexibleProps, BasicUIConfig } from '../UIConfigProvider';
import { PageTitleTypo } from '../../styleds/PageTitleTypo';
import { FlexibleBackButton } from '../BackButton';
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
  };
export const defaultTopControlConfig: EntryDetailTopControlConfig = {
  componentName: TopControls.name,
  contents: {
    title: 'Bible in Basic English',
  },
  styles: {},
};
export function TopControls({
  uiConfig = defaultTopControlConfig,
  actionButtonProps,
  title,
}: EntryDetailTopControlProps) {
  return (
    <Stack
      flexDirection={'column'}
      alignItems={'flex-start'}
      justifyContent={'center'}
    >
      <FlexibleBackButton
        id="top-controls-back-button"
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
            id="entry-detail-top-control-action-buttons"
            parentPath={uiConfig.configPath!}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
export const FlexibleTopControls = withFlexible<
  EntryDetailTopControlConfig,
  EntryDetailTopControlProps
>(TopControls, defaultTopControlConfig);
