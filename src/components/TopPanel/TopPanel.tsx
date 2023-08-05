import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type TopPanelProps = {
  pageName: string;
};

export const TopPanel = ({ pageName }: TopPanelProps) => {
  const currentDate = new Date();

  function formatMonthYear(date: Date) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${year}`;
  }

  const formattedDate = formatMonthYear(currentDate);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "1300px",
        height: "115px",
        paddingTop: "20px",
        // width: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography
            sx={{
              fontFamily: "Tenor Sans, sans-serif",
              fontSize: "24px",
              lineHeight: "28px",
              letterSpacing: 3.2,
            }}
          >
            {formattedDate}
          </Typography>
          <ExpandMoreIcon />
        </Box>
        <Typography sx={{ fontSize: "20px", letterSpacing: 2.75 }}>
          {pageName}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
        <ArrowBackIcon />
        <ArrowForwardIcon />
      </Box>
    </Box>
  );
};
