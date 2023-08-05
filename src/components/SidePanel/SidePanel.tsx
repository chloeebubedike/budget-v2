import { Box, Divider, Drawer, List } from "@mui/material";

import { SidePanelButton } from "./SidePanelButton";

export const SidePanel = () => {
  return (
    <Drawer anchor="left" open={true} variant="persistent">
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.tertiary.light,
          borderRight: "1px solid black",
          height: "100%",
          width: "215px",
          padding: "0px 20px",
        }}
      >
        <Box sx={{ padding: "40px 0px", textAlign: "center" }}>
          <img
            src="src/assets/holding_plant.png"
            alt="Icon"
            style={{ width: "40px" }}
          />
        </Box>
        <Divider sx={{ backgroundColor: "white" }} />
        <List sx={{ margin: "50px 0px" }}>
          <SidePanelButton pageName="Dashboard" />
          <SidePanelButton pageName="Budget" />
          <SidePanelButton pageName="Review" />
          <SidePanelButton pageName="Transactions" />
        </List>
      </Box>
    </Drawer>
  );
};
