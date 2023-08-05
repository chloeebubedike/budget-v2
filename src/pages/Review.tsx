import { Box, Divider } from "@mui/material";
import Spreadsheet from "react-spreadsheet";
import { TopPanel } from "../components/TopPanel/TopPanel";

export const Review = () => {
  const data = [
    [{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ];
  return (
    <Box>
      <TopPanel pageName="Review" />
      <Divider />
      <Spreadsheet data={data} />;
    </Box>
  );
};
