import React, { useState } from 'react';
import {} from 'react-bootstrap'



const api = {
    key:"4f3448e7c6c1962c6166302b3a9ab54c",
    base:"https://api.openweathermap.org/data/2.5/"
}





function Weatherapp() {

    const [query,setQuery] = useState ('');
    const [weather,setWeather] = useState ('');

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
            setWeather(result);
            setQuery('');  
            console.log(result);
            });
        }
    }

    const dateBuilder = (d) => {
        let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Okt","Nov","Dec"];
        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }



  return (
    <div className="Weatherapp text-center ">
            <main>
                <div className="search-box p-2 m-2">
                    <input type="text" className="search-bar" placeholder="Search.."
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                    ></input>
                  

               
                </div>
                {(typeof weather.main != "undefined") ? (
                <div className="location-box">
                    <div>
                    <div className="location"> {weather.name}, {weather.sys.country} </div>
                        <div className="date">{dateBuilder(new Date())}</div>
                  
                </div>
                <div className="weather-box">
                    <div className="temp">
                      {Math.round(weather.main.temp)} °C
                    </div>
                    <div className="weather">{weather.weather[0].main}</div>
                    
                </div>
                </div>
        ) : ('') }
            </main>
         
    </div>
  );
}

export default Weatherapp;
