import { styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Z_INDEX from "@/constants/z-index";

type AppBarGridProps = {
  isScrolling: boolean;
  ignoreSideBar: boolean;
};
export const AppBarGrid = styled(Grid, {
  shouldForwardProp: (props) => props !== "isScrolling" && props !== "ignoreSideBar",
})<AppBarGridProps>`
  padding: ${({ theme: { margins } }) => margins.xxxs}px;
  z-index: ${Z_INDEX.appBar};
  background-color: ${({ theme: { palette }, isScrolling }) =>
    isScrolling ? "rgba(255, 255, 255, 0.8)" : palette.secondary.dark};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  height: ${({ theme: { appBar } }) => appBar.height}px;
  border-radius: ${({ theme: { roundness } }) => roundness.sm}px;
  position: fixed;
  left: ${({ theme: { margins, sideBar }, ignoreSideBar }) =>
    ignoreSideBar ? 0 : sideBar.width + margins.sm}px;
  right: ${({ theme: { margins } }) => margins.sm}px;
  top: ${({ theme: { margins } }) => margins.xxxs}px;
  overflow-x: hidden;
  box-shadow: ${({ isScrolling }) =>
    isScrolling &&
    "rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem"};
  backdrop-filter: ${({ isScrolling }) => isScrolling && "saturate(200%) blur(1.875rem)"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
`;
