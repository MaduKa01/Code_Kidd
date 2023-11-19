import { styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

type PageLayoutContainerProps = {
  backgroundColor?: string;
  ignoreSideBar: boolean;
  ignoreAppBar: boolean;
};

export const PageLayoutGrid = styled(Grid, {
  shouldForwardProp: (props) => props !== "ignoreSideBar" && props !== "ignoreAppBar",
})<PageLayoutContainerProps>`
  background-color: ${({ theme: { palette }, backgroundColor }) =>
    backgroundColor ?? palette.secondary.dark};
  overflow-x: hidden;
  padding-left: ${({ theme: { sideBar, margins }, ignoreSideBar }) =>
    !ignoreSideBar ? sideBar.width + margins.sm : 0}px;
  padding-top: ${({ theme: { appBar, margins }, ignoreAppBar }) =>
    !ignoreAppBar && appBar.height + margins.xxxs}px;
  padding-bottom: ${({ theme: { margins } }) => margins.xxxs}px;
  padding-right: 0px;
  min-width: 100%;
  width: 100%;
  height: ${({ ignoreSideBar }) => (ignoreSideBar ? "100vh" : "100%")};
  margin: 0;
`;
