import { PaletteColorOptions } from '@mui/material';

declare module 'tiny-warning' {
  export default function warning(condition: any, message: string): void;
}

declare module 'react-lifecycles-compat' {
  import React from 'react';
  export function polyfill<P>(
    Comp: React.ComponentType<P>,
  ): React.ComponentType<P>;
}

declare module 'deepmerge' {
  export = deepmerge;

  function deepmerge<T>(
    x: Partial<T>,
    y: Partial<T>,
    options?: deepmerge.Options,
  ): T;
  function deepmerge<T1, T2>(
    x: T1,
    y: T2,
    options?: deepmerge.Options,
  ): T1 & T2;

  namespace deepmerge {
    interface Options {
      clone?: boolean;
      arrayMerge?(destination: any[], source: any[], options?: Options): any[];
      isMergeableObject?(value: object): boolean;
    }

    function all<T>(objects: Array<Partial<T>>, options?: Options): T;
  }
}
declare module 'scheduler' {
  export const unstable_NoPriority = 0;
  export const unstable_ImmediatePriority = 1;
  export const unstable_UserBlockingPriority = 2;
  export const unstable_NormalPriority = 3;
  export const unstable_LowPriority = 4;
  export const unstable_IdlePriority = 5;

  export function unstable_runWithPriority<T>(
    priorityLevel: number,
    eventHandler: () => T,
  ): T;

  export interface Task {
    id: number;
  }

  export interface ScheduleCallbackOptions {
    delay?: number;
  }

  export function unstable_scheduleCallback(
    priorityLevel: number,
    callback: () => void,
    options?: ScheduleCallbackOptions,
  ): Task;

  export function unstable_cancelCallback(task: Task): void;
}

declare module 'node-type' {
  export interface Node {
    id: string;
    node_type: string;
    propertyKeys: NodePropertyKey[];
    toNodeRelationships?: Relationship[];
  }

  export interface NodePropertyKey {
    property_key: string;
    upVotes: number;
    downVotes: number;
    posts: Post[];
    propertyValue: NodePropertyValue;
  }

  export interface NodePropertyValue {
    property_value: string;
    upVotes: number;
    downVotes: number;
    posts: Post[];
  }

  export interface Relationship {
    id: string;
    relationship_type: string;
    from_node_id: number;
    to_node_id: number;
    propertyKeys: RelationshipPropertyKey[];
    fromNode: Node;
    toNode: Node;
  }

  export interface RelationshipPropertyKey {
    property_key: string;
    upVotes: number;
    downVotes: number;
    posts: Post[];
    propertyValue: RelationshipPropertyValue;
  }

  export interface RelationshipPropertyValue {
    property_value: string;
    upVotes: number;
    downVotes: number;
    posts: Post[];
  }

  export interface Post {
    id: string;
  }
}

declare module 'css-to-object';

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    disable: true;
    gray: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    disable: true;
    gray: true;
    dark: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
    'blue-primary': true;
    'light-blue': true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    disable: true;
    gray: true;
    dark: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
    'blue-primary': true;
    'light-blue': true;
  }
}

declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides {
    disable: true;
    gray: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
    'blue-primary': true;
    'light-blue': true;
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    disable: true;
    gray: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
    'blue-primary': true;
    'light-blue': true;
  }
}

declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    red: true;
  }
}

declare module '@mui/material/FormLabel' {
  interface FormLabelPropsColorOverrides {
    gray: true;
  }
}

declare module '@mui/material/FormControlLabel' {
  interface FormControlLabelPropsColorOverrides {
    dark: true;
  }
}

declare module '@mui/material/ListItemText' {
  interface ListItemTextPropsColorOverrides {
    dark: true;
  }
}

declare module '@mui/material/Link' {
  interface LinkPropsColorOverrides {
    gray: true;
  }
}

declare module '@mui/material/styles' {
  interface CustomPalette {
    'blue-primary': PaletteColorOptions;
    'light-blue': PaletteColorOptions;
    disable: PaletteColorOptions;
    dark: PaletteColorOptions;
    gray: PaletteColorOptions;
    'middle-gray': PaletteColorOptions;
    white: PaletteColorOptions;
    red: PaletteColorOptions;
    'light-red': PaletteColorOptions;
    green: PaletteColorOptions;
    'light-green': PaletteColorOptions;
    yellow: PaletteColorOptions;
    'middle-yellow': PaletteColorOptions;
    'light-yellow': PaletteColorOptions;
    'turquoise-light': PaletteColorOptions;
    'turquoise-dark': PaletteColorOptions;
    'darker-gray': PaletteColorOptions;
    'lighter-gray': PaletteColorOptions;
    'divider-color': PaletteColorOptions;
  }

  interface CustomTypeText {
    'blue-primary': string;
    'light-blue': string;
    disable: string;
    dark: string;
    gray: string;
    'middle-gray': string;
    white: string;
    red: string;
    'light-red': string;
    green: string;
    'light-green': string;
    yellow: string;
    'middle-yellow': string;
    'light-yellow': string;
    'turquoise-light': string;
    'turquoise-dark': string;
    'darker-gray': string;
    'lighter-gray': string;
    'light-gray2': string;
    'light-gray': string;
    'divider-color': string;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface TypeText extends CustomTypeText {}

  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }

  interface TypeBackground {
    'darker-gray': string;
    'light-gray': string;
    'light-gray2': string;
    'turquoise-dark': string;
    'turquoise-light': string;
    white: string;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}
