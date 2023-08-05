// src/theme.tsx
import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    tertiary: PaletteColor;
    error: PaletteColor;
  }
  interface PaletteOptions {
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    error?: PaletteColorOptions;
    tertiary: PaletteColorOptions;

    // Add more color options if needed
  }
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#B09ECF",
      main: "#C6BFD2", // Your primary color
      dark: "#746978",
    },
    secondary: {
      main: "#DDE8E4", // Your secondary color
      dark: "#D9D9D9",
    },
    tertiary: {
      light: "#F7F7F7",
      main: "#F4EEEC",
      dark: "#E8DAD4",
    },
    error: {
      main: "#f44336", // Your error color
    },

    // Add more colors as needed
  },
});

export default theme;
