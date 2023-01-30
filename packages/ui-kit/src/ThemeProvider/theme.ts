import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { palette } from './palette';
import { components } from './components';

export const theme = createTheme(deepmerge(palette, components));
