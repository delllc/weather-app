import React, { useState, useEffect } from 'react';
import WeatherCard from './components/weather/Weather';
import axios from 'axios';
import './index.css';



function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result);
          console.log(result)
        })
    }
    fetchData();
  }, [lat, long])


  return (
    <div className="center">
      {(typeof data.main != 'undefined') ? (
        <WeatherCard weatherData={data} />
      ) : (
        <div className="center">
          <img src="/loading.gif" alt="gif" />
        </div>
      )
      }
    </div>
  );
}

export default App;
