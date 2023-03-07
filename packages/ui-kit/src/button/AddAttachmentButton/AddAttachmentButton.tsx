import React, { ChangeEventHandler } from 'react';

import { IconButton } from '@mui/material';

type AddAttachmentButtoonProps = {
  /**
   * Disable input
   */
  disabled?: boolean;
  /**
   * Click Event handler,
   */
  onChange: ChangeEventHandler;
  children?: React.ReactNode;
};

/**
 * Primary UI component to open emoji picker in the discussion-box
 */
export function AddAttachmentButton({
  disabled = false,
  children,
  onChange,
}: AddAttachmentButtoonProps) {
  return (
    <IconButton disabled={disabled} size="small">
      <label htmlFor="file-upload" style={{ lineHeight: 0 }}>
        {children}
      </label>
      <input
        id="file-upload"
        hidden
        type="file"
        onChange={onChange}
        disabled={disabled}
        multiple={false}
      />
    </IconButton>
  );
}
