import React from 'react'
function Markets() {
const { response, loading } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

  return (
    <section className=' mt-8'>
        <h1 className='max-w-7xl mt-8 mx-auto px-2 text-2xl'>Markets</h1>
    </section>

  )
}

export default Markets;
