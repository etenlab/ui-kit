import React, { useMemo } from 'react';

import ReactMarkdown from 'react-markdown';
import { FlexibleMarkDown } from './UIConfigProvider/UIConfigProvider';

import styled from '@emotion/styled';

export function MarkDown({ id, content, className, css }: FlexibleMarkDown) {
  const ContainerCom = useMemo(() => {
    try {
      // const cssObj = css ? cssToObject(css || '') : {};
      return styled.div`
        ${css}
      `;
    } catch (err) {
      console.log(err);
      return styled('div')({});
    }
  }, [css]);

  return (
    <ContainerCom id={id} className={className}>
      <ReactMarkdown children={content || ''} />
    </ContainerCom>
  );
}
