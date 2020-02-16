import React, { useReducer } from "react";
import MessageContext from "./messageContext";
import MessageReducer from "./messageReducer";
import { START, STOP, CLIENT_MSG } from "../types";

const MessageState = props => {
  const initialState = {
    messages: [
      {
        text:
          "Что то там написано is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        type: "client",
        id: 123
      },
      {
        text: "Что то там написано",
        type: "bot",
        id: 555
      }
    ]
  };

  const [state, dispatch] = useReducer(MessageReducer, initialState);

  const sendMessage = msg => {
    dispatch({
      type: CLIENT_MSG,
      payload: msg
    });

    if (msg.text === "/start") {
      dispatch({
        type: START
      });
    } else if (msg === "/stop") {
      dispatch({
        type: STOP
      });
    }
  };

  return (
    <MessageContext.Provider
      value={{
        messages: state.messages,
        sendMessage
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageState;
