import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        let url = `https://api.exchangerate-api.com/v4/latest/${currency}`
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res.rates));
        console.log(data);
    }, [currency]);

    return data;
}

export default useCurrencyInfo;