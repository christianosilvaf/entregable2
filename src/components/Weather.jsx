import React from 'react'
import {useState} from 'react'

const Weather = ({weatherInfo,countryname}) => {

    const TempCelsius= (weatherInfo?.main.temp-273.15).toFixed(1);
    const TempFarenheit= (TempCelsius*9/5+32).toFixed(1);
    const IconRef=weatherInfo?.weather[0].icon;
    const FeelslikeCel=(weatherInfo?.main.feels_like-273.15).toFixed(1);
    const FeelslikeFar=(FeelslikeCel*9/5+32).toFixed(1);
    const velm_s=weatherInfo?.wind.speed;
    const velkm_h=(velm_s*3600/1000).toFixed(1);
    const prehpa=weatherInfo?.main.pressure;
    const preAtm=(0.00099*prehpa).toFixed(3);

    const [Temp, setTemp] = useState(true);
    const [vel, setVel] = useState(true);
    const [pre, setPre] = useState(true);
    
    const handleTemp =()=>{
        Temp ? setTemp(false) : setTemp(true);
    }

    const handlevel =()=>{
        vel ? setVel(false) : setVel(true);
    }

    const handlepre =()=>{
        pre ? setPre(false) : setPre(true);
    }

    return (
    <section className='text-center min-h-screen w-[350px] flex flex-col place-content-around items-center'>
        <h2>{weatherInfo?.name}, {countryname}</h2>
        <section className='flex flex-col gap-y-10'>
            <section className='bg-white/25 backdrop-blur-lg rounded-2xl place-content-evenly gap-10 p-5'>
                <h3>State: {weatherInfo?.weather[0].description}</h3>
                <div className='flex items-center place-content-evenly m-2'>
                <div className='flex flex-col items-center place-content-evenly'>   
                    <span> Temperature: <br/> {Temp? TempCelsius: TempFarenheit} {Temp ? "°C": "°F"}</span>
                    <span> Feels like: <br/> {Temp? FeelslikeCel: FeelslikeFar} {Temp ? "°C": "°F"}</span>
                </div> 
                <div className='bg-black/30 rounded-full'><img src={`https://openweathermap.org/img/wn/${IconRef}@4x.png`} alt="" /></div>
                </div>
                
            </section>

            <section className='grid grid-cols-3 items-center place-content-around gap-x-2'>

                <div  onClick={handlevel} className='bg-white/25 backdrop-blur-lg rounded-2xl flex flex-col items-center gap-y-3 hover:shadow-[0_3px_0px_rgba(0,0,0,0.3)] p-2'>
                    <img className='object-cover h-10 w-10' src={"/images/wind.svg"} alt="" />
                    <span>{vel? velm_s: velkm_h}{vel? " m/s": " km/h"}</span>
                </div>

                <div className='bg-white/25 backdrop-blur-lg rounded-2xl flex flex-col items-center gap-y-3  p-2'>
                    <img className='object-cover h-10 w-10' src={"/images/humidity.svg"} alt="" />
                    <span>{weatherInfo?.main.humidity} %</span>
                </div>

                <div onClick={handlepre} className='bg-white/25 backdrop-blur-lg rounded-2xl flex flex-col items-center gap-y-3 hover:shadow-[0_3px_0px_rgba(0,0,0,0.3)]  p-2'>
                    <img className='object-cover h-10 w-10' src={"/images/pressure.svg"} alt="" />
                    <span>{pre? prehpa: preAtm} {pre? " hpa": " Atm"}</span>
                </div>
                
            </section>
            
        </section>

        <button onClick={handleTemp} className='bg-white/25 backdrop-blur-lg rounded-2xl w-[50%]  text-black hover:shadow-[0_3px_0px_rgba(0,0,0,0.3)]'> Change Temperature Units to: {Temp? "°F": "°C"}</button>

    </section>
)
}

export default Weather