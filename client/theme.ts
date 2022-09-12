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
          "&.MuiButton-outlined": {
            backgroundColor: "#4683d9",
            color: "#fff",
            borderRadius: "10px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "bold",
            padding: "6px 16px",
            "&:hover": {
              backgroundColor: "#437CCE",
            },
          },

          "&.Mui-disabled": {
            opacity: "0.5",
            pointerEvents: "all",
            cursor: "not-allowed",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '& .MuiInput-root': {
            '&:before, :after, :hover:not(.Mui-disabled):before': {
              border: "none",
              borderColor: "transparent",
            },
          },
          
          "&.MuiInput:before": {
            border: "none",
            borderColor: "transparent",
          },
          "&.MuiOutlinedInput-notchedOutline": {
            border: "none",
            borderColor: "transparent",
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "none",
            borderColor: "transparent",
          },
          ".MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
            borderColor: "transparent",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
            borderColor: "transparent",
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            border: "none",
            borderColor: "transparent",
          },
          "&.MuiSelect-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiDialog-paper": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});
