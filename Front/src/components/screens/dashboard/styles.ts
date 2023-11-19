"use client";

import { Box, styled } from "@mui/material";

export const CardTitleWrapper = styled(Box)`
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme: { margins } }) => margins.nano}px;
`;
