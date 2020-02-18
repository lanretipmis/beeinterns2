import React from "react";
import "./Message.css";
import BotAvatar from "./BotAvatar.png";
import ClientAvatar from "./ClientAvatar.png";
import Skycons from "react-skycons";

const Message = ({ msg }) => {
  const { text, type } = msg;
  return (
    <div className="message_container">
      <img
        src={type === "client" ? ClientAvatar : BotAvatar}
        className="message_avatar"
        alt="avatar"
      />
      <div
        className="message_text"
        style={
          type === "client"
            ? { background: "#F9C35B" }
            : { background: "#F1F0F0" }
        }
      >
        <p>{text}</p>
        {msg.icon && (
          <Skycons className='skycons' color="black" icon={msg.icon.toUpperCase()} autoplay={true} />
        )}
      </div>
    </div>
  );
};

export default Message;
