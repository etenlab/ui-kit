import React from 'react';

import { ToggleButtonGroup, ToggleButton, styled } from '@mui/material';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '&': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  '& .MuiToggleButtonGroup-grouped': {
    textTransform: 'none',
    paddingLeft: `${theme.spacing(3)}`,
    paddingRight: `${theme.spacing(3)}`,
    margin: theme.spacing(1),
    border: 0,
    borderBottom: `1px solid`,
    borderColor: theme.palette['middle-gray'],
    borderRadius: 0,
  },
}));

export function ToggleButtons({
  buttonsParams,
  onChange,
  ...rest
}: {
  buttonsParams: Array<{
    caption: string;
    value: string;
  }>;
  onChange(selectedValue: string | null): void;
}) {
  const [selected, setSelected] = React.useState<string | null>(
    buttonsParams[0].value,
  );

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
      color="primary"
      {...rest}
    >
      {buttonsParams.map(({ value, caption }) => (
        <ToggleButton key={value} value={value}>
          {caption}
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
}
