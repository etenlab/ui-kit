import React, { useState, useEffect } from 'react';

import { RecorderStatus } from '../types';

import { Typography } from '@mui/material';
import { colors } from '../../ThemeProvider';

const HOUR_TO_SECONDS = 60 * 60;
const MIN_TO_SECONDS = 60;

function fillZero(num: number): string {
  return num > 9 ? num + '' : '0' + num;
}

function TimeShower({ totalSeconds }: { totalSeconds: number }) {
  const hours = Math.floor(totalSeconds / HOUR_TO_SECONDS);
  const mins = Math.floor(
    (totalSeconds - hours * HOUR_TO_SECONDS) / MIN_TO_SECONDS,
  );
  const seconds =
    totalSeconds - hours * HOUR_TO_SECONDS - mins * MIN_TO_SECONDS;

  return (
    <Typography variant="h2" sx={{ fontSize: '24px', color: colors['dark'] }}>
      {`${fillZero(hours)}:${fillZero(mins)}:${fillZero(seconds)}`}
    </Typography>
  );
}

export function RecorderTimer({
  recorderStatus,
}: {
  recorderStatus: RecorderStatus;
}) {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timer | null = null;

    switch (recorderStatus) {
      case 'new': {
        setTime(0);
        break;
      }
      case 'recording': {
        timer = setInterval(() => {
          setTime((time) => time + 1);
        }, 1000);
        break;
      }
      case 'paused': {
        break;
      }
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [recorderStatus]);

  return <TimeShower totalSeconds={time} />;
}
