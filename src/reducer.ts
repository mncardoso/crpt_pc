import { Currency } from "./types";

const reducer = (state: Currency[] = [], action: any) => {
  switch (action.type) {
    case "ADD_CURRENCY":
      return [...state, action.payload];
    case "REMOVE_CURRENCY":
      return state.filter((currency) => currency.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
