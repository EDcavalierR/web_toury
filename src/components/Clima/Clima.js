import { useState, useEffect } from "react";
import react from "react";
import axios from "axios";
import clima from "./Clima.css";

function Clima() {
  const [data, setData] = useState({})

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=6.817&lon=-73.267&lang=es&appid=cba1eea7cfeaf3a6d8b5e2a085e4563a&units=metric`;

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            });
    }, [])

    return (
        <div className="Container_clima">
            <div>
                <div className="icon">
                    {data.weather ? <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="clima"/> : <></>}
                </div>
            </div>
            <div>
                <div className="temperatura">
                    {data.main ? <h5>{data.main.temp.toFixed()} °C</h5> : null}
                </div>
                    <div className="descripcion">
                    {data.weather ? <p>{data.weather[0].main}</p> : null}
                </div>
            </div>
        </div>
    );
}

export default Clima;
