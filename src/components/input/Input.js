import React, { useState, useContext, Fragment } from "react";
import uuid from "uuid";
import MessageContext from "../../context/message/messageContext";
import btn from "./src/btn.png";
import btn_disable from "./src/btn_disable.png";
import "./src/Input.css";

const Input = () => {
  const messageContext = useContext(MessageContext);
  const { sendMessage } = messageContext;

  const [msgText, setMsgText] = useState("");
  const [typing, setTyping] = useState(false);

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
    setTyping(false);
  };

  return (
    <Fragment>
      {typing && (
        <div className="typing-container">
          <p className="typing">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
        </div>
      )}
      <form className="form" onSubmit={onSubmit}>
        <input
          className="form_input"
          type="text"
          placeholder="Message..."
          value={msgText}
          onChange={e => {
            setMsgText(e.target.value);
            setTyping(true);
          }}
          onBlur={()=>setTyping(false)}
        />
        <button type="submit" className="send_btn">
          <img
            src={msgText.trim().length === 0 ? btn_disable : btn}
            alt="img"
          />
        </button>
      </form>
    </Fragment>
  );
};

export default Input;
