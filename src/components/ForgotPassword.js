import React from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
} from "@mui/material";
import "../Login.css";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");
  const forgotPassword = async (event) => {
    event.preventDefault();
    // insert email to reset password here
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("email sent");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            className="login-form"
          >
            <Paper
              variant="elevation"
              elevation={2}
              className="login-background"
            >
              <Grid item>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
              </Grid>
              <hr />
              <Grid item>
                <form onSubmit={ForgotPassword}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        required
                        type="email"
                        name="email"
                        id="email"
                        label="Email"
                        placeholder="xx@mail.com"
                      />
                    </Grid>
                    {/* <Grid item>
                      <TextField
                        required
                        type="password"
                        name="password"
                        id="password"
                        label="Password"
                        placeholder="***"
                      />
                    </Grid> */}
                    <Typography color="red">{errorMessage}</Typography>

                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgotPassword;
