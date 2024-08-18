import React from "react";
import { inject, observer } from "mobx-react";
import apphistory from "apphistory";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Notification from "common/component/notification";
import { pxToRem } from "theme";

const useStyles = makeStyles({
  root: {
    minWidth: 575,
  },
});

function Login({ user }: any) {
  const classes = useStyles();

  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const [notification, setNotification] = React.useState({
    open: false,
    severity: "",
    message: "",
  });

  const onChange = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onLogin = async () => {
    // apphistory.push('/chatbot')
    const signUpData = {
      name: "suraj",
      password: "12345",
      email: "surajdhakal@abc.com"
    }
    try {
      await user.signUp(signUpData);
    } catch (e) {
      setNotification({
        open: true,
        severity: "error",
        message: e?.data?.error?.message,
      });
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={pxToRem(240)}>
      <Card className={classes.root} variant="outlined">
        <Box m={pxToRem(12)} textAlign="center">
          <Typography variant="h4" color="primary">
            Login
          </Typography>
        </Box>
        <Box m={pxToRem(12)}>
          <TextField
            label="Email"
            name="email"
            value={loginData.email}
            onChange={onChange}
            type="text"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box m={pxToRem(12)}>
          <TextField
            label="Password"
            name="password"
            value={loginData.password}
            onChange={onChange}
            type="password"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box m={pxToRem(12)}>
          <Button variant="contained" onClick={onLogin} color="primary">
            Login
          </Button>
        </Box>
      </Card>
      <Notification
        open={notification.open}
        onClose={() => setNotification({ ...notification, open: false })}
        severity={notification.severity}
      >
        {notification?.message}
      </Notification>
    </Box>
  );
}
export default inject("user")(observer(Login));
