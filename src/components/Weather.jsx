import React from 'react'
import {useState} from 'react'

const Weather = ({weatherInfo,countryname}) => {

    const TempCelsius= (weatherInfo?.main.temp-273.15).toFixed(1);
    const TempFarenheit= (TempCelsius*9/5+32).toFixed(1);
    const IconRef=weatherInfo?.weather[0].icon;

    const [Temp, setTemp] = useState(true);
    
    const handleTemp =()=>{
        Temp ? setTemp(false) : setTemp(true);
    }

    return (
    <section className='text-center min-h-screen w-[350px] flex flex-col place-content-around items-center'>
        <h2>{weatherInfo?.name}, {countryname}</h2>
        <section className='flex flex-col gap-y-10'>
            <section className='bg-white/30 backdrop-blur-lg rounded-2xl place-content-evenly gap-10'>
                <h3>State: {weatherInfo?.weather[0].description}</h3>
                <div className='flex items-center place-content-evenly'>
                <span> Temperature: <br/> {Temp? TempCelsius: TempFarenheit} {Temp ? "°C": "°F"}</span>
                <div ><img src={`https://openweathermap.org/img/wn/${IconRef}@4x.png`} alt="" /></div>
                </div>
                
            </section>

            <section className='grid grid-cols-3 items-center place-content-around '>
                <div className='flex flex-col items-center gap-y-3'>
                    <img className='object-cover h-10 w-10' src={"/images/wind.svg"} alt="" />
                    <span>{weatherInfo?.wind.speed} m/s</span>
                </div>

                <div className='flex flex-col items-center gap-y-3'>
                    <img className='object-cover h-10 w-10' src={"/images/humidity.svg"} alt="" />
                    <span>{weatherInfo?.main.humidity} %</span>
                </div>

                <div className='flex flex-col items-center gap-y-3'>
                    <img className='object-cover h-10 w-10' src={"/images/pressure.svg"} alt="" />
                    <span>{weatherInfo?.main.pressure} hPa</span>
                </div>
                
            </section>
            
        </section>

        <button onClick={handleTemp} className='bg-white rounded-2xl w-[50%]  text-black'> Change Temperature Units to: {Temp? "°F": "°C"}</button>

    </section>
)
}

export default Weather