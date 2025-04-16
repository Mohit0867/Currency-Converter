import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://currency-rate-exchange-api.onrender.com/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return setData(res.rates[currency]);
      });
    console.log(data);
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
//Api=>https://currency-rate-exchange-api.onrender.com/
//Hook is basically a function which returns an array and that array contains a variable and a normal function
