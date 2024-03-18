import { Currency } from "./types";

export const addCurrency = (currency: Currency) => ({
  type: "ADD_CURRENCY",
  payload: currency,
});

export const removeCurrency = (currency: Currency) => ({
  type: "REMOVE_CURRENCY",
  payload: currency,
});
