import { ListItemButton, styled } from "@mui/material";

export type SideBarListItemProps = {
  isSelected: boolean;
};
export const SideBarListItem = styled(ListItemButton, {
  shouldForwardProp: (props) => props !== "isSelected",
})<SideBarListItemProps>`
  cursor: pointer;
  gap: ${({ theme: { margins } }) => margins.quarck}px;
  padding: ${({ theme: { margins } }) => margins.xxxs}px;
  color: ${({ theme: { palette } }) => palette.secondary.main};
  border-radius: ${({ theme: { roundness } }) => roundness.sm}px;
  background-color: ${({ theme: { palette }, isSelected }) => isSelected && palette.secondary.dark};

  :hover {
    background-color: ${({ theme: { palette } }) => palette.secondary.dark};
  }
`;
