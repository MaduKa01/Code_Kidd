import { Typography, styled } from "@mui/material";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const SideBarContainer = styled(Grid)`
  width: ${({ theme: { sideBar } }) => sideBar.width * 1.05}px;
  border-radius: ${({ theme: { roundness } }) => roundness.sm}px;
  background-color: ${({ theme: { sideBar } }) => sideBar.background};
  max-height: ${({ theme: { margins } }) => `calc(100vh - ${margins.xxxs * 2}px)`};
  position: fixed;
  left: ${({ theme: { margins } }) => margins.xxxs}px;
  top: ${({ theme: { margins } }) => margins.xxxs}px;
  bottom: ${({ theme: { margins } }) => margins.xxxs}px;

  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.4em;
    border-radius: ${({ theme: { roundness } }) => roundness.sm}px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    border-radius: ${({ theme: { roundness } }) => roundness.sm}px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme: { palette } }) => palette.secondary.dark};
    border-radius: ${({ theme: { roundness } }) => roundness.sm}px;
    outline: 1px solid slategrey;
  }
`;

export const SideBarInfoContainer = styled(Grid)`
  gap: ${({ theme: { margins } }) => margins.xs}px;
  padding: ${({ theme: { margins } }) => margins.nano}px;
`;
export const SideBarContentContainer = styled(Grid)`
  gap: ${({ theme: { margins } }) => margins.nano}px;
  width: 100%;
  padding: ${({ theme: { margins } }) => margins.nano}px;
`;

export const SideBarDivider = styled(Divider)`
  width: 100%;
  background-color: ${({ theme: { palette } }) => palette.secondary.main};
`;

export const SideBarItemsContainer = styled(Grid)`
  gap: ${({ theme: { margins } }) => margins.nano}px;
  padding: ${({ theme: { margins } }) => margins.nano}px;
`;

export const UserNameText = styled(Typography)`
  text-align: center;
`;
