export const modules = {
  toolbar: [
    ['bold', 'italic', 'strike'],
    ['link'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    // ["blockquote"],
    // ["code", "code-block"],
  ],
  keyboard: {
    bindings: {
      enter: {
        key: 13,
        shiftKey: false,
        handler: () => {},
      },
      tab: false,
    },
  },
};

export const formats = [
  'bold',
  'italic',
  'strike',
  'link',
  'list',
  'bullet',
  // 'blockquote',
  // 'code',
  // 'code-block',
];

export type SkeletonSize = {
  width: string;
  height: string;
};

export const Skeletons = {
  normal: {
    width: '200px',
    height: '50px',
  },
  image: {
    width: '50px',
    height: '50px',
  },
  video: {
    width: '50px',
    height: '50px',
  },
  audio: {
    width: '300px',
    height: '50px',
  },
};
