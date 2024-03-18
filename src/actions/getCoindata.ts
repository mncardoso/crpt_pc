export const GetTopCoins = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
  );
  const data = await response.json();
  return data;
};

export const GetCoinData = async (coin: string) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coin}`,
  );
  const data = await response.json();
  return data;
};
