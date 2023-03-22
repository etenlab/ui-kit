import React from 'react';
import { useState } from 'react';
import {
  IconButton,
  PaletteColor,
  Box,
  Typography,
  ListItem,
} from '@mui/material';
import { DebounceInput } from 'react-debounce-input';
import { SimpleFormDialog } from '../SimpleFormDialog';
import { BiVolumeFull } from 'react-icons/bi';
import { Button, CrowdBibleUI, FiPlus, Input } from '../..';

const { TitleWithIcon, VoteButtonGroup } = CrowdBibleUI;

type Content = {
  content: string;
  upVote: number;
  downVote: number;
};

type Item = {
  title: Content;
  contents: Content[];
};

type TUpOrDownVote = 'upVote' | 'downVote';

type ItemContentListEditProps = {
  item: Item;
  onBack: () => void;
  buttonText: string;
  changeContent: (params: {
    itemTitleContent: string;
    contentIndex: number;
    newContent: Content;
  }) => void;
  addContent: (params: {
    itemTitleContent: string;
    newContent: Content;
  }) => void;
};

export function ItemContentListEdit({
  item,
  onBack,
  buttonText,
  changeContent,
  addContent,
}: ItemContentListEditProps) {
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const [itemIdxEditting, setItemIdxEditting] = useState(
    null as unknown as number,
  );

  const changeContentVotes = (idx: number, upOrDown: TUpOrDownVote) => {
    const newContent: Content = {
      ...item.contents[idx],
      [upOrDown]: item.contents[idx][upOrDown] + 1,
    };
    changeContent({
      itemTitleContent: item.title.content,
      contentIndex: idx,
      newContent,
    });
  };

  const addNewContent = (value: string) => {
    const newContent: Content = {
      content: value,
      upVote: 0,
      downVote: 0,
    };
    addContent({ itemTitleContent: item.title.content, newContent });
  };

  const changeContentValue = (idx: number, newContentValue: string) => {
    const newContent: Content = {
      ...item.contents[idx],
      content: newContentValue,
    };
    changeContent({
      itemTitleContent: item.title.content,
      contentIndex: idx,
      newContent,
    });
  };

  return (
    <>
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
        <TitleWithIcon
          onClose={() => {}}
          onBack={onBack}
          withBackIcon={true}
          withCloseIcon={false}
          label={item.title.content}
        ></TitleWithIcon>
        <IconButton
          onClick={() => alert('sound!')}
          sx={{
            color: (theme) => (theme.palette.dark as PaletteColor).main,
            margitLeft: '20px',
          }}
        >
          <BiVolumeFull />
        </IconButton>
      </Box>
      {item.contents.map(({ content, upVote, downVote }, idx) => (
        <ListItem
          sx={{
            display: 'list-item',
            padding: 0,
            fontSize: '12px',
            lineHeight: '17px',
          }}
          key={content}
        >
          {itemIdxEditting === idx ? (
            // <Input value={content} onBlur={(v) => changeContentValue(idx, v.target.value)} />
            <DebounceInput
              element={Input}
              debounceTimeout={500}
              value={content}
              onChange={(v) => changeContentValue(idx, v.target.value)}
              onBlur={() => setItemIdxEditting(null as unknown as number)}
            />
          ) : (
            <Typography variant="body1" onClick={() => setItemIdxEditting(idx)}>
              {content}
            </Typography>
          )}
          <div>
            <VoteButtonGroup
              likeCount={upVote}
              dislikeCount={downVote}
              like={false}
              dislike={false}
              setDislike={() => changeContentVotes(idx, 'downVote')}
              setLike={() => changeContentVotes(idx, 'upVote')}
            />
          </div>
        </ListItem>
      ))}
      <Button
        fullWidth
        variant="contained"
        startIcon={<FiPlus />}
        onClick={() => setIsDialogOpened(true)}
      >
        {buttonText}
      </Button>
      <SimpleFormDialog
        title={'Enter new Definition'}
        isOpened={isDialogOpened}
        handleCancel={() => setIsDialogOpened(false)}
        handleOk={(value) => {
          addNewContent(value);
          setIsDialogOpened(false);
        }}
      />
    </>
  );
}