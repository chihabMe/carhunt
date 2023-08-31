"use client";
import React, { ReactNode } from "react";
interface Props {
  className?: string;
  children: ReactNode;
  handleClick?: () => void;
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props.handleClick}
      className={`active:ring-1 active:ring-primary rounded-full capitalize px-8 py-2.5 font-medium cursor-pointer bg-primary text-sm text-white  ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
