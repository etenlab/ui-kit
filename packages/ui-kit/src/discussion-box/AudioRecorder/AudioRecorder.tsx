import React, { useRef, useState, useEffect, useCallback } from 'react';

import { Stack, IconButton } from '@mui/material';

import { FiMic, CiPause1, FiX, FiCheck } from '../../icons';
import { colors } from '../../ThemeProvider';

import { RecorderTimer } from '../RecorderTimer';

import { AudioElement, Wave } from '@foobar404/wave';
import { RecorderStatus } from '../types';

type AudioRecorderProps = {
  onCancel(): void;
  onSave(blobs: Blob[]): void;
};

export function AudioRecorder({ onCancel, onSave }: AudioRecorderProps) {
  const [recorderStatus, setRecorderStatus] = useState<RecorderStatus>('new');
  const [savedLastChunk, setSavedLastChunk] = useState<boolean>(true);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioElementRef = useRef<AudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  const refreshRecorder = useCallback(() => {
    if (mediaRecorderRef.current?.state !== 'inactive') {
      mediaRecorderRef.current?.stop();
    }
    mediaRecorderRef.current = null;
    recordedChunksRef.current = [];
    setRecorderStatus('new');
  }, []);

  useEffect(() => {
    if (recorderStatus !== 'ended') {
      return;
    }
    if (!savedLastChunk) {
      return;
    }

    if (recordedChunksRef.current.length > 0) {
      onSave(recordedChunksRef.current);
    } else {
      alert('There is no data to save');
    }
    refreshRecorder();
  }, [recorderStatus, savedLastChunk, refreshRecorder]);

  const initWave = () => {
    const canvasElement = canvasRef.current;
    const audioElement = audioElementRef.current;
    if (canvasElement === null || audioElement === null) {
      return;
    }

    const wave = new Wave(audioElement, canvasElement, true);
    wave.addAnimation(
      new wave.animations.Lines({
        count: 50,
        lineWidth: 3,
        lineColor: colors['middle-gray'],
        rounded: true,
      }),
    );
  };

  const handleClickStart = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });

    const options = { mimeType: 'audio/webm' };
    const mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.addEventListener('dataavailable', function (e) {
      if (e.data.size > 0) recordedChunksRef.current.push(e.data);
      setSavedLastChunk(true);
    });

    mediaRecorder.addEventListener('stop', function () {
      stream.getTracks().forEach((track) => track.stop());
    });

    const context = new AudioContext();
    const source = context.createMediaStreamSource(stream);
    audioElementRef.current = {
      context,
      source,
    };

    initWave();

    mediaRecorder.start();
    mediaRecorderRef.current = mediaRecorder;
    setRecorderStatus('recording');
  };

  const pauseRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;

    if (mediaRecorder === null || mediaRecorder.state !== 'recording') {
      alert('cannot pause because mediaRecorder not exist or not recording!');
      return;
    }

    mediaRecorder.pause();
    setRecorderStatus('paused');
  };

  const resumeRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;

    if (mediaRecorder === null || mediaRecorder.state !== 'paused') {
      alert('cannot resume because mediaRecorder not exist!');
      return;
    }

    mediaRecorder.resume();
    setRecorderStatus('recording');
  };

  const handleClickPause = () => {
    if (recorderStatus === 'recording') {
      pauseRecording();
    } else if (recorderStatus === 'paused') {
      resumeRecording();
    }
  };

  const handleClickCancel = () => {
    if (recorderStatus === 'paused') {
      if (confirm('Recorded data will be lost!')) {
        refreshRecorder();
      }
    } else {
      onCancel();
    }
  };

  const handleClickSave = () => {
    if (mediaRecorderRef.current?.state !== 'inactive') {
      mediaRecorderRef.current?.stop();
    }
    setRecorderStatus('ended');
    setSavedLastChunk(false);
  };

  const controlButtonStyle = {
    fontSize: '80px',
    padding: '20px',
    backgroundColor: colors['red'],
    color: colors['white'],
    borderRadius: '50%',
  };

  const disabledCancel =
    recorderStatus === 'recording' || recorderStatus === 'ended' ? true : false;
  const disabledSave =
    recorderStatus === 'new' || recorderStatus === 'ended' ? true : false;
  const disabledControl = recorderStatus === 'ended' ? true : false;
  const canvasDisplay = recorderStatus === 'paused' ? 'none' : 'inherit';

  const controlButton =
    recorderStatus === 'new' ? (
      <IconButton onClick={handleClickStart} disabled={disabledControl}>
        <FiMic style={{ ...controlButtonStyle }} />
      </IconButton>
    ) : (
      <IconButton onClick={handleClickPause} disabled={disabledControl}>
        <CiPause1
          style={{
            ...controlButtonStyle,
            backgroundColor: colors['blue-primary'],
          }}
        />
      </IconButton>
    );

  return (
    <Stack justifyContent="space-between" alignItems="center" gap="20px">
      <RecorderTimer recorderStatus={recorderStatus} />
      <canvas
        ref={canvasRef}
        width={1200}
        height={30}
        style={{ width: '100%', height: '30px', display: canvasDisplay }}
      />

      {recorderStatus === 'paused' ? <div style={{ height: '30px' }} /> : null}

      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ width: '100%' }}
      >
        <IconButton
          onClick={handleClickCancel}
          sx={{ fontSize: '36px', color: colors['gray'] }}
          disabled={disabledCancel}
        >
          <FiX />
        </IconButton>

        {controlButton}

        <IconButton
          onClick={handleClickSave}
          sx={{ fontSize: '36px', color: colors['green'] }}
          disabled={disabledSave}
        >
          <FiCheck />
        </IconButton>
      </Stack>
    </Stack>
  );
}
