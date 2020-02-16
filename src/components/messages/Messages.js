import React, { useContext, useEffect, useRef } from "react";
import MessageContext from "../../context/message/messageContext";

import "./Messages.css";
import Message from "./message/Message";

const Messages = () => {
  const messageContext = useContext(MessageContext);
  const { messages } = messageContext;

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    const messagesEndRef = document.querySelector(".messages_container");
    const scrollHeight = messagesEndRef.scrollHeight;
    const height = messagesEndRef.clientHeight;
    const maxScrollTop = scrollHeight - height;
    messagesEndRef.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="messages_container" ref={messagesEndRef}>
      {messages.map(msg => (
        <Message msg={msg} key={msg.id} />
      ))}
    </div>
  );
};

export default Messages;
