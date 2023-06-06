import React, { useRef, useState, useEffect, useCallback } from 'react';

import { IconButton, Stack } from '@mui/material';

import {
  TbCameraRotate,
  BsFillPlayFill,
  BsClock,
  CiPause1,
  FiX,
  FiCheck,
} from '../../icons';
import { useColorModeContext } from '../../ThemeProvider';

import { RecorderStatus } from '../types';

type VideoRecorderProps = {
  onSave(blobs: Blob[]): void;
  onCancel(): void;
};

export function VideoRecorder({ onSave, onCancel }: VideoRecorderProps) {
  const { getColor } = useColorModeContext();
  const [recorderStatus, setRecorderStatus] = useState<RecorderStatus>('new');
  const [savedLastChunk, setSavedLastChunk] = useState<boolean>(true);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>(
    'environment',
  );

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const getVideoStream = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: {
        facingMode,
      },
    });

    if (videoRef.current !== null) {
      videoRef.current.srcObject = stream;
    }

    streamRef.current = stream;
  }, [facingMode]);

  const refreshRecorder = useCallback(() => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== 'inactive'
    ) {
      mediaRecorderRef.current.stop();
    }
    mediaRecorderRef.current = null;
    recordedChunksRef.current = [];
    setRecorderStatus('new');
    getVideoStream();
  }, [getVideoStream]);

  useEffect(() => {
    refreshRecorder();

    return () => {
      if (streamRef.current !== null) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [refreshRecorder]);

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
  }, [recorderStatus, savedLastChunk, refreshRecorder, onSave]);

  const handleClickStart = async () => {
    if (streamRef.current === null) {
      alert('Cannot found media stream!');
      return;
    }

    const options = { mimeType: 'video/webm' };
    const mediaRecorder = new MediaRecorder(streamRef.current, options);

    mediaRecorder.addEventListener('dataavailable', function (e) {
      if (e.data.size > 0) recordedChunksRef.current.push(e.data);
      setSavedLastChunk(true);
    });

    mediaRecorder.addEventListener('stop', function () {
      streamRef.current!.getTracks().forEach((track) => track.stop());
    });

    mediaRecorderRef.current = mediaRecorder;
    mediaRecorderRef.current.start(1000);
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
      // eslint-disable-next-line no-restricted-globals
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

  const switchFacingMode = () => {
    setFacingMode((mode) => (mode === 'user' ? 'environment' : 'user'));
  };

  const controlButtonStyle = {
    fontSize: '80px',
    padding: '20px',
    backgroundColor: getColor('bg-main'),
    color: getColor('dark'),
    borderRadius: '50%',
  };

  const disabledCancel =
    recorderStatus === 'recording' || recorderStatus === 'ended' ? true : false;
  const disabledSave =
    recorderStatus === 'new' || recorderStatus === 'ended' ? true : false;
  const disabledControl = recorderStatus === 'ended' ? true : false;

  const controlButton =
    recorderStatus === 'new' ? (
      <IconButton onClick={handleClickStart} disabled={disabledControl}>
        <BsFillPlayFill style={{ ...controlButtonStyle }} />
      </IconButton>
    ) : (
      <IconButton onClick={handleClickPause} disabled={disabledControl}>
        <CiPause1
          style={{
            ...controlButtonStyle,
          }}
        />
      </IconButton>
    );

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: getColor('dark'),
        overflow: 'hidden',
      }}
    >
      <video
        height="100%"
        ref={videoRef}
        autoPlay
        muted
        style={{ transform: 'translateX(-50%)', margin: '0 50%' }}
      />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="24px"
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
          padding: '10px',
          borderRadius: '5px',
          background: '#0000004f',
        }}
      >
        <IconButton>
          <BsClock style={{ color: getColor('white') }} />
        </IconButton>
        <IconButton onClick={switchFacingMode}>
          <TbCameraRotate style={{ color: getColor('white') }} />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: 'absolute',
          bottom: 50,
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          background: '#0000004f',
        }}
        gap="30px"
      >
        <IconButton
          onClick={handleClickCancel}
          sx={{ fontSize: '36px', color: getColor('white') }}
          disabled={disabledCancel}
        >
          <FiX />
        </IconButton>

        {controlButton}

        <IconButton
          onClick={handleClickSave}
          sx={{ fontSize: '36px', color: getColor('green') }}
          disabled={disabledSave}
        >
          <FiCheck />
        </IconButton>
      </Stack>
    </div>
  );
}
