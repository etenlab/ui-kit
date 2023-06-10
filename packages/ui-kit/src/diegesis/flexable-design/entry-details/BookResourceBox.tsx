import { Stack, Typography, styled } from '@mui/material';
import React from 'react';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from '../UIConfigProvider';
import { withFlexible } from '../withFlexible';
import { SelectControl, SelectControlProps } from '../../SelectControl';
import { mockSelectControlProps } from '../SelectControl';

export type BookResourceConfig = BasicUIConfig & {
  contents: {
    label: string;
  };
  styles: {};
};
export type BookResourceBoxProps = BasicFlexibleProps<BookResourceConfig> & {
  selectControl: SelectControlProps;
};

//#region data
const defaultBookResourceConfig: BookResourceConfig = {
  componentName: 'BookResourceBox',
  contents: {
    label: 'Book Resources',
  },
  styles: {},
};
export const mockBookResourceBox: BookResourceBoxProps = {
  id: 'book-resource-box',
  parentPath: '/',
  selectControl: mockSelectControlProps,
  uiConfig: defaultBookResourceConfig,
};
//#endregion

export const BookResourceBox: FlexibleComponent<BookResourceBoxProps> = ({
  uiConfig = defaultBookResourceConfig,
  selectControl,
}) => {
  return (
    <StyledBookResourceBox
      direction={'column'}
      alignItems={'flex-start'}
      justifyContent={'center'}
    >
      <Typography variant="h3">{uiConfig.contents?.label}</Typography>
      <SelectControl
        label={selectControl.label}
        value={selectControl.value}
        options={selectControl.options || []}
        onChange={selectControl.onChange}
      />
    </StyledBookResourceBox>
  );
};
BookResourceBox.componentName = defaultBookResourceConfig.componentName;

export const FlexibleBookResourceBox = withFlexible<
  BookResourceConfig,
  BookResourceBoxProps
>(BookResourceBox, defaultBookResourceConfig);

const StyledBookResourceBox = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  backgroundColor: theme.palette.background['light-gray'],
  padding: '20px',
  paddingTop: '25px',
  '.MuiTypography-h3': {
    fontWeight: 700,
    fontFamily: 'Helvetica',
    marginBottom: '5px',
  },
  '.MuiOutlinedInput-root': {
    width: '272px',
    '.MuiSelect-outlined': {
      paddingTop: '10px',
      paddingBottom: '10px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '.MuiOutlinedInput-root': {
      width: '100%',
    },
  },
}));
