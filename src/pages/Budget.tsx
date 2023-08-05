import { Box, Divider, styled } from "@mui/material";
import { SpreadsheetBox } from "../components/Spreadsheet/SpreadsheetBox";
import { TopPanel } from "../components/TopPanel/TopPanel";

const SpreadsheetContainer = styled(Box)(() => ({
  marginTop: "50px",
  display: "flex",
  gap: "10px",
}));

export const Budget = () => {
  return (
    <Box>
      <TopPanel pageName="Budget" />
      <Divider />
      <SpreadsheetContainer>
        <SpreadsheetBox spreadsheetName="Income" />
        <SpreadsheetBox spreadsheetName="Bills and subscriptions" />
        <SpreadsheetBox spreadsheetName="Expenses" />
        <SpreadsheetBox spreadsheetName="Savings" />
      </SpreadsheetContainer>
    </Box>
  );
};
