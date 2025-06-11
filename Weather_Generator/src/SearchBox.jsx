import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("")
    let [error,setError] = useState(false)

    let getWeatherInfo = async()=>{
        try{
            const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            let jsonRes = await response.json();
            // console.log(jsonRes);
            let result = {
                city:city,
                temp:jsonRes.main.temp,
                temp_max:jsonRes.main.temp_max,
                humidity:jsonRes.main.humidity,
                feels:jsonRes.main.feels_like,
                weather:jsonRes.weather[0].description
                }
            return result
        }catch(err){
            throw(err);
        }

    }
    
    let handleChange = (event)=>{
        setCity(event.target.value)
    }
    let handleSubmit = async(event)=>{
        try{
            event.preventDefault()
        // console.log(city)
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info)
        }catch(err){
            setError(true)
        }
        
    }
    return(
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br /><br />
                <Button variant="outlined" type='submit'>Search</Button>
                {error && <p>Free API Sir.Not every data exist even if you are correct.</p>}
            </form>
        </div>
    )
}