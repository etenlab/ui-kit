declare module 'jsx-to-string' {
  import { ReactElement } from 'react';

  function jsxToString(
    component: ReactElement,
    options?: JsxToStringOpts,
  ): string;

  export default jaxToString;
}
