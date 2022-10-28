import React from 'react';
import './link.css';

interface ILinkProps {
  linkName: string;
  size?: "default" | "small";
  onClick: () => void;
}

export const Link = ({ linkName, onClick, size = 'default' }: ILinkProps) => {
  return (
    <button onClick={onClick} className={`link link-${size}`}>
      {linkName}
    </button>
  );
};
