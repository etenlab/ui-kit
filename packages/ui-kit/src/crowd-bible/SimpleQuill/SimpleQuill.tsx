import React, {
  useCallback,
  useState,
  useRef,
  FocusEventHandler,
  ChangeEvent,
  Fragment,
} from 'react';

import { Box, Popover, Divider, TextField, IconButton } from '@mui/material';

import { DiSmile } from '../../icons';
import { EmojiPicker, EmojiClickData } from '../../EmojiPicker';
import { useColorModeContext } from '../../ThemeProvider';

type SimpleQuillProps = {
  onChange(newValue: string): void;
  placeholder: string;
  value: string;
};

export function SimpleQuill({
  placeholder,
  value,
  onChange,
}: SimpleQuillProps) {
  const { getColor } = useColorModeContext();
  const anchorRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const changeRef = useRef<{ onChange(newValue: string): void }>({
    onChange,
  });

  const [openedEmoji, setOpenedEmoji] = useState<boolean>(false);
  const lastCursorPosRef = useRef<number>(0);

  const handleOpenEmoji = () => {
    setOpenedEmoji(true);
  };

  const handleCloseEmoji = useCallback(() => {
    setOpenedEmoji(false);
  }, []);

  const handleEmojiClick = useCallback(
    (emojiData: EmojiClickData) => {
      handleCloseEmoji();
      const value = inputRef.current!.value;
      const newValue =
        value.slice(0, lastCursorPosRef.current) +
        emojiData.emoji +
        value.slice(lastCursorPosRef.current);

      changeRef.current.onChange(newValue);
    },
    [handleCloseEmoji],
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleBlur: FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const element = e.currentTarget;
    lastCursorPosRef.current = element.selectionStart || value.length;
  };

  return (
    <Box
      sx={{
        padding: '7px 18px',
        gap: '10px',
        width: '100%',
        background: getColor('bg-main'),
      }}
    >
      <TextField
        placeholder={placeholder}
        value={value}
        inputRef={inputRef}
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
              <IconButton ref={anchorRef} onClick={handleOpenEmoji}>
                <DiSmile />
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

      {anchorRef.current ? (
        <Popover
          open={true}
          anchorEl={anchorRef.current}
          onClose={handleCloseEmoji}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{ display: openedEmoji ? 'inherit' : 'none' }}
        >
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </Popover>
      ) : null}
    </Box>
  );
}
