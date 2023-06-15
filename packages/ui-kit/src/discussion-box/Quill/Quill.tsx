import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
  KeyboardEvent,
  MouseEventHandler,
  ChangeEventHandler,
} from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Quill as StandardQuill } from 'quill';

import { EmojiPicker, EmojiClickData } from '../../EmojiPicker';

import {
  Skeleton,
  IconButton,
  Stack,
  Box,
  Divider,
  Popover,
  Typography,
} from '@mui/material';
import {
  DiAttach,
  DiSmile,
  DiArrowRight,
  DiCross,
  CiCircleRemove,
} from '../../icons';
import { useColorModeContext } from '../../ThemeProvider';

import { AddAttachmentButton } from '../../button';
import { Attachment } from '../Attachment';
import { QuillContainer } from './styled';

import { modules, formats, Skeletons, SkeletonSize } from './utils';
import { getMimeType } from '../utils';
import { IFile } from '../types';

const iconStyle = {
  fontSize: '24px',
  padding: '3px',
};

function QuillAttachmentList({
  attachments,
  skeleton,
  onRemove,
}: {
  attachments: IFile[];
  skeleton: SkeletonSize | null;
  onRemove(file: IFile): void;
}) {
  const { getColor } = useColorModeContext();

  return attachments.length > 0 ? (
    <Stack
      gap="10px"
      direction="row"
      sx={{
        display: 'inline-flex',
        padding: '10px 20px 5px',
        borderTop: `1px solid ${getColor('middle-gray')}`,
      }}
    >
      {attachments.map((attachment) => (
        <Attachment
          key={attachment.id}
          file={attachment}
          mode="quill"
          onRemove={() => {
            onRemove(attachment);
          }}
        />
      ))}
      {skeleton ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={skeleton.width}
          height={skeleton.height}
          sx={{ borderRadius: '8px' }}
        />
      ) : null}
    </Stack>
  ) : null;
}

type QuillProps = {
  emojiMode: 'in' | 'out';
  onClickOpenButton?: (anchor: Element) => void;
  mode?: 'editing' | 'replying' | 'standard';
  onInitializeQuill(): void;
  quillTitle: string;
  initQuill?: string;
  initPlain: string;
  uploading: boolean;
  attachments: IFile[];
  onAttach(file: File): void;
  onCancelAttachment(file: IFile): void;
  onSend({ quill, plain }: { quill?: string; plain: string }): void;
  onClose(plain: string): void;
};

type RefType = {
  focus(): void;
  addEmoji(emoji: string): void;
};

