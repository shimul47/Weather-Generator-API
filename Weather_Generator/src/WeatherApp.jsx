import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"Sirajganj",
        temp:23,
        max_temp:23,
        min_temp:23,
        feelsLike:23,
        weather:"Haze",
        humidity:"Cool",
    });
    
    let updateInfo =  (result) =>{
        setWeatherInfo(result)
    }
    return(
        <div style={{textAlign:"center"}}>

            <h1>Weather Generator AP</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}