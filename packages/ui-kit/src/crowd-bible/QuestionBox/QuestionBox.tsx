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

type QuestionBoxType = {
  onCancel(): void;
  onSave({
    text,
    agree,
    choose,
    check,
  }: {
    text?: string;
    agree?: boolean;
    choose?: string;
    check?: CheckItemType[];
  }): void;
  question: string;
  questionKind: 'text' | 'agree' | 'choose' | 'check';
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
    if (questionKind !== 'check' || !questionData) {
      return;
    }

    setChecked(
      questionData.map(
        (data) => ({ item: data, checked: false } as CheckItemType)
      )
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

  let reply;

  switch (questionKind) {
    case 'text': {
      reply = (
        <Stack gap="20px" sx={{ borderTop: `1px solid ${middleGray}` }}>
          <SimpleQuill value={value} setValue={setValue} />
          <Box sx={{ padding: '20px' }}>
            <AgreeConfirmButton
              kind="agree"
              fullWidth
              label="Send"
              onClick={() => onSave({ text: value })}
            />
          </Box>
        </Stack>
      );
      break;
    }
    case 'agree': {
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
            onClick={() => onSave({ agree: true })}
          />
          <AgreeConfirmButton
            kind="disagree"
            withIcon
            onClick={() => onSave({ agree: false })}
          />
        </Stack>
      );
      break;
    }
    case 'choose': {
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
              onSave({ choose: choosed! });
            }}
          />
        </Stack>
      );
      break;
    }
    case 'check': {
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
                  label="Gilad Gray"
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
              onSave({ check: checked });
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
