import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import DefinitionBlue from './svg-sources/definition-blue.svg';
import DefinitionDark from './svg-sources/definition-dark.svg';
import DefinitionGray from './svg-sources/definition-gray.svg';
import DefinitionRed from './svg-sources/definition-red.svg';
import DefinitionWhite from './svg-sources/definition-white.svg';
import { DiColors } from './colors';

export function DiDefinition(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Definition = DefinitionDark;
  if (color) {
    switch (color) {
      case 'blue':
        Definition = DefinitionBlue;
        break;
      case 'gray':
        Definition = DefinitionGray;
        break;
      case 'red':
        Definition = DefinitionRed;
        break;
      case 'white':
        Definition = DefinitionWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Definition />
    </SvgIcon>
  );
}
