import React, { useState } from 'react';

import MainAceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/ext-language_tools';

import { Paper, Typography } from '@mui/material';

export function AceEditor({
  title,
  value,
  mode,
  onChange,
  validator,
  placeholder,
}: {
  title: string;
  value?: string;
  onChange(value: string): void;
  validator(value: string): boolean;
  mode: 'markdown' | 'css';
  placeholder: string;
}) {
  const [isVaild, setIsValid] = useState<boolean>(true);
  const handleChangeEditor = (value: string) => {
    const valid = value ? validator(value) : true;
    setIsValid(valid);

    if (!valid) {
      return;
    }

    onChange(value);
  };

  const invalidCom = !isVaild ? (
    <Typography color="error">Invalid Input</Typography>
  ) : null;

  return (
    <Paper
      variant="outlined"
      elevation={3}
      sx={{ background: '#e5e5e5', padding: '5px' }}
    >
      <Typography
        variant="h6"
        sx={(theme) => ({ color: theme.palette.primary.main })}
      >
        {title}
      </Typography>
      <MainAceEditor
        placeholder={placeholder}
        mode={mode}
        theme="solarized_dark"
        onChange={handleChangeEditor}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={value || ''}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '300px',
        }}
      />
      {invalidCom}
    </Paper>
  );
}
