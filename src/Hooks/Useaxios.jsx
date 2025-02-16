import React, { useEffect, useState } from 'react'
import axios from 'axios';
function UseAxios(param) {
const[Response,SetResponse]=useState(null);
const[Loading,setLoading]=useState(null);
const[Error,setError]=useState('');
axios.defaults.baseURL='https://api.coingecko.com/api/v3';

const FetchData= async(param)=>{
    setLoading(true);
    setError('');
    try{
        
        const response=await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        SetResponse(response.data);}
        catch(error){
            setError(error);
            
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{ FetchData(param)},[param])
  return {
        Response,
        Loading,
        Error
  }
}

export default UseAxios
