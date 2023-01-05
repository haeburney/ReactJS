import styles from "./App.module.css";
import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      console.log(json);
      setLoading(false);
    });
  }, []);
  // 아무것도 주시하고 있지 않으면 (빈 배열이면) 이 코드는 한 번만 작동이 된다.
  // 이 데이터를 useState에 넣어줄 것이다.

  return (
    <div>
     <h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>
    
     { loading ? <strong>Loading...</strong> : <select>
      {coins.map((coin) => (
      <option key={coin.id}>
        {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
      </option>
      ))}
      {/* map을 사용하면 react.js는 element에 key를 주도록 했었던거 기억남? */}
     </select> }
     
    </div>
  );
}

export default App;
