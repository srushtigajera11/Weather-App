import React, { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'



export default function WeatherApp() {
  let [weatherInfo , setWeatherInfo] = useState({
    city : "delhi",
    feelsLike : 23.37,
    humidity :   33,
    temp :  24.05,
    tempMax :  24.05,
    tempMin :  24.05,
    weather : "haze",
  });
  let updateInfo = (newInfo) =>{
  setWeatherInfo(newInfo);
  }

  return (
    <div className='WeatherApp'>
      <h1  style={{textAlign:"center"}}>Weather App</h1>
      < SearchBox updateInfo={updateInfo} />
      < InfoBox info={weatherInfo} />
  </div>
  )
}
