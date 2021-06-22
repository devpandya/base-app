import React, { useCallback, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import * as Actions from "../../../Redux/Actions";
import { getTextResourceValueByKey } from "../../../Utility/resourceFunctions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  errorLabel: {
    color: theme.palette.error.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LogIn = ({ logInRequested, authError }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const onClick = useCallback(async () => {
    await logInRequested(username, password, remember);
  }, [username, password, remember, logInRequested]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => {
            setUsername(e.currentTarget.value);
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <Grid container justify="flex-start">
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
              }
              label="Remember me"
            />
          </Grid>
        </Grid>

        {authError && (
          <label className={classes.errorLabel}>
            {getTextResourceValueByKey(authError)}
          </label>
        )}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onClick}
        >
          Sign In
        </Button>
        <Grid container justify="space-between">
          <Grid item>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => state.auth;
const mapDispatchToProps = (dispatch) => ({
  logInRequested: (username, password, remember) =>
    dispatch(Actions.logInRequested(username, password, remember)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
