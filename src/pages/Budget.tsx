import { Box, Divider, styled } from "@mui/material";
import { SpreadsheetBox } from "../components/Spreadsheet/SpreadsheetBox";
import { TopPanel } from "../components/TopPanel/TopPanel";

const SpreadsheetContainer = styled(Box)(() => ({
  marginTop: "50px",
  display: "flex",
  gap: "150px",
  flexWrap: "wrap",
}));

const TopPanelDivider = styled(Divider)(() => ({
  marginRight: "100px",
}));

export const Budget = () => {
  return (
    <Box>
      <TopPanel pageName="Budget" />
      <TopPanelDivider />
      <SpreadsheetContainer>
        <SpreadsheetBox spreadsheetName="Income" />
        <SpreadsheetBox spreadsheetName="Bills and subscriptions" />
        <SpreadsheetBox spreadsheetName="Expenses" />
        <SpreadsheetBox spreadsheetName="Savings" />
      </SpreadsheetContainer>
    </Box>
  );
};
