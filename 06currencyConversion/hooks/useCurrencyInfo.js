import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.rates); // Must return an object like { "INR": 83.12, "USD": 1, ... }
      })
      .catch((error) => {
        console.error("Error fetching currency info:", error);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
