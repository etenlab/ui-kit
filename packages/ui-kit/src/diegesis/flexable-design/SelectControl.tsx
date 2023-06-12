import { MenuItem, Select, styled } from '@mui/material';
import React from 'react';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  FlexibleComponent,
} from './UIConfigProvider';
import { withFlexible } from './withFlexible';

interface SelectControlConfig extends BasicUIConfig {
  contents: {};
  styles: {
    borderColor: string;
    background: string;
    fontFamily: string;
  };
}

export type SelectControlProps = BasicFlexibleProps<SelectControlConfig> & {
  label?: string;
  value?: string;
  options: { id: string; title: string }[];
  onChange: (value: string) => void;
};

const defaultSelectControlConfig: SelectControlConfig = {
  componentName: 'SelectControl',
  contents: {},
  styles: {
    borderColor: '',
    background: '',
    fontFamily: '',
  },
};
export const mockSelectControlProps: SelectControlProps = {
  id: 'select-control',
  parentPath: '/',
  label: 'Select Control',
  value: 'Option 1',
  options: [
    { id: '1', title: 'Option 1' },
    { id: '2', title: 'Option 2' },
    { id: '3', title: 'Option 3' },
  ],
  onChange(_value) {},
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const SelectControl: FlexibleComponent<SelectControlProps> = (props) => {
  const {
    options = [],
    label = '',
    value,
    onChange,
    uiConfig = defaultSelectControlConfig,
  } = props;

  return (
    <StyledSelect
      value={value || label}
      onChange={(e) => {
        if (onChange) onChange(e.target.value as string);
      }}
      MenuProps={MenuProps}
      borderColor={uiConfig.styles.borderColor}
      backgroundColor={uiConfig.styles.background}
      fontFamily={uiConfig.styles.fontFamily}
    >
      <MenuItem value={label} disabled>
        {label}
      </MenuItem>
      {options.map((option) => (
        <MenuItem key={option.id} value={option.id}>
          {option.title}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};
SelectControl.componentName = defaultSelectControlConfig.componentName;

export const FlexibleSelectControl = withFlexible<
  SelectControlConfig,
  SelectControlProps
>(SelectControl, defaultSelectControlConfig);

const StyledSelect = styled(Select)<{
  borderColor: string;
  fontFamily: string;
  backgroundColor: string;
}>(({ theme, borderColor, fontFamily, backgroundColor }) => ({
  width: '100%',
  height: '100%',
  '& .MuiOutlinedInput-input': {
    backgroundColor: backgroundColor ?? theme.palette.text.white,
  },
  '& .MuiSelect-select.Mui-focusVisible': {
    borderColor: borderColor ?? theme.palette.background['turquoise-light'],
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '0px',
  },
  '& .MuiSelect-select': {
    fontWeight: 500,
    fontFamily: fontFamily ?? 'helvetica',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: borderColor ?? theme.palette.background['turquoise-light'],
  },
  '&.Mui-focusVisible .MuiOutlinedInput-notchedOutline': {
    borderColor: borderColor ?? theme.palette.background['turquoise-light'],
  },
}));
