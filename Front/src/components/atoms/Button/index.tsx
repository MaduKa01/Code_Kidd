import { ButtonProps as MUIButtonProps } from "@mui/material";
import React from "react";

import { ButtonContainer } from "./styles";
import { ButtonMode } from "./types";

export type ButtonProps = MUIButtonProps & {
  mode: ButtonMode;
  height?: number | string;
};

const Button: React.FC<ButtonProps> = ({ children, mode, height, ...rest }) => {
  const variant = mode === "faded" ? "contained" : mode;
  return (
    <ButtonContainer variant={variant} style={{ height }} mode={mode} {...rest}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
