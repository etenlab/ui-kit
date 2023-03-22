import { Button } from '@eten-lab/ui-kit';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

type SimpleFormDialogProps = {
  title: string;
  isOpened: boolean;
  handleCancel: () => void;
  handleOk: (value: string) => void;
};

export function SimpleFormDialog({
  title,
  isOpened,
  handleCancel,
  handleOk,
}: SimpleFormDialogProps) {
  const [value, setValue] = useState('');
  return (
    <>
      <Dialog open={isOpened} onClose={handleCancel}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            variant="standard"
            onChange={(e) => setValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={() => handleOk(value)}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
