import { ReactElement } from 'react';
import jsxToString from 'jsx-to-string';

export function buildDocs(element: ReactElement) {
  return {
    docs: {
      source: {
        code: jsxToString(element, {
          shortBooleanSyntax: true,
        }),
        language: 'jsx',
        format: true,
        type: 'auto',
      },
    },
  };
}
