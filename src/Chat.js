import React, { Component } from "react";
import { database, auth } from "./firebase.js";
import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import "./styles.css";

//firebase helper
const obj2Arr = (obj) => {
  let res = [];
  Object.entries(obj || {}).map(([key, value]) => {
    return res.push({ ...value, key });
  });
  return res;
};

class Chat extends Component {
  state = {
    messages: [],
    add: "",
    avatar: "",
    email: "",
    name: "",
  };

  componentDidMount() {
    database.ref("messages").on("value", (snapshot) => {
      const messages = obj2Arr(snapshot.val());
      this.setState({ messages, user: auth.currentUser.displayName });
    });

    console.log(auth.currentUser);
  }

  handleChange = (e) => this.setState({ add: e.target.value });

  handleSubmit = () => {
    const { add: text } = this.state;

    const user = auth.currentUser;
    const avatar = user && user.photoURL;
    const email = user && user.email;
    const name = user && user.displayName;

    const newMessage = { text, avatar, email, name };

    console.log(newMessage);

    this.setState({ add: "", avatar, email, name });
    database.ref("messages").push(newMessage);
  };

  handleLogout = () => auth.signOut();

  render() {
    const { messages, add, name } = this.state;
    const { handleChange, handleSubmit, handleLogout } = this;
    return (
      <>
        <List>
          {messages &&
            messages.map(({ key, text, avatar }) => {
              return (
                <ListItem key={key}>
                  <ListItemAvatar>
                    <Avatar src={avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={text} secondary={name} />
                </ListItem>
              );
            })}
        </List>
        <TextField value={add} onChange={handleChange} />
        <Button onClick={handleSubmit}>Send</Button>
        <Button onClick={handleLogout}>LogOut</Button>
      </>
    );
  }
}

export default Chat;
