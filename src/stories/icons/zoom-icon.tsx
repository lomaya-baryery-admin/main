import { getColor, IIconProps } from './utils';
import React from 'react';

export const ZoomIcon = ({ type }: IIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={getColor(type)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.9333 18 14.6819 17.2176 15.9497 15.9497C17.2176 14.6819 18 12.9333 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.1246 19.2628 15.0784 18.0319 16.6176L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L16.6176 18.0319C15.0784 19.2628 13.1246 20 11 20C6.02944 20 2 15.9706 2 11ZM11 7C11.5523 7 12 7.44772 12 8V10H14C14.5523 10 15 10.4477 15 11C15 11.5523 14.5523 12 14 12H12V14C12 14.5523 11.5523 15 11 15C10.4477 15 10 14.5523 10 14V12H8C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10H10V8C10 7.44772 10.4477 7 11 7Z"
      />
    </svg>
  );
};
