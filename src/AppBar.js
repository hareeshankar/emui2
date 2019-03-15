import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import indigo from "@material-ui/core/colors/indigo";
import { withContext } from "./AppContext";

const styles = {
  root: {
    flexGrow: 1
  }
};
const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: indigo
  }
});
const SignOutBtn = ({ user, token, onSignOut }) => {
  // This is a dumb "stateless" component
  return token ? (
    <div Style="display: inline-block; padding: 0px 10px 0px 10px;">
      <button className="btn waves-effect waves-light pink lighten-4">
        <span href="javascript:;" onClick={onSignOut}>
          Sign out
        </span>
      </button>
    </div>
  ) : null;
};
function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" className="typo">
          <Typography variant="h4" color="inherit">
            <span className="appbar">Event Manager</span>
          </Typography>

        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const sabwst = withStyles(styles)(SimpleAppBar)
export default withContext(sabwst);
