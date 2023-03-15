import React, { useState, useEffect, Fragment } from 'react';

import {
  Box,
  Stack,
  Divider,
  useTheme,
  FormGroup,
  Typography,
  PaletteColor,
  FormControlLabel,
} from '@mui/material';
import { FiX } from '../../icons';
import { AgreeConfirmButton } from '../../button';
import { Checkbox } from '../../input';
import { LabelWithIcon } from '../LabelWithIcon';
import { SimpleQuill } from '../SimpleQuill';
import { VerticalRadioList } from '../VerticalRadioList';

export type CheckItemType = {
  item: string;
  checked: boolean;
};

type QuestionType =
  | 'Normal'
  | 'Agree/Disagree'
  | 'True/False'
  | 'Multiselect'
  | 'Choose One';

type QuestionBoxType = {
  onCancel(): void;
  onSave({
    normal,
    agreeOrDisagree,
    trueOrFalse,
    chooseOne,
    multiselect,
  }: {
    normal?: string;
    agreeOrDisagree?: boolean;
    trueOrFalse?: boolean;
    chooseOne?: string;
    multiselect?: CheckItemType[];
  }): void;
  question: string;
  questionKind: QuestionType;
  questionData?: string[];
};

export function QuestionBox({
  question,
  questionKind,
  questionData,
  onCancel,
  onSave,
}: QuestionBoxType) {
  const [value, setValue] = useState<string>('');
  const [choosed, setChoosed] = useState<string | null>(null);
  const [checked, setChecked] = useState<CheckItemType[]>([]);

  // initialize checked state
  useEffect(() => {
    if (questionKind !== 'Multiselect' || !questionData) {
      return;
    }

    setChecked(
      questionData.map(
        (data) => ({ item: data, checked: false } as CheckItemType),
      ),
    );
  }, [questionData, questionKind]);

  const theme = useTheme();
  const darkColor = (theme.palette.dark as PaletteColor).main;
  const lightYellowColor = (theme.palette['light-yellow'] as PaletteColor).main;
  const yellowColor = (theme.palette.yellow as PaletteColor).main;
  const middleGray = (theme.palette['middle-gray'] as PaletteColor).main;

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setChoosed(newValue);
  };

  const handleChangeCheck = (item: string) => {
    let updatedChecked = [...checked];
    let checkedIndex = checked.findIndex((data) => data.item === item);

    if (checkedIndex === -1) return;

    updatedChecked[checkedIndex].checked =
      !updatedChecked[checkedIndex].checked;

    setChecked(updatedChecked);
  };

  const handleQuillChange = (newValue: string) => {
    setValue(newValue);
  };

  let reply;

  switch (questionKind) {
    case 'Normal': {
      reply = (
        <Stack gap="20px" sx={{ borderTop: `1px solid ${middleGray}` }}>
          <SimpleQuill
            value={value}
            onChange={handleQuillChange}
            placeholder="Your Answer..."
          />
          <Box sx={{ padding: '20px' }}>
            <AgreeConfirmButton
              kind="agree"
              fullWidth
              label="Send"
              onClick={() => onSave({ normal: value })}
            />
          </Box>
        </Stack>
      );
      break;
    }
    case 'Agree/Disagree': {
      reply = (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            padding: '20px 20px 40px',
          }}
        >
          <AgreeConfirmButton
            kind="agree"
            withIcon
            onClick={() => onSave({ agreeOrDisagree: true })}
          />
          <AgreeConfirmButton
            kind="disagree"
            withIcon
            onClick={() => onSave({ agreeOrDisagree: false })}
          />
        </Stack>
      );
      break;
    }
    case 'True/False': {
      reply = (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            padding: '20px 20px 40px',
          }}
        >
          <AgreeConfirmButton
            kind="agree"
            withIcon={false}
            label="True"
            onClick={() => onSave({ trueOrFalse: true })}
          />
          <AgreeConfirmButton
            kind="disagree"
            withIcon={false}
            label="False"
            onClick={() => onSave({ trueOrFalse: false })}
          />
        </Stack>
      );
      break;
    }
    case 'Choose One': {
      reply = (
        <Stack gap="40px" sx={{ padding: '0px 20px 40px', marginTop: '-20px' }}>
          <VerticalRadioList
            withUnderline
            underlineColor="rgba(92, 102, 115, 0.1)"
            items={questionData!.map((data) => ({ value: data, label: data }))}
            value={choosed}
            onChange={handleChange}
          />
          <AgreeConfirmButton
            kind="agree"
            fullWidth
            label="Send"
            onClick={() => {
              if (!choosed) return;
              onSave({ chooseOne: choosed! });
            }}
          />
        </Stack>
      );
      break;
    }
    case 'Multiselect': {
      reply = (
        <Stack gap="40px" sx={{ padding: '0px 20px 40px', marginTop: '-20px' }}>
          <FormGroup>
            {checked.map((data) => (
              <Fragment key={data.item}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.checked}
                      onChange={() => handleChangeCheck(data.item)}
                      name={data.item}
                    />
                  }
                  label={data.item}
                  color="dark"
                  sx={{ padding: '12px 0' }}
                />
                <Divider sx={{ borderColor: 'rgba(92, 102, 115, 0.1)' }} />
              </Fragment>
            ))}
          </FormGroup>
          <AgreeConfirmButton
            kind="agree"
            fullWidth
            label="Send"
            onClick={() => {
              if (!checked) return;
              onSave({ multiselect: checked });
            }}
          />
        </Stack>
      );
      break;
    }
    default: {
      break;
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: lightYellowColor,
        borderTop: `3px solid ${yellowColor}`,
      }}
    >
      <Box sx={{ padding: '20px' }}>
        <LabelWithIcon
          label="Help the translator:"
          icon={<FiX />}
          onClick={onCancel}
        />
        <Typography variant="subtitle2" sx={{ color: darkColor }}>
          {question}
        </Typography>
      </Box>
      {reply}
    </Box>
  );
}
