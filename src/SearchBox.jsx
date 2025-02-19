import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'

export default function SearchBox({updateInfo}) {
    let [city ,setCity] = useState("");
    const API_URL ="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async ()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
      
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    };


    let handleCity = (evnt)=>{
        setCity(evnt.target.value);
    };
    let handleSubmit = async (evt)=>{
       evt.preventDefault();
       console.log(city);
       setCity("");
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo);
       
    };
  return (
    <div className='Searchbox'>
   <form onSubmit={handleSubmit}>
    <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleCity} required/>
    <br /><br />
    <Button variant="contained" type='submit'>Search</Button>
    </form>

    </div>
  )
}
