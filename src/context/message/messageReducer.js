import {
  START,
  STOP,
  CLIENT_MSG,
  SET_NUMS,
  CALCULATED,
  NOT_NUMS,
  GREETING,
  WRONG_COMMAND,
  FORECAST
} from "../types";
import uuid from "uuid";

export default (state, action) => {
  switch (action.type) {
    case FORECAST:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            text: `${action.payload.summary}`,
            icon: action.payload.icon.replace('-','_'),
            type: "bot",
            id: uuid.v4()
          }
        ]
      };
    case SET_NUMS:
      return {
        ...state,
        numbers: action.payload,
        messages: [
          ...state.messages,
          {
            text: "Введите одно из следующих действий:  -, +, *, /",
            type: "bot",
            id: uuid.v4()
          }
        ]
      };
    case NOT_NUMS:
      return {
        ...state,
        messages: [
          ...state.messages,
          { text: "Введите числа, пожалуйста", type: "bot", id: uuid.v4() }
        ]
      };
    case CALCULATED:
      return {
        ...state,
        messages: [
          ...state.messages,
          { text: action.payload, type: "bot", id: uuid.v4() }
        ]
      };
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
    case GREETING:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            text: `Привет ${action.payload}, приятно познакомится. Я умею считать, введи числа которые надо посчитать`,
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
    case WRONG_COMMAND:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            text: "Я не понимаю, введите другую команду!",
            type: "bot",
            id: uuid.v4()
          }
        ]
      };
    case CLIENT_MSG:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};
