"use client";

import { Box, Typography, styled } from "@mui/material";

export const AlertBlockContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { margins } }) => margins.xxxs}px;
  align-items: center;
  justify-content: center;
`;

export const AlertBlockTitle = styled(Typography)`
  white-space: nowrap;
  margin-bottom: ${({ theme: { margins } }) => margins.nano}px;
  color: ${({ theme: { fontColors } }) => fontColors.title};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

export const AlertBlockDescription = styled(Typography)`
  white-space: nowrap;
  color: ${({ theme: { fontColors } }) => fontColors.description};
  font-size: ${({ theme: { fontSize } }) => fontSize.xxs}px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
  margin-bottom: ${({ theme: { margins } }) => margins.nano}px;
`;
