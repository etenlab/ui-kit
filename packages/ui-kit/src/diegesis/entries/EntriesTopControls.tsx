import {
  Box,
  Chip,
  Stack,
  StackTypeMap,
  Typography,
  styled,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React, { useState } from 'react';
import SearchBox from '../SearchBox';
import { CustomTab, CustomTabs } from '../Tab';
import SelectOptions from '../SelectOptions';
import PageTitleTypo from '../styleds/PageTitleTypo';

interface IProps {}

export function EntriesTopControls(_props: IProps) {
  const [curTab, setCurTab] = useState(0);
  return (
    <Stack direction={'column'} alignItems={'flex-start'}>
      <Stack direction={'row'} alignItems={'center'} width={'100%'}>
        <PageTitleTypo variant={'h1'} marginRight={'0.5rem'}>
          Entries
        </PageTitleTypo>
        <StyledDeviceSpecific showOnSmallDevice={false}>
          <SearchBox placeholder="Bible in Basic English" />
        </StyledDeviceSpecific>
        <CustomTabs
          value={curTab}
          onClick={() => {
            setCurTab(curTab === 1 ? 0 : 1);
          }}
        >
          <CustomTab value={1} label="Advanced search with filters" />
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
          <SelectOptions
            label="Organisations"
            options={[]}
            onChange={() => {}}
          />
          <SelectOptions label="Owner" options={[]} onChange={() => {}} />
          <SelectOptions label="Type" options={[]} onChange={() => {}} />
          <SelectOptions label="Language" options={[]} onChange={() => {}} />
        </Stack>
        <Stack direction={'row'} marginTop={'0.2rem'} flexWrap={'wrap'}>
          <Typography
            variant={'caption'}
            color={'text.light-gray'}
            marginRight={'0.8rem'}
          >
            Tags:
          </Typography>
          <StyledChip label="Heading" />
          <StyledChip label="Footnotes" />
          <StyledChip label="Intro" />
          <StyledChip label="Heading" />
          <StyledChip label="Strong" />
        </Stack>
      </StyledTabContent>
      <StyledDeviceSpecific showOnSmallDevice={true}>
        <SearchBox placeholder="Bible in Basic English" />
      </StyledDeviceSpecific>
    </Stack>
  );
}

//#region styled components
const StyledDeviceSpecific = styled<
  OverridableComponent<Box<{ showOnSmallDevice: boolean }, 'div'>>
>(Box)(({ theme, showOnSmallDevice }) => ({
  display: showOnSmallDevice ? 'none' : 'inherit',
  [theme.breakpoints.down('sm')]: {
    display: showOnSmallDevice ? 'inherit' : 'none',
    width: '100%',
  },
}));

const StyledTabContent = styled<
  OverridableComponent<StackTypeMap<{ show: boolean }, 'div'>>
>(Stack)(({ theme, show }) => ({
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
