import { getColor, IIconProps } from './utils';

export const SearchIcon = ({ type }: IIconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 18L15.1046 15.1046M15.1046 15.1046C16.0697 14.1394 16.6667 12.8061 16.6667 11.3333C16.6667 8.38781 14.2789 6 11.3333 6C8.38781 6 6 8.38781 6 11.3333C6 14.2789 8.38781 16.6667 11.3333 16.6667C12.8061 16.6667 14.1394 16.0697 15.1046 15.1046Z"
        stroke={getColor(type)}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
