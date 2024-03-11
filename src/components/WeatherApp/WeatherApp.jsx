import React from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'
import drizzle_icon from '../Assets/drizzle.png'


function WeatherApp(){

    let api_key = "135c02dde2e1e86a81de6966bf38c964"


    const search =async()=>{
      const element = document.getElementsByClassName("cityInput")
      if(element[0].value===""){
        return 0;
      }

      let URL = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`
      let response = await fetch(URL);
      let data = await response.json();

      const wind = document.getElementsByClassName("wind-rate");
      const humidity = document.getElementsByClassName("humidity-percent");
      const temperature = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");
      
     if (data.main) {
      humidity[0].innerHTML =
        data.main.humidity !== undefined ? data.main.humidity : "";
      temperature[0].innerHTML =
        data.main.temp !== undefined ? data.main.temp : "";
    }
    // else {
    //   humidity[0].innerHTML = "";
    //   temperature[0].innerHTML = "";
    // }

    if (data.wind) {
      wind[0].innerHTML = data.wind.speed !== undefined ? data.wind.speed : "";
    }
    // else {
    //   wind[0].innerHTML = "";
    // }

    if (data.name) {
      location[0].innerHTML = data.name;
    } else {
      location[0].innerHTML = "";
    }
      };
    

  return (
    <div className="container">
        <div className="top-bar">
<input type="text" className="cityInput" placeholder='search'/>
<div className="search-icon"
onClick={()=>{search()}}>
    <img src={search_icon} alt=''/>
</div>
        </div>
        <div className="weather-img">
            <img src={cloud_icon} alt=''/>
        </div>
        <div className="weather-temp">24C</div>
        <div className="weather-location">london</div>
        <div className="datacontainer">
            <div className="element">
                <img src={humidity_icon} alt='' className='icon'/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt='' className='icon'/>
                <div className="data">
                    <div className="wind-rate">18km/hr</div>
                    <div className="text">wind flow</div>
                </div>
            </div>
        </div>
    </div>
  )

}
export default WeatherApp





