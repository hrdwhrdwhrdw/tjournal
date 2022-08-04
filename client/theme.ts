import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4683d9",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-contained": {
            backgroundColor: "white",
            color: "black",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "10px",
            boxShadow:
              "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)",
            "&:hover": {
              backgroundColor: "white",
              boxShadow:
                "0 1px 1px rgb(0 0 0 / 18%), 0 4px 7px rgb(0 0 0 / 8%), 0 -1px 0 rgb(0 0 0 / 8%), -1px 0 0 rgb(0 0 0 / 8%), 1px 0 0 rgb(0 0 0 / 15%)",
            },
          },
          "&.MuiButton-primary": {
            backgroundColor: "#4683d9",
            "&:hover": {
              backgroundColor: "#437CCE",
            },
          },
          "&.Mui-disabled": {
            opacity: "0.5",
            pointerEvents: "all",
            cursor: "not-allowed"
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiDialog-paper": {
            boxShadow: "none"
          },
        },
      },
    },
  },
});
