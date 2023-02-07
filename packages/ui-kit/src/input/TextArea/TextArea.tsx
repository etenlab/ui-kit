import React from 'react';

import { TextFieldProps } from '@mui/material';

import { Input } from '../Input';

export function TextArea(
  props: TextFieldProps & { valid?: boolean; withLegend?: boolean }
) {
  return <Input multiline {...props} />;
}
