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
import "../Login.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
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
                  Register
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
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="xx@mail.com"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        type="password"
                        id="password"
                        name="password"
                        label="Password"
                        placeholder="***"
                      />
                    </Grid>
                    {/* <Grid item>
                      <TextField
                        required
                        type="Username"
                        id="outlined-required"
                        label="text"
                        placeholder="xxxx"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        type="password"
                        id="outlined-required"
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
              <Grid item>
                <Link href="login" variant="body2">
                  Login
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
