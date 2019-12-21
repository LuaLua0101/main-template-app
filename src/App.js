import React, { useState } from "react";
import { GlobalStateProvider } from "./Store";
import "./utils/firebase";
import RouteMap from "./Route";
import { BrowserRouter as Router, Link as ReactLink } from "react-router-dom";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import { SnackbarProvider } from "notistack";
import { withGetScreen } from "react-getscreen";
import DynamicImport from "./utils/lazyImport";

const LoginPage = DynamicImport(() => import("./components/pages/login"));
const Menu = DynamicImport(() => import("./Menu"));

const useStyles = makeStyles(theme => ({
  root: {},
  rootPC: {
    width: 500,
    marginLeft: "auto",
    marginRight: "auto"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Segoe UI"].join(",")
  }
});

const App = props => {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);

  return (
    <GlobalStateProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3} autoHideDuration={1000}>
          <Router>
            {localStorage.getItem("@token") ? (
              <div
                className={
                  props.isMobile() || props.isTablet()
                    ? classes.root
                    : classes.rootPC
                }
              >
                <AppBar
                  position="static"
                  style={{
                    backgroundColor: "#44cbdf",
                    backgroundImage:
                      "linear-gradient(141deg,  #44cbdf 15%, #01ca7c 85%)",
                    color: "#fbfefe",
                    boxShadow: "none"
                  }}
                >
                  <Toolbar>
                    <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
                      onClick={() => {
                        setMenu(true);
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                      Quản lý lớp học
                    </Typography>
                  </Toolbar>
                </AppBar>
                <Grid item xs={12}>
                  <RouteMap />
                </Grid>
                <Drawer
                  open={menu}
                  onClose={() => {
                    setMenu(false);
                  }}
                >
                  <Menu
                    close={() => {
                      setMenu(false);
                    }}
                  />
                </Drawer>
              </div>
            ) : (
              <LoginPage />
            )}
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </GlobalStateProvider>
  );
};

export default withGetScreen(App);
