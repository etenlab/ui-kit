import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import CommentBlue from './svg-sources/comment-blue.svg';
import CommentDark from './svg-sources/comment-dark.svg';
import CommentGray from './svg-sources/comment-gray.svg';
import CommentRed from './svg-sources/comment-red.svg';
import CommentWhite from './svg-sources/comment-white.svg';
import { DiColors } from './colors';

export function DiComment(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Comment = CommentDark;
  if (color) {
    switch (color) {
      case 'blue':
        Comment = CommentBlue;
        break;
      case 'gray':
        Comment = CommentGray;
        break;
      case 'red':
        Comment = CommentRed;
        break;
      case 'white':
        Comment = CommentWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Comment />
    </SvgIcon>
  );
}
