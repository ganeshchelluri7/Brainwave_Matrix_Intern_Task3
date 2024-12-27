import React from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Button, Box, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LogoutIcon from "@mui/icons-material/Logout";
import { APP_NAME } from "../constants";

const Auth = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
      {!auth.currentUser ? (
        <Box>
          <Typography variant="h5" color="primary" gutterBottom>
            Welcome to {APP_NAME}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<GoogleIcon />}
            onClick={handleLogin}
          >
            Sign in with Google
          </Button>
        </Box>
      ) : (
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Logout from {APP_NAME}
        </Button>
      )}
    </Box>
  );
};

export default Auth;
