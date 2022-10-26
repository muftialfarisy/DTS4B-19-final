import React, { useState } from "react";
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
import Alert from "@mui/material/Alert";
import "../Login.css";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage("success login");
      navigate("/");
    } catch (error) {
      // return <Alert severity="error">{error.message}</Alert>;
      setErrorMessage(error.message);
    }
  };
  const forgotPassword = async (event) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage("password has been reset, please check your email");
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
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        required
                        type="email"
                        name="email"
                        id="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="xx@mail.com"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        type="password"
                        name="password"
                        id="password"
                        label="Password"
                        placeholder="***"
                      />
                    </Grid>
                    {/* <Typography color="red">{errorMessage}</Typography> */}
                    {errorMessage ? (
                      <Alert severity="error">{errorMessage}</Alert>
                    ) : successMessage ? (
                      <Alert severity="success">
                        This is a success alert — check it out!
                      </Alert>
                    ) : (
                      <div></div>
                    )}
                    {/* {
                      if(errorMessage){
                        return(
                      <Alert severity="error">{errorMessage}</Alert>
                        )
                      }
                    } */}
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
                  <Button onClick={forgotPassword}>Forgot password</Button>
                </form>
              </Grid>
              <Grid item>
                {/* <Link href="forgot">Forgot password</Link> */}
              </Grid>
              <Grid item>
                <Link href="register" variant="body2">
                  Register
                </Link>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
