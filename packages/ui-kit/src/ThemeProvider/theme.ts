import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { palette } from './palette';
import { components } from './components';
import { typography } from './typography';

export const theme = createTheme(
  deepmerge(deepmerge(palette, typography), components),
);
