import React from 'react';

import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';

import { DiCheck } from '../../icons';

function Rect() {
  return (
    <div
      style={{
        height: 18,
        width: 18,
        margin: 3,
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderRadius: '4px',
      }}
    ></div>
  );
}

function RectAndCheck() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 18,
        width: 18,
        margin: 3,
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderRadius: '4px',
      }}
    >
      <DiCheck style={{ fontSize: 12 }} />
    </div>
  );
}

export function Checkbox(props: CheckboxProps) {
  return (
    <MuiCheckbox icon={<Rect />} checkedIcon={<RectAndCheck />} {...props} />
  );
}
