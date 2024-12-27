import React, { useState, useEffect } from "react";
import { collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Box, Typography, Paper, List, ListItem, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { APP_NAME } from "../constants";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setMessages(snapshot.docs.map((doc) => doc.data()))
    );
    return () => unsubscribe();
  }, []);

  const handleSend = async () => {
    if (!newMessage.trim()) return;
    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        user: auth.currentUser.displayName,
        createdAt: new Date(),
      });
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <Paper sx={{ padding: "15px", marginBottom: "15px" }}>
        <Typography variant="h5" gutterBottom color="primary">
          {APP_NAME} Chat Room
        </Typography>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>{`${msg.user}: ${msg.text}`}</ListItem>
          ))}
        </List>
      </Paper>

      <TextField
        label="Type your message"
        fullWidth
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        sx={{ marginBottom: "10px" }}
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        onClick={handleSend}
        startIcon={<SendIcon />}
      >
        Send
      </Button>
    </Box>
  );
};

export default Chat;
