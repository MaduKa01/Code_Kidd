import { Box, TableCell as MUITableCell, TableRow as MUITableRow, styled } from "@mui/material";

import Z_INDEX from "@/constants/z-index";

export const ScrollableTableContainer = styled(Box)`
  overflow: auto;
  max-width: 100%;
  padding-right: ${({ theme: { margins } }) => margins.quarck}px;
  max-height: ${({ theme: { margins } }) => margins.giant * 5}px;
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: ${({ theme: { roundness } }) => roundness.md}px;
    background: ${({ theme: { palette } }) => palette.grey[200]};
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { palette } }) => palette.grey[400]};
    border-radius: ${({ theme: { roundness } }) => roundness.sm}px;
  }
`;

export const TableStickyHeader = styled(MUITableRow)`
  position: sticky;
  top: 0;
  z-index: ${Z_INDEX.tableHead};
  background: ${({ theme: { palette } }) => palette.grey[200]};
`;

export const TableCell = styled(MUITableCell)`
  color: ${({ theme: { palette } }) => palette.grey[600]};
  font-size: ${({ theme: { typography } }) => typography.pxToRem(14)};
`;

export const HeaderTableCell = styled(MUITableCell)`
  text-transform: uppercase;
  color: ${({ theme: { palette } }) => palette.grey[800]};
  font-weight: bold;
  font-size: ${({ theme: { typography } }) => typography.pxToRem(12)};
  white-space: nowrap;
`;

type TableRowProps = {
  index: number;
  isClickable?: boolean;
};

/* eslint-disable */

export const TableRow = styled(MUITableRow, {
  shouldForwardProp: (props) => props !== "isClickable",
})<TableRowProps>`
  background: ${({ theme: { palette }, index }) =>
    index % 2 === 0 ? palette.secondary.main : palette.grey[100]};
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};

  &:hover {
    background: ${({ theme: { palette }, isClickable }) =>
      isClickable ? palette.grey[300] : "inherit"};
  }
`;

/* eslint-enable */
