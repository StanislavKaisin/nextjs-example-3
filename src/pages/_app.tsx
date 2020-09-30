import { Box, CssBaseline } from "@material-ui/core";
import "../../styles/globals.css";
import React from "react";
import App from "next/app";
import Head from "next/head";
import {
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import theme from "../theme";
import Link from "next/link";

import { Router } from "next/dist/client/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });
NProgress.configure({ trickleRate: 0.02, trickleSpeed: 800 });

Router.events.on("routeChangeStart", () => {
  console.log("on routeChangeStart");
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  console.log("on routeChangeComplete");
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  console.log("on routeChangeError");
  NProgress.done();
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Microphones Shop</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            // className={classes.title}
          >
            Microphones Shop
          </Typography>
          <Typography
            variant="h6"
            // className={classes.title}
          >
            <pre> | </pre>
          </Typography>
          <Typography
            variant="h6"
            // className={classes.title}
          >
            <Link href="/people">
              <a>People page</a>
            </Link>
          </Typography>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box margin={8}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
