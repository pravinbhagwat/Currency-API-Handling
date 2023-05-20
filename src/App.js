import { useState, useEffect } from 'react';
import './App.css';
import TableRow from './Components/TaleRow';

function App() {
  let [currencies, setCurrencies] = useState("");

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        // console.log(data);
        setCurrencies(data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);


  return (
    <div className="App">
       <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Image</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {
            currencies!=="" &&
            currencies.map((currency, index)=>{
              return <TableRow obj = {currency} index = {index}></TableRow>
            })
          }
        </tbody>
       </table>
    </div>
  );
}

export default App;
