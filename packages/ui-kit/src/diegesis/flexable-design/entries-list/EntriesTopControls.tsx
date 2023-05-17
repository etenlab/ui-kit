import { Box, Chip, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { SearchBox, SearchBoxProps } from '../../SearchBox';
import { CustomTab, CustomTabs } from '../../Tab';
import { SelectControl, SelectControlProps } from '../../SelectControl';
import { PageTitleTypo } from '../../styleds/PageTitleTypo';
import { BasicFlexibleProps, BasicUIConfig } from '../UIConfigProvider';
import { withFlexible } from '../withFlexible';

export type TagConfigProps = {
  label?: string;
  tags?: string[];
  selectedTags?: string[];
  onTagSelect?: (idx: number) => void;
};
export type EntriesTopControlsConfig = BasicUIConfig & {
  contents: {
    titleText?: string;
    filterTabLabel?: string;
    tagFilterLabel?: string;
    searchPlaceholder?: string;
  };
  styles: {};
};
export const defaultEntriesTopControlsConfig: EntriesTopControlsConfig = {
  componentName: EntriesTopControls.name,
  contents: {
    titleText: 'Entries',
    filterTabLabel: 'Advanced search with filters',
    tagFilterLabel: 'Tag:',
  },
  styles: {},
};
export type EntriesTopControlsProps =
  BasicFlexibleProps<EntriesTopControlsConfig> & {
    searchBoxProps?: SearchBoxProps;
    tagConfig?: TagConfigProps;
    selectControls?: SelectControlProps[];
  };
export const MOCK_ENTRIES_TOP_CONTROLS_PROPS: Partial<EntriesTopControlsProps> =
  {
    searchBoxProps: {
      placeholder: 'Bible in Basic English',
    },
    tagConfig: {
      label: 'Tags',
      tags: ['Heading', 'Footnotes', 'Intro', 'Heading', 'Strong'],
      selectedTags: ['Intro'],
      onTagSelect(_idx: number) {},
    },
    selectControls: [
      { label: 'Organisations', onChange(_value) {}, options: [], value: '' },
      { label: 'Owner', onChange(_value) {}, options: [], value: '' },
      { label: 'Type', onChange(_value) {}, options: [], value: '' },
      { label: 'Language', onChange(_value) {}, options: [], value: '' },
    ],
  };

export function EntriesTopControls(props: EntriesTopControlsProps) {
  const { uiConfig = defaultEntriesTopControlsConfig } = props;
  const [curTab, setCurTab] = useState(0);
  return (
    <Stack direction={'column'} alignItems={'flex-start'}>
      <Stack direction={'row'} alignItems={'center'} width={'100%'}>
        <PageTitleTypo variant={'h1'} marginRight={'1rem'}>
          {uiConfig.contents?.titleText}
        </PageTitleTypo>
        <StyledDeviceSpecific showOnSmallDevice={false}>
          <SearchBox {...props.searchBoxProps} />
        </StyledDeviceSpecific>
        <CustomTabs
          value={curTab}
          onClick={() => {
            setCurTab(curTab === 1 ? 0 : 1);
          }}
        >
          <CustomTab
            value={1}
            label={uiConfig.contents?.filterTabLabel || ''}
          />
        </CustomTabs>
      </Stack>
      <StyledTabContent show={curTab === 1 ? true : false}>
        <Stack
          flexDirection="row"
          alignItems={'center'}
          alignSelf={'stretch'}
          justifyContent={'space-between'}
          gap={2}
          sx={(theme) => ({
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
            },
          })}
        >
          {props.selectControls?.map((control, idx) => (
            <SelectControl
              key={idx}
              label={control.label}
              value={control.value}
              options={control.options}
              onChange={control.onChange}
            />
          ))}
        </Stack>
        <Stack
          flexDirection={'row'}
          alignItems={'center'}
          marginTop={'0.2rem'}
          flexWrap={'wrap'}
        >
          <Typography
            variant={'caption'}
            color={'text.gray'}
            marginRight={'0.8rem'}
            marginTop={'0.5rem'}
          >
            {uiConfig.contents?.tagFilterLabel}
          </Typography>
          {props.tagConfig?.tags?.map((tag, idx) => (
            <StyledChip
              key={idx}
              label={tag}
              sx={(theme) => ({
                backgroundColor: props.tagConfig?.selectedTags?.includes(tag)
                  ? theme.palette.background['turquoise-light']
                  : theme.palette.background.white,
              })}
              onClick={() => {
                if (props.tagConfig?.onTagSelect)
                  props.tagConfig?.onTagSelect(idx);
              }}
            />
          ))}
        </Stack>
      </StyledTabContent>
      <StyledDeviceSpecific showOnSmallDevice={true}>
        <SearchBox {...props.searchBoxProps} />
      </StyledDeviceSpecific>
    </Stack>
  );
}

export const FlexibleEntriesTopControls = withFlexible<
  EntriesTopControlsConfig,
  EntriesTopControlsProps
>(EntriesTopControls, defaultEntriesTopControlsConfig);

//#region styled components
const StyledDeviceSpecific = styled<any>(Box)(
  ({ theme, showOnSmallDevice }) => ({
    display: showOnSmallDevice ? 'none' : 'inherit',
    [theme.breakpoints.down('sm')]: {
      display: showOnSmallDevice ? 'inherit' : 'none',
      width: '100%',
    },
  }),
);
const StyledTabContent = styled<any>(Stack)(({ theme, show }) => ({
  display: show ? 'flex' : 'none',
  transition: 'all 0.2s ease-in',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  backgroundColor: theme.palette.background['light-gray'],
  padding: '20px 25px',
  width: '100%',
}));
const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background['white'],
  borderRadius: '5px',
  marginRight: '8px',
  marginTop: '8px',
  fontSize: '14px',
  fontWeight: 600,
}));
//#endregion