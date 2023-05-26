import React, { ChangeEvent, useState, Fragment } from 'react';

import {
  Box,
  Stack,
  Divider,
  FormControl,
  FormLabel,
  Link,
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { Autocomplete, TextArea, Input, Checkbox, Radio } from '../../input';
import { useColorModeContext } from '../../ThemeProvider/';
import { Button } from '../../button';
import { BiTrashAlt } from '../../icons';
import { logger } from '../../logger';

type QuestionType =
  | 'Normal'
  | 'Agree/Disagree'
  | 'True/False'
  | 'Multiselect'
  | 'Choose One';

const options = [
  'Normal',
  'Agree/Disagree',
  'True/False',
  'Multiselect',
  'Choose One',
];

export type Question = {
  type: QuestionType;
  question: string;
  answers?: string[];
};

type QuestionCreatorBoxProps = {
  onSave(question: Question): void;
  onCancel(): void;
};

export function QuestionCreatorBox({
  onSave,
  onCancel,
}: QuestionCreatorBoxProps) {
  const { getColor } = useColorModeContext();
  const [questionType, setQuestionType] = useState<QuestionType | null>(null);
  const [question, setQuestion] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [shownAddAnswer, setShownAddAnswer] = useState<boolean>(false);
  const [newAnswer, setNewAnswer] = useState<string>('');

  const handleChangeQuestionType = (_event: unknown, value: unknown) => {
    setQuestionType(value as QuestionType | null);
  };

  const handleChangeQuestion = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(event.currentTarget.value);
  };

  const handleClickAddMore = () => {
    logger.info('Click Add More Button');
  };

  const handleClickAddAnswer = () => {
    setShownAddAnswer(true);
  };

  const handleClickCancelAnswer = () => {
    setShownAddAnswer(false);
  };

  const handleChangeNewAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setNewAnswer(event.currentTarget.value);
  };

  const handleClickSaveAnswer = () => {
    if (answers.find((answer) => answer === newAnswer.trim())) {
      return;
    }
    setAnswers((answers) => [...answers, newAnswer.trim()]);
    setNewAnswer('');
    setShownAddAnswer(false);
  };

  const removeAnswer = (answer: string) => {
    setAnswers((answers) => answers.filter((_answer) => _answer !== answer));
  };

  const handleClickSave = () => {
    switch (questionType) {
      case 'Normal': {
        onSave({
          type: questionType,
          question,
        });
        break;
      }
      case 'Agree/Disagree': {
        onSave({
          type: questionType,
          question,
        });
        break;
      }
      case 'True/False': {
        onSave({
          type: questionType,
          question,
        });
        break;
      }
      case 'Multiselect': {
        onSave({
          type: questionType,
          question,
          answers,
        });
        break;
      }
      case 'Choose One': {
        onSave({
          type: questionType,
          question,
          answers,
        });
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleClickCancel = () => {
    onCancel();
  };

  const valid =
    newAnswer === ''
      ? undefined
      : !answers.find((answer) => answer === newAnswer.trim());

  const AnswersComponent =
    questionType && questionType !== 'Agree/Disagree' ? (
      <>
        <FormLabel>Answers:</FormLabel>
        <List sx={{ padding: 0 }}>
          {answers.map((answer) => (
            <Fragment key={answer}>
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    color="red"
                    onClick={() => removeAnswer(answer)}
                  >
                    <BiTrashAlt />
                  </IconButton>
                }
              >
                <ListItemAvatar sx={{ marginLeft: '-11px' }}>
                  {questionType === 'Multiselect' ? (
                    <Checkbox disabled />
                  ) : (
                    <Radio disabled />
                  )}
                </ListItemAvatar>
                <ListItemText primary={answer} />
              </ListItem>
              <Divider sx={{ borderColor: 'rgba(92, 102, 115, 0.1)' }} />
            </Fragment>
          ))}
        </List>
        {shownAddAnswer ? (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap="5px"
          >
            <Input
              label="Add New Answer"
              fullWidth
              withLegend={false}
              valid={valid}
              value={newAnswer}
              onChange={handleChangeNewAnswer}
            />
            <Button
              variant="contained"
              color="green"
              sx={{ padding: '14.5px 16px' }}
              onClick={handleClickSaveAnswer}
            >
              Save
            </Button>
            <Button
              variant="text"
              color="gray"
              sx={{ padding: '14.5px 16px' }}
              onClick={handleClickCancelAnswer}
            >
              Cancel
            </Button>
          </Stack>
        ) : null}
        <Link
          component="button"
          variant="body3"
          color="gray"
          underline="hover"
          sx={{
            fontWeight: 600,
            borderBottom: `1px solid ${getColor('dark')}`,
            padding: '9px 0',
          }}
          onClick={handleClickAddAnswer}
        >
          + Add Answer
        </Link>
      </>
    ) : null;

  return (
    <Box
      sx={{
        padding: '20px',
        borderTop: `3px solid ${getColor('blue-primary')}`,
      }}
    >
      <FormControl sx={{ width: '100%', gap: '12px' }}>
        <FormLabel sx={{ padding: '6px 0', fontSize: '12px' }}>
          Your Question:
        </FormLabel>
        <Autocomplete
          label="Type of Question"
          withLegend={false}
          options={options}
          value={questionType}
          onChange={handleChangeQuestionType}
        />
        <TextArea
          label="Question..."
          fullWidth
          disabled={questionType === null}
          withLegend={false}
          sx={{
            '& textarea': {
              minHeight: '100px !important',
            },
          }}
          value={question}
          onChange={handleChangeQuestion}
        />

        {AnswersComponent}

        <Link
          component="button"
          variant="body3"
          color="gray"
          underline="hover"
          sx={{ fontWeight: 600 }}
          onClick={handleClickAddMore}
        >
          + Add More
        </Link>
      </FormControl>
      <Box
        sx={{
          marginTop: '30px',
        }}
      >
        <Button
          variant="contained"
          fullWidth
          color="blue-primary"
          onClick={handleClickSave}
          sx={{ marginBottom: '5px !important' }}
        >
          Save
        </Button>
        <Button
          variant="text"
          fullWidth
          color="gray"
          onClick={handleClickCancel}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
