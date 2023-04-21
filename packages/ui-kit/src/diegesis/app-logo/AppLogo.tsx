import React from 'react';

interface IProps {
  className?: string;
  width?: number;
  height?: number;
  varient?: 'primary' | 'light';
  href?: string;
}
export function AppLogo(props: IProps) {
  const { width = 240, height = 52.348, varient = 'primary' } = props;
  if (varient === 'light') {
    return (
      <a href={props.href || '/'}>
        <svg
          className={props?.className}
          width={width}
          height={height}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="-6783 -1302.417 240 52.349"
        >
          <g data-name="CompositeLayer">
            <path
              d="m-6751.25-1271.667 12.111-12.111 9.11-9.11-.96-.96-20.72 20.72v-29.288h-1.359v29.288l-20.72-20.72-.96.96 21.22 21.22H-6783v4.528h61.256v-4.527h-29.505Z"
              fill="#fff"
              fillRule="evenodd"
              data-name="Path 2"
            />
            <image
              width="185"
              height="48"
              xlinkHref="data:image/png;base64,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"
              data-name="Diegesis"
              transform="translate(-6728 -1298.068)"
            />
          </g>
        </svg>
      </a>
    );
  } else {
    return (
      <a href={props.href || '/'}>
        <svg
          className={props?.className}
          width={width}
          height={height}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 239 52.349"
        >
          <g
            id="Group_116"
            data-name="Group 116"
            transform="translate(-88 -45.584)"
          >
            <text
              id="Diegesis"
              transform="translate(143 49.932)"
              fill="#31373a"
              fontSize="40"
              fontFamily="Helvetica-Bold, Helvetica"
              fontWeight="700"
              letterSpacing="-0.04em"
            >
              <tspan x="15.334" y="31">
                Diegesis
              </tspan>
            </text>
            <path
              id="Path_2"
              data-name="Path 2"
              d="M31.751,30.749l12.11-12.111,9.11-9.11-.96-.96L31.29,29.288V0H29.932V29.288L9.212,8.568l-.96.96L29.472,30.749H0v4.528H61.256V30.749Z"
              transform="translate(88 45.583)"
              fill="#60d0b2"
            />
          </g>
        </svg>
      </a>
    );
  }
}
export default AppLogo;
