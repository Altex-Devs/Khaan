import * as React from "react";

export const FacebookIcon = ({color = "#66377B"} : {color?: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_1_75)">
        <path
          d="M14.2222 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2009 0.8 16 1.77778 16H8V9.77778H6.22222V7.57778H8V5.75556C8 3.832 9.07733 2.48089 11.3476 2.48089L12.9502 2.48267V4.79822H11.8862C11.0027 4.79822 10.6667 5.46133 10.6667 6.07644V7.57867H12.9493L12.4444 9.77778H10.6667V16H14.2222C15.2 16 16 15.2009 16 14.2222V1.77778C16 0.8 15.2 0 14.2222 0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_75">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
