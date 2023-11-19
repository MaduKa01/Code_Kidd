"use client";

import { Card, Typography, styled } from "@mui/material";

export const FallbackWrapper = styled(Card)`
  padding: ${({ theme: { margins } }) => margins.xxxs}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PermissionsTitle = styled(Typography)`
  white-space: nowrap;
  margin-bottom: ${({ theme: { margins } }) => margins.nano}px;
  color: ${({ theme: { fontColors } }) => fontColors.title};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;
