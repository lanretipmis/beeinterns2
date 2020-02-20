import React from "react";
import MessageState from "../context/message/MessageState";

import "./Chat.css";
import Header from '../components/header/Header'
import Input from "./input/Input";
import Messages from "./messages/Messages";

const Chat = () => {
  return (
    <MessageState>
      <Header/>
      <div className="Chat">
        <Messages />
        <Input />
      </div>
    </MessageState>
  );
};

export default Chat;
