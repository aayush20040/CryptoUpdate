import React from 'react'
import UseAxios from '../Hooks/Useaxios'
import Cointrending from './Cointrending';

function Trending() {
  const { Response } = UseAxios('search/trending');

  return (
    <div className="max-w-7xl mt-8 mx-auto px-2">
      <h1 className="text-2xl mb-2">Trending</h1>
      
      {Response && Response.slice(0, 100).map(coin => <Cointrending key={coin.id} coin={coin} />
         
        //  className="coin-container">
        //   <img src={coin.image} alt={coin.name} className="w-16 h-16"/>
        //   <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
        //   <p>Price: ${coin.current_price}</p>
        //   <p>Market Cap: ${coin.market_cap}</p>
        //   <p>24h Change: {coin.price_change_percentage_24h}%</p>
        
      )}
    </div>
  );
}

export default Trending;
