import { Box, Typography, styled } from "@mui/material";
import Spreadsheet from "react-spreadsheet";
import { useState } from "react";

type SpreadsheetBoxProps = {
  spreadsheetName:
    | "Income"
    | "Bills and subscriptions"
    | "Expenses"
    | "Savings";
};

const Container = styled(Box)(() => ({
  border: "1px black solid",
  display: "inline-flex",
}));

const TypographyContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  height: "57px",
  padding: "0px 20px",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderBottom: "1px black solid",
}));

export const SpreadsheetBox = ({ spreadsheetName }: SpreadsheetBoxProps) => {
  const [data, setData] = useState([
    [{ value: "Full time" }, { value: "£400" }, { value: "£400" }],
    [{ value: "Interest" }, { value: "£60" }, { value: "£80" }],
    [{ value: "Total" }, { value: "£460" }, { value: "£480" }],
  ]);
  return (
    <Container>
      <Box>
        <TypographyContainer>
          <Typography sx={{ fontWeight: "bold" }}>{spreadsheetName}</Typography>
        </TypographyContainer>
        <Spreadsheet
          data={data}
          columnLabels={["", "budget", "actual"]}
          hideRowIndicators
        />
      </Box>
    </Container>
  );
};
