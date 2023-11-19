import { Box, styled } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import { SideBarListItemProps } from "../MainMenuItems/styles";

export const BoxContainer = styled(Box)`
  background-color: #747677;
  min-height: ${({ theme: { margins } }) => `calc(100vh - ${margins.xxxs * 7}px)`};
  position: relative;
`;

export const ListContainer = styled(List)`
  background-color: #29292d;
  gap: ${({ theme: { margins } }) => margins.giant}px;
  border-top-left-radius: ${({ theme: { roundness } }) => roundness.lg}px;

  min-height: ${({ theme: { margins } }) => `calc(100vh - ${margins.xxxs * 12}px)`};
  max-height: ${({ theme: { margins } }) => `calc(100vh - ${margins.xxxs * 12}px)`};
  width: "100%";
  overflow-x: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
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

export const ListItemContainer = styled(ListItem)`
  z-index: 100;
  :hover {
    color: white;
  }
`;

export const BottomBarListItem = styled(ListItemButton, {
  shouldForwardProp: (props) => props !== "isSelected",
})<SideBarListItemProps>`
  cursor: pointer;
  gap: ${({ theme: { margins } }) => margins.quarck}px;
  padding: ${({ theme: { margins } }) => margins.xxxs}px;
  color: ${({ theme: { palette } }) => palette.secondary.main};
  border-radius: ${({ theme: { roundness } }) => roundness.sm}px;
  background-color: ${({ theme: { palette }, isSelected }) => isSelected && palette.primary.main};
  :hover {
    background-color: ${({ theme: { palette } }) => palette.primary.main};
  }
`;