export const Quill = forwardRef<RefType | null, QuillProps>(function QuillPure(
  {
    emojiMode = 'in',
    onClickOpenButton,
    mode = 'standard',
    quillTitle,
    initQuill,
    initPlain,
    uploading,
    attachments,
    onInitializeQuill,
    onAttach,
    onCancelAttachment,
    onSend,
    onClose,
  },
  ref,
) {
  const { getColor } = useColorModeContext();
  const [quill, setQuill] = useState<string | undefined>(undefined);
  const [plain, setPlain] = useState<string>('');

  const [openedEmoji, setOpenedEmoji] = useState<boolean>(false);

  const quillRef = useRef<ReactQuill | null>(null);
  const previousSelection = useRef<ReactQuill.Range>(null);
  const skeletonRef = useRef<SkeletonSize | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const anchorEl = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setQuill(initQuill);
    setPlain(initPlain);
    quillRef.current?.focus();
  }, [initQuill, initPlain]);

  const addEmojiToQuill = (emoji: string) => {
    if (!previousSelection.current) {
      setQuill(emoji);
      return;
    }

    if (!quillRef.current) {
      return;
    }

    const editor: StandardQuill = quillRef.current.getEditor();
    editor.insertText(previousSelection.current.index, emoji);
  };

  const handleSend = () => {
    onSend({ plain, quill });
    setPlain('');
    setQuill(undefined);
  };

  const handleKeyEvent = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSend();
    }
  };

  const handleChange = (
    value: string,
    _delta: any,
    _source: any,
    editor: any,
  ) => {
    setQuill(value);
    setPlain(editor.getText());
  };

  const handleClose = () => {
    onClose(plain);
  };

  // Get a file then upload
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    inputRef.current = event.target;
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      const mimeType = getMimeType(file.type) as keyof typeof Skeletons;
      skeletonRef.current = Skeletons[mimeType];

      onAttach(file);

      inputRef.current.value = '';
    }
  };

  const handleOpenEmojiPicker: MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    const selection = quillRef.current?.editor?.getSelection();

    if (selection) {
      previousSelection.current = selection;
    }

    if (emojiMode === 'in') {
      setOpenedEmoji(true);
    } else if (emojiMode === 'out') {
      onClickOpenButton!(event.currentTarget);
    }
  };

  const handleCloseEmojiPicker = () => {
    setOpenedEmoji(false);
  };

  const handleEmojiClick = useCallback((emojiData: EmojiClickData) => {
    handleCloseEmojiPicker();

    addEmojiToQuill(emojiData.emoji);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        quillRef.current?.focus();
      },
      addEmoji: (emoji: string) => {
        addEmojiToQuill(emoji);
      },
    }),
    [],
  );

  const handleBlur = (_previousSelection: ReactQuill.Range) => {
    previousSelection.current = _previousSelection;
  };

  const skeleton = uploading
    ? {
        ...skeletonRef.current!,
      }
    : null;

  const disabled = uploading || mode === 'editing';

  const emojiPicker =
    emojiMode === 'in' ? (
      <Popover
        open={anchorEl.current !== null && emojiMode === 'in'}
        anchorEl={anchorEl.current}
        onClose={handleCloseEmojiPicker}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          display: openedEmoji ? 'inherit' : 'none',
        }}
      >
        <EmojiPicker onEmojiClick={handleEmojiClick} />
      </Popover>
    ) : null;

  return (
    <QuillContainer>
      <QuillAttachmentList
        attachments={attachments}
        onRemove={onCancelAttachment}
        skeleton={skeleton}
      />

      {mode !== 'standard' ? (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            padding: '2px 20px',
            borderTop: `1px solid ${getColor('middle-gray')}`,
          }}
        >
          <Typography variant="body3" color="dark.red">
            {quillTitle}
          </Typography>
          <IconButton
            onClick={onInitializeQuill}
            size="small"
            sx={{ marginRight: '-3px' }}
          >
            <CiCircleRemove />
          </IconButton>
        </Stack>
      ) : null}

      <Box sx={{ position: 'relative' }}>
        <ReactQuill
          ref={quillRef}
          theme="snow"
          value={quill}
          onChange={handleChange}
          onKeyDown={handleKeyEvent}
          onBlur={handleBlur}
          modules={modules}
          formats={formats}
        />
        <IconButton
          onClick={handleClose}
          size="small"
          sx={{ position: 'absolute', right: '12px', top: '1px' }}
        >
          <DiCross style={{ ...iconStyle, color: getColor('red') }} />
        </IconButton>
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          borderBottom: `1px solid ${getColor('middle-gray')}`,
          backgroundColor: getColor('disable'),
          paddingLeft: '12px',
          paddingRight: '12px',
        }}
      >
        <Stack direction="row" justifyContent="flex-start">
          <AddAttachmentButton onChange={handleFileChange} disabled={disabled}>
            <DiAttach
              style={{
                ...iconStyle,
                color: getColor('gray'),
              }}
            />
          </AddAttachmentButton>
          <Divider orientation="vertical" variant="middle" flexItem />
          <IconButton
            size="small"
            ref={anchorEl}
            onClick={handleOpenEmojiPicker}
          >
            <DiSmile
              style={{
                ...iconStyle,
                strokeWidth: '0.4px',
                color: getColor('gray'),
              }}
            />
          </IconButton>
        </Stack>

        <IconButton size="small" onClick={handleSend}>
          <DiArrowRight
            style={{
              ...iconStyle,
              borderRadius: '50%',
              color: getColor('white'),
              backgroundColor: getColor('blue-primary'),
            }}
          />
        </IconButton>
      </Stack>

      {emojiPicker}
    </QuillContainer>
  );
});
