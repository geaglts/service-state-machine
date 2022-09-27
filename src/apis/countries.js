import ENDPOINTS from "./endpoints";

export const getAmericaCountries = async () => {
  const response = await fetch(ENDPOINTS.america_countries);
  const data = await response.json();
  return data;
};
