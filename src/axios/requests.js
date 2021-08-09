import axios from "axios";
export const getRates = async () => {
  try {
    const { data } = await axios.get(
      "https://www.cbr-xml-daily.ru/daily_json.js"
    );
    return data.Valute.USD.Value;
  } catch (err) {}
};
