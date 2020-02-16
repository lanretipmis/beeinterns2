import React, { useState, useContext } from "react";
import uuid from "uuid";
import MessageContext from "../../context/message/messageContext";
import btn from "./btn.png";
import btn_disable from "./btn_disable.png";
import "./Input.css";

const Input = () => {
  const messageContext = useContext(MessageContext);
  const { sendMessage } = messageContext;

  const [msgText, setMsgText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (msgText.trim().length === 0) {
      return false;
    }
    sendMessage({
      text: msgText.trim(),
      type: "client",
      id: uuid.v4()
    });

    setMsgText("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="form_input"
        type="text"
        placeholder="Message..."
        value={msgText}
        onChange={e => setMsgText(e.target.value)}
      />
      <button type="submit" className="send_btn">
        <img src={msgText.trim().length === 0 ? btn_disable : btn} />
      </button>
    </form>
  );
};

export default Input;
