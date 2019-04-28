import React from "react";

export const Store = React.createContext();
const initialState = {
  episodes: [],
  favorites: []
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case "REMOVE_FAV":
      return {
        ...state,
        favorites: action.payload
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    state: state,
    dispatch: dispatch
  };
  console.log("Store", state);
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
