import { Button, styled } from "@mui/material";
import chroma from "chroma-js";

import { ButtonMode } from "./types";

export type ButtonContainerProps = {
  height?: number;
  mode: ButtonMode;
};
export const ButtonContainer = styled(Button)<ButtonContainerProps>`
  height: ${({ theme: { margins }, height }) => height || margins.md}px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  margin: ${({ theme: { margins } }) => margins.nano}px;
  border-radius: ${({ theme }) => theme.roundness.sm}px;
  padding: ${({ theme }) => theme.margins.xxxs}px;
  align-items: center;
  margin: 0;
  color: ${({ mode, theme: { palette } }) => {
    switch (mode) {
      case "contained":
        return "white";
      case "outlined":
        return palette.primary.main;
      case "faded":
        return palette.primary.main;

      default:
        return null;
    }
  }};
  &:hover {
    background-color: ${({ theme: { palette }, mode }) => {
    /* eslint-disable */
      // prettier-ignore
    if (mode !== "outlined") {
        return `${chroma(palette.primary.light).brighten()}`;
      }
    
    }};

    color: ${({ theme: { palette }, mode }) =>
      mode === "faded" && `${chroma(palette.primary.main).darken()}`};
  }
      /* eslint-enable */
  background-color: ${({ mode, theme: { palette } }) => {
    switch (mode) {
      case "contained":
        return palette.primary.main;
      case "outlined":
        return "transparent";
      case "faded":
        return `${chroma(palette.primary.light).brighten(2)}`;

      default:
        return null;
    }
  }};
`;
