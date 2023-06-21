import React, { ReactElement } from 'react';
import { useState } from 'react';
import {
  IconButton,
  PaletteColor,
  Box,
  Typography,
  ListItem,
} from '@mui/material';
import { DebounceInput } from 'react-debounce-input';
import { DiSound, DiAdd } from '../../icons';

import { SimpleFormDialog } from '../SimpleFormDialog';
import { Input } from '../../input';
import { Button } from '../../button';
import { TitleWithIcon } from '../TitleWithIcon';
import { VoteButtonGroup } from '../VoteButtonGroup';

type VotableContent = {
  content: string;
  upVotes: number;
  downVotes: number;
  id: string | null;
  candidateId: string | null;
};

type VotableItem = {
  title: VotableContent;
  contents: VotableContent[];
  contentElectionId: string | null;
};

type TUpOrDownVote = 'upVote' | 'downVote';

type ItemContentListEditProps = {
  item: VotableItem;
  onBack: () => void;
  buttonText: string;
  changeContentValue: (id: string | null, newContentValue: string) => void;
  changeContentVotes: (id: string | null, UpOrDown: TUpOrDownVote) => void;
  addContent: (newContentValue: string) => void;
  isEditable?: boolean;
  isAddable?: boolean;
  customTitle?: ReactElement;
};

export function ItemContentListEdit({
  item,
  onBack,
  buttonText,
  changeContentValue,
  changeContentVotes,
  addContent,
  isEditable = false,
  isAddable = false,
  customTitle,
}: ItemContentListEditProps) {
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const [itemIdxEditting, setItemIdxEditting] = useState(
    null as unknown as number,
  );

  return (
    <>
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
        {customTitle ? (
          <> {customTitle}</>
        ) : (
          <>
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
                marginLeft: '20px',
              }}
            >
              <DiSound />
            </IconButton>
          </>
        )}
      </Box>
      <ul style={{ margin: 0 }}>
        {item.contents.map(({ content, upVotes, downVotes }, idx) => (
          <ListItem
            sx={{
              display: 'list-item',
              padding: 0,
              fontSize: '12px',
              lineHeight: '17px',
            }}
            key={idx}
          >
            {itemIdxEditting === idx ? (
              <DebounceInput
                element={Input}
                debounceTimeout={500}
                value={content}
                onChange={(v) =>
                  changeContentValue(item.contents[idx].id, v.target.value)
                }
                onBlur={() => setItemIdxEditting(null as unknown as number)}
              />
            ) : (
              <Typography
                variant="body1"
                onClick={() => isEditable && setItemIdxEditting(idx)}
                display={'inline-flex'}
              >
                {content}
              </Typography>
            )}
            <div>
              <VoteButtonGroup
                likeCount={upVotes}
                dislikeCount={downVotes}
                like={false}
                dislike={false}
                setDislike={() =>
                  changeContentVotes(item.contents[idx].candidateId, 'downVote')
                }
                setLike={() =>
                  changeContentVotes(item.contents[idx].candidateId, 'upVote')
                }
              />
            </div>
          </ListItem>
        ))}
        {isAddable && (
          <Button
            fullWidth
            variant="contained"
            startIcon={<DiAdd />}
            onClick={() => setIsDialogOpened(true)}
          >
            {buttonText}
          </Button>
        )}
        <SimpleFormDialog
          title={'Enter new Definition'}
          isOpened={isDialogOpened}
          handleCancel={() => setIsDialogOpened(false)}
          handleOk={(value) => {
            addContent(value);
            setIsDialogOpened(false);
          }}
        />
      </ul>
    </>
  );
}
