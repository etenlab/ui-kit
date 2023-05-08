import React from 'react';

import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/ext-language_tools';

import { AceEditor } from './AceEditor';

function isValidCss(_cssString: string): boolean {
  return true;
}

export function CssEditor({
  value,
  onChange,
}: {
  value?: string;
  onChange(value: string): void;
}) {
  return (
    <AceEditor
      title="CSS Editor"
      value={value}
      onChange={onChange}
      validator={isValidCss}
      mode="css"
      placeholder="Input your style"
    />
  );
}
