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
      onEmojiClick={onEmojiClick}
      autoFocusSearch={true}
      lazyLoadEmojis={true}
      theme={Theme.AUTO}
    />
  );
});
