import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({info}){
    const INIT_URL = "https://res.cloudinary.com/dxuezm3jb/image/upload/v1749636365/IMG_1908_lsunv6.jpg"
    const Hot_URL = "https://res.cloudinary.com/dxuezm3jb/image/upload/v1749636365/IMG_1908_lsunv6.jpg"
    const Cold_URL = ""
    const Rain_URL = ""
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 320 }}
                    image={info.humidity>70?Rain_URL:(info.temp>23?Hot_URL:Cold_URL)}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                        &nbsp;{info.humidity>70?<ThunderstormIcon/>:(info.temp>23?<SunnyIcon/>:<AcUnitIcon/>)}
                    
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperatur : {info.temp}&deg;C</p>
                    <p>Humidity : {info.humidity}</p>
                    
                    <p>Max Temp : {info.temp_max}&deg;C</p>
                    <p>`The weather can be described as <i>{info.weather}</i> and Feels like {info.feelsLike}`</p>

                    </Typography>
                </CardContent>
                
            </Card>
            </div>
        </div>
    )
}