"use client";

import { Box, Card, Typography, styled } from "@mui/material";

export const LoginCardWrapper = styled(Card)`
  width: ${({ theme: { margins } }) => margins.giant * 3.2 + margins.xxxs}px;
  height: ${({ theme: { margins } }) => margins.giant * 4.2 + margins.xs}px;
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme: { roundness } }) => roundness.sm}px;
`;

export const LoginTitleCard = styled(Card)`
  background-color: ${({ theme: { palette } }) => palette.secondary.main};
  position: absolute;
  width: ${({ theme: { margins } }) => margins.xxxl * 3}px;
  height: ${({ theme: { margins } }) => margins.giant}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme: { roundness } }) => roundness.sm}px;
  box-shadow:
    rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem,
    rgba(145, 127, 179, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem;
  top: -10%;
`;

export const LoginFormContainer = styled(Box)`
  height: 100%;
  width: 100%;
  padding: ${({ theme: { margins } }) => `${margins.giant}px ${margins.xxs}px 0 ${margins.xxs}px`};
`;

export const ForgotPasswordLink = styled(Typography)`
  color: ${({ theme: { palette } }) => palette.grey[600]};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`;

export const DontHaveAnAccountText = styled(Typography)`
  text-decoration: none;
`;

export const DontHaveAnAccountLink = styled(Typography)`
  color: ${({ theme: { palette } }) => palette.primary.main};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
