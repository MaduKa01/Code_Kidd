"use client";
import { Box, styled } from "@mui/material";

export const FallbackWrapper = styled(Box)`
  padding: ${({ theme: { margins } }) => margins.xxxs}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
