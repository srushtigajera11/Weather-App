import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}) {
    const Snow_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const Hot_URL = "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const Rain_URL ="https://plus.unsplash.com/premium_photo-1732528577133-343b2a515839?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJhbmlueSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  return (
 <div className='infoBox'>
        
        <div className="infobox">
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image = {info.humidity <= 80 ? (info.temp <= 21 ? Snow_URL : Hot_URL)   : Rain_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {info.humidity <= 80 ? (info.temp <= 21 ? <AcUnitIcon /> : < WbSunnyIcon />)   : <ThunderstormIcon />}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
               <p>Temparature = {info.temp}&deg;C</p>
               <p>Humidity = {info.humidity}</p>
               <p>Min Temp = {info.tempMin}&deg;C</p>
               <p>Max Temp = {info.tempMax}&deg;C</p>
               <p>the weather can be Described as  <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C </p>
                </Typography>
            </CardContent>
           
            </Card>
            </div>
    </div>
  )
}
