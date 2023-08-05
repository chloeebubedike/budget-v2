import { Box, Divider, Typography } from "@mui/material";
import "../fonts/TenorSans-Regular.ttf";

import { TopPanel } from "../components/TopPanel/TopPanel";
import Spreadsheet from "react-spreadsheet";

export const Transactions = () => {
  const data = [
    [{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ];
  return (
    <Box>
      <TopPanel pageName="Transactions" />
      <Divider />
      <Spreadsheet data={data} />;
    </Box>
  );
};
