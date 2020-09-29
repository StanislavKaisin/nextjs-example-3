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
