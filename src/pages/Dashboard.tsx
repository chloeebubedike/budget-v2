import { Box, Divider } from "@mui/material";
import { SpreadsheetBox } from "../components/Spreadsheet/SpreadsheetBox";
import { TopPanel } from "../components/TopPanel/TopPanel";

export const Dashboard = () => {
  return (
    <Box>
      <TopPanel pageName="Dashboard" />
      <Divider />
      <SpreadsheetBox spreadsheetName="Income" />
    </Box>
  );
};
