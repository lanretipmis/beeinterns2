import React, { useReducer } from "react";
import MessageContext from "./messageContext";
import MessageReducer from "./messageReducer";
import calculator from "./calculator";
import {
  START,
  STOP,
  CLIENT_MSG,
  SET_NUMS,
  CALCULATED,
  NOT_NUMS,
  GREETING,
  WRONG_COMMAND
} from "../types";

const MessageState = props => {
  const initialState = {
    messages: [],
    numbers: []
  };

  const [state, dispatch] = useReducer(MessageReducer, initialState);

  const sendMessage = msg => {
    //send client msg to UI
    dispatch({
      type: CLIENT_MSG,
      payload: msg
    });                                                             

    //check whether communication has started
    if (msg.text === "/start") {                                                //start command
      dispatch({
        type: START
      });
    } else if (msg.text === "/stop") {                                          //stop command
      dispatch({
        type: STOP
      });
    } else if (msg.text.includes("/name:")) {                                   //name command
      const name = msg.text.replace("/name:", "");
      dispatch({
        type: GREETING,
        payload: name
      })
    } else if (msg.text.includes("/number:")) {                                  //number command
      const arrOfNums = msg.text.replace("/number:", "").split(",");
      if (!isNaN(parseInt(arrOfNums[0])) && !isNaN(parseInt(arrOfNums[1]))) {
        dispatch({
          type: SET_NUMS,
          payload: arrOfNums
        });
      } else {
        dispatch({
          type: NOT_NUMS
        });
      }
    } else if (                                                                  //calc command
      msg.text === "+" ||
      msg.text === "-" ||
      msg.text === "*" ||
      msg.text === "/"
    ) {
      let res = calculator(+state.numbers[0], +state.numbers[1], msg.text);
      dispatch({
        type: CALCULATED,
        payload: res
      });
    } else {                                                                     //wrong command 
      dispatch({
        type: WRONG_COMMAND
      })
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
