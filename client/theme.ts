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
          // "& .MuiInputBase-input": {
          //   borderRadius: 4,
          //   position: "relative",
          //   border: "none",
          //   fontSize: 16,
          //   padding: "10px 26px 10px 12px",
          //   fontFamily: [
          //     "-apple-system",
          //     "BlinkMacSystemFont",
          //     '"Segoe UI"',
          //     "Roboto",
          //     '"Helvetica Neue"',
          //     "Arial",
          //     "sans-serif",
          //     '"Apple Color Emoji"',
          //     '"Segoe UI Emoji"',
          //     '"Segoe UI Symbol"',
          //   ].join(","),
          //   "&:focus": {
          //     borderRadius: 4,
          //     borderColor: "none",
          //     boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
          //   },
          // },
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
