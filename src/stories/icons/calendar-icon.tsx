import { getColor, IIconProps } from './utils';

export const CalendarIcon = ({ type }: IIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={getColor(type)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3H9C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3H5C3.34315 3 2 4.34315 2 6V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V6C22 4.34315 20.6569 3 19 3H17ZM15 5C15 5.55228 15.4477 6 16 6C16.5523 6 17 5.55228 17 5H19C19.5523 5 20 5.44772 20 6V7H4V6C4 5.44772 4.44772 5 5 5H7C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5H15ZM4 9V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V9H4ZM15 16.5C15 15.9477 15.4477 15.5 16 15.5H16.002C16.5543 15.5 17.002 15.9477 17.002 16.5V16.502C17.002 17.0543 16.5543 17.502 16.002 17.502H16C15.4477 17.502 15 17.0543 15 16.502V16.5ZM12 15.5C11.4477 15.5 11 15.9477 11 16.5V16.502C11 17.0543 11.4477 17.502 12 17.502H12.002C12.5543 17.502 13.002 17.0543 13.002 16.502V16.5C13.002 15.9477 12.5543 15.5 12.002 15.5H12ZM7 16.5C7 15.9477 7.44772 15.5 8 15.5H8.002C8.55428 15.5 9.002 15.9477 9.002 16.5V16.502C9.002 17.0543 8.55428 17.502 8.002 17.502H8C7.44772 17.502 7 17.0543 7 16.502V16.5ZM16 11.5C15.4477 11.5 15 11.9477 15 12.5V12.502C15 13.0543 15.4477 13.502 16 13.502H16.002C16.5543 13.502 17.002 13.0543 17.002 12.502V12.5C17.002 11.9477 16.5543 11.5 16.002 11.5H16ZM11 12.5C11 11.9477 11.4477 11.5 12 11.5H12.002C12.5543 11.5 13.002 11.9477 13.002 12.5V12.502C13.002 13.0543 12.5543 13.502 12.002 13.502H12C11.4477 13.502 11 13.0543 11 12.502V12.5ZM8 11.5C7.44772 11.5 7 11.9477 7 12.5V12.502C7 13.0543 7.44772 13.502 8 13.502H8.002C8.55428 13.502 9.002 13.0543 9.002 12.502V12.5C9.002 11.9477 8.55428 11.5 8.002 11.5H8Z"
      />
    </svg>
  );
};
