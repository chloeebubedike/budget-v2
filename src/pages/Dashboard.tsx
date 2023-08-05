import { Box, Divider, Typography } from "@mui/material";
import Spreadsheet from "react-spreadsheet";
import { TopPanel } from "../components/TopPanel/TopPanel";

export const Dashboard = () => {
  const data = [
    [{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ];
  return (
    <Box>
      <TopPanel pageName="Dashboard" />
      <Divider />
      <Spreadsheet data={data} />;
    </Box>
  );
};
