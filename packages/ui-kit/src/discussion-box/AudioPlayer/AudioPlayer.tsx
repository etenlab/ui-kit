import React, { useRef, useState, useEffect } from 'react';
import { Stack, Typography, Slider } from '@mui/material';

import { Wave } from '@foobar404/wave';

import { CircleButton } from '../../button';
import { BsFillPlayFill, CiPause1 } from '../../icons';
import { useColorModeContext } from '../../ThemeProvider';

type AudioPlayerProps = {
  src: string;
  file_type?: string;
  mode?: 'view' | 'quill';
};

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export function AudioPlayer({ src, file_type }: AudioPlayerProps) {
  const { getColor } = useColorModeContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    const audioElement = audioRef.current;

    if (canvasElement === null || audioElement === null) {
      return;
    }

    const wave = new Wave(audioElement, canvasElement);
    wave.addAnimation(
      new wave.animations.Lines({
        count: 30,
        lineWidth: 3,
        lineColor: getColor('middle-gray'),
        rounded: true,
      }),
    );
  }, [getColor]);

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const handleChangeSlider = (_event: Event, value: number | number[]) => {
    const newTime = ((value as number) / 100) * duration;
    audioRef.current!.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current!.pause();
    } else {
      audioRef.current!.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current!.currentTime);
    setDuration(audioRef.current!.duration);
  };

  const playControlIcon = !isPlaying ? (
    <BsFillPlayFill
      style={{ color: getColor('white'), fontSize: 30, paddingLeft: 3 }}
    />
  ) : (
    <CiPause1
      style={{ color: getColor('white'), fontSize: 17, strokeWidth: '1.2px' }}
    />
  );

  const value = duration !== 0 ? Math.floor((currentTime / duration) * 100) : 0;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        padding: '6px',
        borderRadius: '70px',
        backgroundColor: getColor('disable'),
        width: '290px',
      }}
    >
      <CircleButton onClick={togglePlay} icon={playControlIcon} />
      <Stack direction="column">
        <canvas
          ref={canvasRef}
          width={300}
          height={20}
          style={{ width: '100%', height: '25px', marginBottom: '-2px' }}
        />
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          crossOrigin="anonymous"
        >
          <source src={src} type={file_type} />
        </audio>
        <Slider
          value={value}
          onChange={handleChangeSlider}
          sx={{
            padding: '0px !important',
            paddingTop: '5px',
            '& .MuiSlider-thumb': {
              display: 'none',
            },
          }}
        />
        <Typography
          variant="body3"
          color="text.middle-gray"
          sx={{ fontWeight: 600 }}
        >
          {formatTime(currentTime)} / {formatTime(duration)}
        </Typography>
      </Stack>
      <CircleButton
        onClick={() => alert('Click Aa Button')}
        icon={
          <Typography
            variant="body3"
            color="text.white"
            sx={{ fontWeight: 800 }}
          >
            Aa
          </Typography>
        }
        color="green"
        circleSize="30px"
      />
    </Stack>
  );
}
