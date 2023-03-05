import React, { useEffect, useState } from "react";
import Weather from "../components/Weather";
// import Axios from "axios";

export default function WeatherDisplay() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log(lat, long);
    let data = await fetch(
      `${process.env.REACT_APP_API_URL}/weather/?lat=12.971599&lon=77.594566&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    );
    let result = await data.json();
    setData(result);
  };
  useEffect(() => {
    fetchData();
  }, [lat, long, data]);

  return (
    <div className="App" style={{}}>
    {console.log(data)}
      {data.length != 0 ? (
        <>
          {console.log(data)}
          <Weather weatherData={data} />
        </>
      ) : (
        <div>{console.log("bhai data " + data)}</div>
      )}
    </div>
  );
}
