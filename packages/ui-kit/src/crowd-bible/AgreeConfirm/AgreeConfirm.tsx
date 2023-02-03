import React from 'react';

import { ButtonGroup } from '@mui/material';
import { AgreeConfirmButton } from '../../button';

export function AgreeConfirm({
  onClick,
}: {
  onClick(agree: 'agree' | 'disagree'): void;
}) {
  return (
    <ButtonGroup fullWidth sx={{ borderRadius: 0 }}>
      <AgreeConfirmButton
        fullWidth
        withIcon
        kind="agree"
        onClick={() => {
          onClick('agree');
        }}
        zeroBorderRadius
      />
      <AgreeConfirmButton
        fullWidth
        withIcon
        kind="disagree"
        onClick={() => {
          onClick('disagree');
        }}
        zeroBorderRadius
      />
    </ButtonGroup>
  );
}
