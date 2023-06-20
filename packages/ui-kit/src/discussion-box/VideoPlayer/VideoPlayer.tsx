import React, { useRef } from 'react';

import { CircleButton } from '../../button';
import { DiPlay } from '../../icons';
import { useColorModeContext } from '../../ThemeProvider';

type VideoPlayerProps = {
  src: string;
  file_type?: string;
  mode?: 'view' | 'quill';
};

export function VideoPlayer({
  src,
  file_type,
  mode = 'view',
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { getColor } = useColorModeContext();
  const attr =
    mode === 'quill'
      ? { width: '50px', height: '50px', borderRadius: '4px' }
      : { width: '100px', height: '100px', borderRadius: '10px' };

  const switchFullScreen = () => {
    videoRef.current!.requestFullscreen();
  };

  return (
    <div
      style={{
        ...attr,
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        background: getColor('disable'),
      }}
    >
      <video
        width="100%"
        height="100%"
        style={{ borderRadius: '10px' }}
        ref={videoRef}
      >
        <source src={src} type={file_type} />
        Your browser does not support HTML video.
      </video>
      {mode === 'view' ? (
        <div style={{ position: 'absolute' }}>
          <CircleButton
            onClick={switchFullScreen}
            color="gray"
            icon={
              <DiPlay
                style={{
                  color: getColor('white'),
                  fontSize: 30,
                  paddingLeft: 3,
                }}
              />
            }
          />
        </div>
      ) : null}
    </div>
  );
}
