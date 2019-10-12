import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6B7A52",
      light: "rgb(136, 148, 116)",
      dark: "rgb(74, 85, 57)",
      contrastText: "#fff"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: "#f44336"
    },
    background: {
      default: "#102027",
      paper: "#37474f"
    },
    text: {
      primary: "#eceff1",
      secondary: "#90caf9"
    },
    button: {
      borderColor: "#90caf9"
    }
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderColor: "#90caf9"
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#90caf9",
          borderWidth: 2
        },
        "&$focused $notchedOutline": {
          borderColor: "#90caf9"
        },
        "&:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 1000px black inset"
        }
      },
      notchedOutline: {}
    },
    MuiSelect: {
      icon: {
        fill: "#90caf9"
      }
    },
    SelectInput: {
      minWidth: "200px"
    }
  }
});

export default theme;
