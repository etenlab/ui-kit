import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  className?: string;
  onClick?: React.MouseEventHandler;
}
export function CloseIcon(props: IProps) {
  const { width = 35, height = 35, className, onClick } = props;
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-4813 -3252 35 35"
    >
      <g data-name="CompositeLayer">
        <path
          d="m-4813-3252 35 35"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="#79c7b2"
          fill="transparent"
          data-name="Line 51"
        />
        <path
          d="m-4778-3252-35 35"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="#79c7b2"
          fill="transparent"
          data-name="Line 50"
        />
      </g>
    </svg>
  );
}
export default CloseIcon;
