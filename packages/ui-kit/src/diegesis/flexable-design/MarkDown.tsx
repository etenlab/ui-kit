import React, { useMemo } from 'react';

import { styled } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { FlexibleMarkDown } from './UIConfigProvider/UIConfigProvider';

import postcssJs from 'postcss-js';
import postcss from 'postcss';

export function MarkDown({ id, content, className, css }: FlexibleMarkDown) {
  const ContainerCom = useMemo(() => {
    const cssObj = css ? postcssJs.objectify(postcss.parse(css)) : {};

    return styled('div')({
      ...cssObj,
      css,
    });
  }, [css]);

  return (
    <ContainerCom id={id} className={className}>
      <ReactMarkdown children={content || ''} />
    </ContainerCom>
  );
}
