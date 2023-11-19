"use client";

import { Card, styled } from "@mui/material";

export const NavigationListCard = styled(Card)`
  padding: ${({ theme: { margins } }) => margins.xxxs}px;
  border-radius: ${({ theme: { roundness } }) => roundness.md}px;
`;
