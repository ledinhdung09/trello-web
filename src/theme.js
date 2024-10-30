//import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const APP_BAR_HEIGHT = "58px";
const BOARD_BAR_HEIGHT = "60px";
const BOARD_CONTENT_HEIGHT = `calc(100vh - (${APP_BAR_HEIGHT} + ${BOARD_BAR_HEIGHT}))`;
const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "56px";

const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT,
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange,
    //   },
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange,
    //   },
    // },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: "none",
          borderWidth: "0.5px",
          "&:hover": {
            borderWidth: "1px",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-body1": { fontSize: "0.875rem" },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          "& fieldset": {
            borderWidth: "0.5px !important",
          },
          "&:hover fieldset": {
            borderWidth: "1px !important",
          },
          "&.Mui-focused fieldset": {
            borderWidth: "1px !important",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: " 8px" /* Độ rộng của thanh cuộn */,
            height: " 8px" /* Độ cao của thanh cuộn ngang (nếu có) */,
          },
          "*::-webkit-scrollbar-track": {
            //background: "#f1f1f1" /* Màu nền của thanh cuộn */,
            borderRadius: " 8px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#dcdde1" /* Màu của thanh kéo */,
            borderRadius: " 8px" /* Độ bo tròn của thanh kéo */,
            border:
              "2px solid #f1f1f1" /* Để có khoảng trống giữa thanh kéo và track */,
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: " white" /* Màu khi hover */,
          },
        },
      },
    },
  },
});
export default theme;
