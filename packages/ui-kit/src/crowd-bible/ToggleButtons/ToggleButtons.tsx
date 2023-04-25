import React from 'react';

import {
  ToggleButtonGroup,
  ToggleButton,
  styled,
  SxProps,
} from '@mui/material';
import { useColorModeContext } from '../../ThemeProvider';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '&': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  '& .MuiToggleButtonGroup-grouped': {
    width: '100%',
    textTransform: 'none',
    margin: theme.spacing(1),
    border: 0,
    borderBottom: `1px solid`,
    borderColor: (theme.palette['middle-gray'] as any).main,
    borderRadius: 0,
  },
}));

const StyledToggleButton: any = styled(ToggleButton)((props) => ({
  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: (props as any).colorselected,
  },
}));

export function ToggleButtons({
  buttonsParams,
  onChange,
  colorSelected,
  groupSxProps,
  buttonSxProps,
}: {
  buttonsParams: Array<{
    caption: string;
    value: string;
  }>;
  onChange(selectedValue: string | null): void;
  colorSelected?: string;
  groupSxProps?: SxProps;
  buttonSxProps?: SxProps;
}) {
  const [selected, setSelected] = React.useState<string | null>(
    buttonsParams[0].value,
  );
  const { getColor } = useColorModeContext();

  const handleSelection = (
    _event: React.MouseEvent<HTMLElement>,
    newSelection: string | null,
  ) => {
    if (newSelection !== null) {
      setSelected(newSelection);
      onChange(newSelection);
    }
  };

  return (
    <StyledToggleButtonGroup
      value={selected}
      exclusive
      onChange={handleSelection}
      sx={groupSxProps}
    >
      {buttonsParams.map(({ value, caption }) => (
        <StyledToggleButton
          key={value}
          value={value}
          colorselected={colorSelected || getColor('light-blue')}
          sx={buttonSxProps}
        >
          {caption}
        </StyledToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
}
