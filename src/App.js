import React from "react";
import Auth from "./components/Auth";
import Chat from "./components/Chat";
import { CssBaseline, Container, Typography } from "@mui/material";
import { APP_NAME } from "./constants";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: "32px" }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Welcome to {APP_NAME}!
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          A real-time chat platform to connect instantly.
        </Typography>
        <Auth />
        <Chat />
      </Container>
    </>
  );
};

export default App;
