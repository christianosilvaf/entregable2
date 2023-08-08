import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Weather from './components/Weather';

function App() {
  const [weatherInfo,setweatherInfo]=useState(null);
  const [countryName,setcountryName]=useState(null);

  const success=(pos)=>{
    const lat=pos.coords.latitude;
    const lon=pos.coords.longitude;
    const API_KEY="7f518877607f4511f7f13c0b40f428ba";
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    

    axios.get(url)
      .then(({data})=>setweatherInfo(data))
      .catch((err)=>console.log(err))
  };

  const url2=` http://api.worldbank.org/v2/country/${weatherInfo?.sys.country}?format=json`;

    axios.get(url2)
      .then((data2)=> setcountryName(data2.data[1][0].name))
      .catch((err)=> console.log(err));

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(success)
  },[]);

  return (
    <main className='bg-cyan-300 min-h-screen max-w-screen text-white font-lato flex justify-center items-center'>
      <Weather weatherInfo={weatherInfo} countryname={countryName}/>
    </main>
  )
}

export default App
