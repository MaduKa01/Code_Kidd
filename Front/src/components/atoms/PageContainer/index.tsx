import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export type PageContainerProps = {
  children: React.ReactNode;
};
const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <Grid
      container
      spacing={2}
      style={{ width: "100%", marginLeft: 0, marginRight: 0 }}
      columns={12}
    >
      {children}
    </Grid>
  );
};

export default PageContainer;
