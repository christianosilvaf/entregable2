import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Weather from './components/Weather';

function App() {
  const [weatherInfo,setweatherInfo]=useState(null);
  const [countryName,setcountryName]=useState(null);
  
  const IconRef=weatherInfo?.weather[0].icon;
  const IconRefbg=IconRef?.slice(2,3)+IconRef?.slice(1,2);
  
  const bg={d1:"bg-[url(/images/01d.jpg)]",
            d2:"bg-[url(/images/02d.jpg)]",
            d3:"bg-[url(/images/03d.jpg)]",
            d4:"bg-[url(/images/04d.jpg)]",
            d5:"bg-[url(/images/05d.jpg)]",
            d6:"bg-[url(/images/06d.jpg)]",
            d7:"bg-[url(/images/07d.jpg)]",
            d8:"bg-[url(/images/08d.jpg)]",
            d9:"bg-[url(/images/09d.jpg)]",
            n1:"bg-[url(/images/01n.jpg)]",
            n2:"bg-[url(/images/02n.jpg)]",
            n3:"bg-[url(/images/03n.jpg)]",
            n4:"bg-[url(/images/04n.jpg)]",
            n5:"bg-[url(/images/05n.jpg)]",
            n6:"bg-[url(/images/06n.jpg)]",
            n7:"bg-[url(/images/07n.jpg)]",
            n8:"bg-[url(/images/08n.jpg)]",
            n9:"bg-[url(/images/09n.jpg)]",
}

  
  const success=(pos)=>{
    const lat=pos.coords.latitude;
    const lon=pos.coords.longitude;
    const API_KEY="7f518877607f4511f7f13c0b40f428ba";
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    
    
    axios.get(url)
      .then(({data})=> setweatherInfo(data))
      .catch((err)=> console.log(err));
  };

  const url2=` https://api.worldbank.org/v2/country/${weatherInfo?.sys.country}?format=json`;
    
    axios.get(url2)
      .then((data2)=> setcountryName(data2?.data[1][0].name))
      .catch((err)=> console.log(err));

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(success)
  },[]);

  return (
    <main className={`${bg[IconRefbg]} bg-center bg-cover min-h-98vh max-w-screen min-w-360p text-black font-lato flex justify-center items-center`}>
      <Weather weatherInfo={weatherInfo} countryname={countryName}/>
    </main>
  )
}

export default App
