import { Box, Chip, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import SearchBox from '../SearchBox';
import { CustomTab, CustomTabs } from '../Tab';
import SelectControl, { SelectControlProps } from '../SelectControl';
import PageTitleTypo from '../styleds/PageTitleTypo';

export type TagConfigProps = {
  label?: string;
  tags?: string[];
  selectedTags?: string[];
  onTagSelect?: (idx: number) => void;
};
export type EntriesTopControlsProps = {
  titleText?: string;
  searchPlaceholderText?: string;
  filterTabText?: string;
  tagConfig?: TagConfigProps;
  selectControls?: SelectControlProps[];
};
export const MOCK_ENTRIES_TOP_CONTROLS_PROPS: Partial<EntriesTopControlsProps> =
  {
    titleText: 'Entries',
    searchPlaceholderText: 'Bible in Basic English',
    filterTabText: 'Advanced search with filters',
    tagConfig: {
      label: 'Tags',
      tags: ['Heading', 'Footnotes', 'Intro', 'Heading', 'Strong'],
      selectedTags: ['Intro'],
      onTagSelect(idx) {},
    },
    selectControls: [
      { label: 'Organisations', onChange(value) {}, options: [], value: '' },
      { label: 'Owner', onChange(value) {}, options: [], value: '' },
      { label: 'Type', onChange(value) {}, options: [], value: '' },
      { label: 'Language', onChange(value) {}, options: [], value: '' },
    ],
  };

export function EntriesTopControls(props: EntriesTopControlsProps) {
  const [curTab, setCurTab] = useState(0);
  return (
    <Stack direction={'column'} alignItems={'flex-start'}>
      <Stack direction={'row'} alignItems={'center'} width={'100%'}>
        <PageTitleTypo variant={'h1'} marginRight={'0.5rem'}>
          {props.titleText}
        </PageTitleTypo>
        <StyledDeviceSpecific showOnSmallDevice={false}>
          <SearchBox placeholder={props.searchPlaceholderText} />
        </StyledDeviceSpecific>
        <CustomTabs
          value={curTab}
          onClick={() => {
            setCurTab(curTab === 1 ? 0 : 1);
          }}
        >
          <CustomTab value={1} label={props.filterTabText || ''} />
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
              options={control.options}
              onChange={control.onChange}
            />
          ))}
        </Stack>
        <Stack direction={'row'} marginTop={'0.2rem'} flexWrap={'wrap'}>
          <Typography
            variant={'caption'}
            color={'text.light-gray'}
            marginRight={'0.8rem'}
          >
            {props.tagConfig?.label}:
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
        <SearchBox placeholder={props.searchPlaceholderText} />
      </StyledDeviceSpecific>
    </Stack>
  );
}

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

export default EntriesTopControls;
