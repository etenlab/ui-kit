import { Stack, Typography, styled } from '@mui/material';
import React from 'react';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from '../UIConfigProvider';
import { withFlexible } from '../withFlexible';
import {
  FlexibleSelectControl,
  SelectControlProps,
  mockSelectControlProps,
} from '../SelectControl';

export type BookResourceConfig = BasicUIConfig & {
  contents: {
    label: string;
  };
  styles: {
    backgroundColor: string;
  };
};
export type BookResourceBoxProps = BasicFlexibleProps<BookResourceConfig> & {
  selectControl: SelectControlProps;
};

const defaultBookResourceConfig: BookResourceConfig = {
  componentName: 'BookResourceBox',
  contents: {
    label: 'Book Resources',
  },
  styles: {
    backgroundColor: '#F0F0E7',
  },
};
export const mockBookResourceBox: BookResourceBoxProps = {
  id: 'book-resource-box',
  parentPath: '/',
  selectControl: mockSelectControlProps,
  uiConfig: defaultBookResourceConfig,
};

export const BookResourceBox: FlexibleComponent<BookResourceBoxProps> = (
  props,
) => {
  const {
    uiConfig = defaultBookResourceConfig,
    selectControl = mockSelectControlProps,
  } = props;
  return (
    <StyledBookResourceBox
      direction={'column'}
      alignItems={'flex-start'}
      justifyContent={'center'}
      backgroundColor={uiConfig.styles.backgroundColor}
    >
      <Typography variant="h3">{uiConfig.contents?.label}</Typography>
      <FlexibleSelectControl
        label={selectControl.label}
        value={selectControl.value}
        options={selectControl.options || []}
        onChange={selectControl.onChange}
        id={'book-resource-select'}
        parentPath={uiConfig.configPath!}
      />
    </StyledBookResourceBox>
  );
};
BookResourceBox.componentName = defaultBookResourceConfig.componentName;

export const FlexibleBookResourceBox = withFlexible<
  BookResourceConfig,
  BookResourceBoxProps
>(BookResourceBox, defaultBookResourceConfig);

const StyledBookResourceBox = styled(Stack)<{ backgroundColor: string }>(
  ({ theme, backgroundColor }) => ({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: backgroundColor ?? theme.palette.background['light-gray'],
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
  }),
);
