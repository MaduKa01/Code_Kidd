import { Box, styled } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";

export const BottomBarContainer = styled(Box)`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  height: auto;
  background-color: ${({ theme }) => theme.sideBar.background};
  height: ${({ theme: { appBar } }) => appBar.height}px;
  z-index: 100;
`;

export const BottomNavigationContainer = styled(BottomNavigation)`
  background-color: ${({ theme }) => theme.sideBar.background};
  color: white;
`;
