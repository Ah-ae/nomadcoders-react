import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(1);
  const [choice, setChoice] = useState();
  const [cost, setCost] = useState();
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);
  const onChangeInput = (e) => setValue(e.target.value);
  const onChangeChoice = (e) => {
    setCost(e.target.value);
    setValue(1);
  };
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChangeChoice}>
          <option>Select coin!</option>
          {coins.map((coin) => (
            <option key={coin.id} value={choice}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <h2>Please enter the amount</h2>
      <div>
        <input
          type="number"
          value={value}
          onChange={onChangeInput}
          placeholder="dollar"
        />
      </div>
      <h2>You can get {value / cost}</h2>
    </div>
  );
}

export default CoinTracker;
