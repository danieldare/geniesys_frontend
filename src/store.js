import React, { createContext, useContext, useReducer } from 'react';
import data from './data';

export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>;
export const useStateValue = () => useContext(StateContext);

export const initialState = {
  data,
  toggle: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        toggle: action.payload,
      };
    case 'ADD_CARD':
      const foundAt = state.data.findIndex((info) => info.type === action.cardSection);
      const updatedCardList = state.data[foundAt];
      updatedCardList.cardData.push(action.payload);
      data.splice(foundAt, 1, updatedCardList);
      return {
        ...state,
        data: [...data],
      };
    case 'ADD_CARD_LIST':
      const newCardList = state.data.concat({ type: action.payload, cardData: [] });
      console.log('xdcxc', newCardList);
      return {
        ...state,
        data: [...newCardList],
      };
    default:
      return state;
  }
};
