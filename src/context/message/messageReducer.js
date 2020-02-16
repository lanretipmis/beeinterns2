import { START, STOP, CLIENT_MSG } from "../types";
import uuid from "uuid";

export default (state, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            text: "Привет, меня зовут Чат-бот, а как зовут тебя?",
            type: "bot",
            id: uuid.v4()
          }
        ]
      };
    case STOP:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            text: "Всего доброго, если хочешь поговорить пиши /start",
            type: "bot",
            id: uuid.v4()
          }
        ]
      };
    case CLIENT_MSG:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload
        ]
      };
    default:
      return state;
  }
};
