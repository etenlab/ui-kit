import React from 'react';

import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/ext-language_tools';

import { AceEditor } from './AceEditor';

function isValidMarkdown(_mdString: string): boolean {
  return true;
}

export function MarkdownEditor({
  value,
  onChange,
}: {
  value?: string;
  onChange(value: string): void;
}) {
  return (
    <AceEditor
      title="Markdown Editor"
      value={value || ''}
      onChange={onChange}
      validator={isValidMarkdown}
      mode="markdown"
      placeholder="Input your markdown"
    />
  );
}
