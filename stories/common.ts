import jsxToString from 'jsx-to-string';
import React from 'react';

export function buildDocs(elementOrCode: React.ReactNode | string) {
  return {
    docs: {
      source: {
        code:
          typeof elementOrCode === 'object'
            ? jsxToString(elementOrCode, {
                shortBooleanSyntax: true,
              })
            : elementOrCode,
        language: 'jsx',
        format: true,
        type: 'auto',
      },
    },
  };
}
