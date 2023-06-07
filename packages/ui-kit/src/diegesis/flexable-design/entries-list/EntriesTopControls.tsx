import { Box, Chip, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { CustomTab, CustomTabs } from '../../Tab';
import { PageTitleTypo } from '../../styleds/PageTitleTypo';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from '../UIConfigProvider';
import { withFlexible } from '../withFlexible';
import { FlexibleSearchBox, SearchBoxProps } from '../SearchBox';
import { FlexibleSelectControl, SelectControlProps } from '../SelectControl';

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
  styles: {
    titleColor: string;
    titleFontFamily: string;
    filterTabTextDecorationColor: string;
    filterTabActiveBackgroundColor: string;
    filterTabActiveTextColor: string;
    filterTabTextColor: string;
    tagFilterLabelColor: string;
    tagColor: string;
    tagBackgroundColor: string;
    tagActiveColor: string;
    tagActiveBackgroundColor: string;
  };
};
export const defaultEntriesTopControlsConfig: EntriesTopControlsConfig = {
  componentName: 'EntriesTopControls',
  contents: {
    titleText: 'Entries',
    filterTabLabel: 'Advanced search with filters',
    tagFilterLabel: 'Tag:',
  },
  styles: {
    titleColor: '#31373A',
    titleFontFamily: 'Noto Serif Display',
    filterTabTextDecorationColor: '#60D0B2',
    filterTabActiveBackgroundColor: '#F0F0E7',
    filterTabActiveTextColor: '#1B1B1B',
    filterTabTextColor: '#1B1B1B',
    tagFilterLabelColor: '#5C6673',
    tagColor: '#1B1B1B',
    tagBackgroundColor: '#FFFFFF',
    tagActiveColor: '#1B1B1B',
    tagActiveBackgroundColor: '#60D0B2',
  },
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
      id: 'entries-top-controls-search-box',
      parentPath: '/',
      placeholder: 'Bible in Basic English',
    },
    tagConfig: {
      label: 'Tags',
      tags: ['Heading', 'Footnotes', 'Intro', 'Heading', 'Strong'],
      selectedTags: ['Intro'],
      onTagSelect(_idx: number) {},
    },
    selectControls: [
      {
        label: 'Organisations',
        onChange(_value) {},
        options: [],
        value: '',
        id: 'entries-top-controls-select-0',
        parentPath: '/',
      },
      {
        label: 'Owner',
        onChange(_value) {},
        options: [],
        value: '',
        id: 'entries-top-controls-select-1',
        parentPath: '/',
      },
      {
        label: 'Type',
        onChange(_value) {},
        options: [],
        value: '',
        id: 'entries-top-controls-select-2',
        parentPath: '/',
      },
      {
        label: 'Language',
        onChange(_value) {},
        options: [],
        value: '',
        id: 'entries-top-controls-select-3',
        parentPath: '/',
      },
    ],
  };

export const EntriesTopControls: FlexibleComponent<EntriesTopControlsProps> = (
  props,
) => {
  const { uiConfig = defaultEntriesTopControlsConfig } = props;
  const [curTab, setCurTab] = useState(0);
  return (
    <Stack direction={'column'} alignItems={'flex-start'}>
      <Stack direction={'row'} alignItems={'center'} width={'100%'}>
        <PageTitleTypo
          variant={'h1'}
          marginRight={'1rem'}
          sx={{
            color: uiConfig.styles.titleColor,
            fontFamily: uiConfig.styles.titleFontFamily,
          }}
        >
          {uiConfig.contents?.titleText}
        </PageTitleTypo>
        <StyledDeviceSpecific showOnSmallDevice={false}>
          <FlexibleSearchBox
            id="search-box"
            parentPath={uiConfig.configPath!}
            {...props.searchBoxProps}
          />
        </StyledDeviceSpecific>
        <CustomTabs
          value={curTab}
          onClick={() => {
            setCurTab(curTab === 1 ? 0 : 1);
          }}
        >
          <CustomTab
            value={1}
            label={uiConfig.contents.filterTabLabel!}
            sx={{
              textDecorationColor: uiConfig.styles.filterTabTextDecorationColor,
              color: uiConfig.styles.filterTabTextColor,
              '&.Mui-selected': {
                backgroundColor: uiConfig.styles.filterTabActiveBackgroundColor,
                color: uiConfig.styles.filterTabActiveTextColor,
              },
            }}
          />
        </CustomTabs>
      </Stack>
      <StyledTabContent
        show={curTab === 1 ? true : false}
        sx={{ background: uiConfig.styles.filterTabActiveBackgroundColor }}
      >
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
            <FlexibleSelectControl
              id={`select-control-${idx}`}
              parentPath={uiConfig.configPath!}
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
            color={uiConfig.styles.tagFilterLabelColor}
            marginRight={'0.8rem'}
            marginTop={'0.5rem'}
          >
            {uiConfig.contents?.tagFilterLabel}
          </Typography>
          {props.tagConfig?.tags?.map((tag, idx) => (
            <StyledChip
              key={idx}
              label={tag}
              sx={() => ({
                color: props.tagConfig?.selectedTags?.includes(tag)
                  ? uiConfig.styles.tagActiveColor
                  : uiConfig.styles.tagColor,
                backgroundColor: props.tagConfig?.selectedTags?.includes(tag)
                  ? uiConfig.styles.tagActiveBackgroundColor
                  : uiConfig.styles.tagBackgroundColor,
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
        <FlexibleSearchBox
          id="mobile-search-box"
          parentPath={uiConfig.configPath!}
          {...props.searchBoxProps}
        />
      </StyledDeviceSpecific>
    </Stack>
  );
};
EntriesTopControls.componentName =
  defaultEntriesTopControlsConfig.componentName;

export const FlexibleEntriesTopControls = withFlexible<
  EntriesTopControlsConfig,
  EntriesTopControlsProps
>(EntriesTopControls, defaultEntriesTopControlsConfig);

//#region styled components
const StyledDeviceSpecific = styled(Box)<{ showOnSmallDevice: boolean }>(
  ({ theme, showOnSmallDevice }) => ({
    display: showOnSmallDevice ? 'none' : 'inherit',
    [theme.breakpoints.down('sm')]: {
      display: showOnSmallDevice ? 'inherit' : 'none',
      width: '100%',
    },
  }),
);
const StyledTabContent = styled(Stack)<{ show: boolean }>(
  ({ theme, show }) => ({
    display: show ? 'flex' : 'none',
    transition: 'all 0.2s ease-in',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: theme.palette.background['light-gray'],
    padding: '20px 25px',
    width: '100%',
  }),
);
const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background['white'],
  borderRadius: '5px',
  marginRight: '8px',
  marginTop: '8px',
  fontSize: '14px',
  fontWeight: 600,
}));
//#endregion
