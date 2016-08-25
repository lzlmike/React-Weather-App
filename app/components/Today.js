/**
 * Created by Mike on 8/24/16.
 */
import React from 'react';

const Today = (props) => {
    const style = {
        color : 'white',
        textAlign: 'center',
        paddingBottom : '20px'
    };
    const wind_img = {
        width: '25px',
        marginRight: '10px'
    };

    const weather_img = {
        height : '80px'
    };

    const temp_font = {
        fontWeight: '900',
        fontSize : '50px'
    };

    const temp_weather = {
        height: '80px'
    };

    const info = props.info;
    let empty = Object.keys(info).length === 0 && info.constructor === Object;
    const wheather_icon = empty ? "10d" : info.weather[0].icon;
    const description = empty ? "Sunny" : info.weather[0].description;
    const temp = empty ? 25 : parseInt(info.main.temp - 273.15);
    const speed = empty ? 7 : info.wind.speed;
    const icon_url = `http://openweathermap.org/img/w/${wheather_icon}.png`;
    return (
        <div className="row" style={style}>
            <div className="col-sm-6" style={temp_weather}>
                <img style={weather_img} src={icon_url}/>
            </div>
            <div className="col-sm-6" style={temp_weather}>
                <p style={temp_font}>
                    {temp}°
                </p>
            </div>
            <div className="col-sm-6">
                <p>{description}</p>
            </div>
            <div className="col-sm-6">
                <img
                    style ={wind_img}
                     src="http://www.langebaaninfo.com/weather/homepage/blocks/trends/icons/dark/gust.png" />
                    {speed}MPH
            </div>

        </div>
    );
};

export default Today;