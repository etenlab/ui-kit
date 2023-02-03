import React, {
  useCallback,
  useState,
  useRef,
  Dispatch,
  MouseEventHandler,
  FocusEventHandler,
  ChangeEvent,
  Fragment,
} from 'react';

import { Box, TextField, Divider, IconButton, Popover } from '@mui/material';

import { CiFaceSmile } from '../../icons';
import { EmojiPicker, EmojiClickData } from '../../EmojiPicker';

type SimpleQuillProps = {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
};

export function SimpleQuill({ value, setValue }: SimpleQuillProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const lastCursorPosRef = useRef<number>(0);

  const openEmoji: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEmojiClick = useCallback((emojiData: EmojiClickData) => {
    handleClose();
    setValue((value) => {
      return (
        value.slice(0, lastCursorPosRef.current) +
        emojiData.emoji +
        value.slice(lastCursorPosRef.current)
      );
    });
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> =
    (e) => {
      const element = e.currentTarget;
      lastCursorPosRef.current = element.selectionStart || value.length;
    };

  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{
        padding: '7px 18px',
        gap: '10px',
        width: '100%',
        background: '#fff',
      }}
    >
      <TextField
        placeholder="Leave Feedback (optional)..."
        value={value}
        multiline
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        InputProps={{
          endAdornment: (
            <Fragment>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ margin: '0 10px' }}
              />
              <IconButton onClick={openEmoji}>
                <CiFaceSmile />
              </IconButton>
            </Fragment>
          ),
        }}
        color="gray"
        sx={{
          '& .MuiInputBase-root': {
            alignItems: 'flex-end',
            padding: '0px !important',
          },
          '& textarea': {
            minHeight: '30px !important',
          },
          '& fieldset': {
            border: 'none',
            borderRadius: 'none',
          },
        }}
      />

      <Popover
        open={true}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ display: open ? 'inherit' : 'none' }}
      >
        <EmojiPicker onEmojiClick={handleEmojiClick} />
      </Popover>
    </Box>
  );
}
