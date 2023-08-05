import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

type SidePanelButtonProps = {
  pageName: "Dashboard" | "Budget" | "Review" | "Transactions";
};

export const SidePanelButton = ({ pageName }: SidePanelButtonProps) => {
  const navigate = useNavigate();

  let Icon = undefined;
  let navigationPath = "/";

  switch (pageName) {
    case "Dashboard":
      Icon = (
        <HomeIcon
          sx={{ color: (theme: Theme) => theme.palette.tertiary.light }}
        />
      );
      navigationPath = `/${pageName.toLowerCase()}`;
      break;
    case "Budget":
      Icon = (
        <PieChartOutlinedIcon
          sx={{ color: (theme: Theme) => theme.palette.tertiary.light }}
        />
      );
      navigationPath = `/${pageName.toLowerCase()}`;
      break;
    case "Review":
      Icon = (
        <BarChartOutlinedIcon
          sx={{ color: (theme: Theme) => theme.palette.tertiary.light }}
        />
      );
      navigationPath = `/${pageName.toLowerCase()}`;
      break;
    case "Transactions":
      Icon = (
        <ReceiptLongOutlinedIcon
          sx={{ color: (theme: Theme) => theme.palette.tertiary.light }}
        />
      );
      navigationPath = `/${pageName.toLowerCase()}`;
      break;
    default:
      return null;
  }

  return (
    <ListItemButton
      onClick={() => {
        navigate(navigationPath);
      }}
      sx={{
        margin: "20px 0px",
        "&:hover": {
          backgroundColor: (theme) => theme.palette.secondary.main,
          color: (theme) => theme.palette.primary.main,
        },
      }}
    >
      <ListItemIcon>{Icon}</ListItemIcon>
      <ListItemText primary={pageName} />
    </ListItemButton>
  );
};
