import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const BackgroundImage = "https://images.pexels.com/photos/20358174/pexels-photo-20358174.jpeg";

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox 
              label="From" 
              amount={amount}
              currencyOptions = {options}
              selectCurrency = {from}
              onAmountChange = {(inputAmount) => setAmount(inputAmount)}
              onCurrencyChange = {(currency) => setFrom(currency)}
              
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapCurrencies}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox 
              label="To"
              amount = {convertedAmount}
              currencyOptions = {options}
              selectCurrency = {to}
              onAmountChange = {(inputAmount) => setConvertedAmount(inputAmount)}
              onCurrencyChange = {(currency) => setTo(currency)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
