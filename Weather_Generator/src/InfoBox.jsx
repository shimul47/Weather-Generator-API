import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({info}){
    const Hot_URL = "https://res.cloudinary.com/dxuezm3jb/image/upload/v1749745029/IMG_0021_dxqikw.jpg"
    const Cold_URL = "https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const Rain_URL = "https://images.unsplash.com/photo-1508556919487-845f191e5742?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 200 }}
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
                    <p><b>The weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feels}&deg;C</b></p>

                    </Typography>
                </CardContent>
                
            </Card>
            </div>
        </div>
    )
}