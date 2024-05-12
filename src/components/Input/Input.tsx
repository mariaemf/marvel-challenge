import React from "react";
import { StyledInput } from "./styled.ts";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

function Input({ placeholder, ...rest }: IInputProps) {
  return <StyledInput placeholder={placeholder} {...rest} />;
}

export default Input;
