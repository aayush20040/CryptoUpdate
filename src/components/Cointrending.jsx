import React from 'react'

const Cointrending = ({coin}) => {
    console.log(coin)
  return (
    <div>
      <div className='font-light mb-3 p-2 border-gray-300 border-2 rounded-xl hover:bg-gray-400  '>
        <div className='flex items-center gap-1'> 
        <span> </span>
        <img src={coin.image} alt={coin.id} className='w-12 h-12'/>
        <p>{coin.id}</p>
        <small>({coin.symbol})</small>
        </div>
      </div>
    </div>
  )
}

export default Cointrending
