export const getMimeType = (fileType: string | null): string => {
  if (fileType === null || fileType.trim().length === 0) {
    return 'normal';
  }

  const classic = fileType.trim().split('/');

  if (classic.length < 2) return 'normal';

  switch (classic[0]) {
    case 'video': {
      return 'video';
    }
    case 'audio': {
      return 'audio';
    }
    case 'image': {
      return 'image';
    }
    default: {
      return 'normal';
    }
  }
};
