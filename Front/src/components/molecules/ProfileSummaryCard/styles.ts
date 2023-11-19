"use client";

import { Box, Card, Typography, styled } from "@mui/material";

export const ProfileSummaryCardContainer = styled(Card)`
  padding: ${({ theme: { margins } }) => margins.xxxs}px;
  display: flex;
  align-items: center;
  gap: ${({ theme: { margins } }) => margins.xxxs}px;
  border-radius: ${({ theme: { roundness } }) => roundness.md}px;
`;

export const TextContainer = styled(Box)``;

export const ProfileName = styled(Typography)`
  color: ${({ theme: { fontColors } }) => fontColors.title};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
`;

export const UserKey = styled(Typography)`
  color: ${({ theme: { fontColors } }) => fontColors.secondaryText};
`;
