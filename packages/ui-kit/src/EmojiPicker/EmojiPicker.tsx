import React, { memo } from 'react';

import EmojiPickerPackage, { Theme, EmojiClickData } from 'emoji-picker-react';

type EmojiPickerProps = {
  onEmojiClick(emojiData: EmojiClickData): void;
};

export const EmojiPicker = memo(function CustomEmojiPicker({
  onEmojiClick,
}: EmojiPickerProps) {
  return (
    <EmojiPickerPackage
      theme={Theme.AUTO}
      autoFocusSearch={true}
      lazyLoadEmojis={true}
      onEmojiClick={onEmojiClick}
    />
  );
});
