"use client";

import { Box, Card, Typography, styled } from "@mui/material";
import Link from "next/link";

export const RegisterCardWrapper = styled(Card)`
  width: ${({ theme: { margins } }) => margins.giant * 6 + margins.xxxs}px;
  min-height: ${({ theme: { margins } }) => margins.giant * 6.4 + margins.xxxs}px;
  height: auto;
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme: { roundness } }) => roundness.sm}px;
  padding: ${({ theme: { margins } }) => `0px ${margins.xs}px ${margins.xxs}px ${margins.xs}px`};
  margin-top: ${({ theme: { margins } }) => `${margins.giant}px`};
`;

export const RegisterTitleCard = styled(Card)`
  position: absolute;
  width: ${({ theme: { margins } }) => margins.xxxl * 3}px;
  height: ${({ theme: { margins } }) => margins.giant}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme: { roundness } }) => roundness.sm}px;

  top: -10%;
`;

export const RegisterFormContainer = styled(Box)`
  height: 100%;
  width: 100%;
  padding: ${({ theme: { margins } }) =>
    `${margins.giant}px ${margins.giant}px 0 ${margins.giant}px`};
`;

export const AlreadyHaveAnAccountText = styled(Typography)`
  text-decoration: none;
`;

export const AlreadyHaveAnAccountLink = styled(Link)`
  color: ${({ theme: { palette } }) => palette.primary.main};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
