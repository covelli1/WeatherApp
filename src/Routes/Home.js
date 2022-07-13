import { useState, React, useRef, useEffect } from "react";
import axios from "axios";
import WeatherCard from "../Components/WeatherCard";
import { resolvePath } from "react-router-dom";

const api_key = "a4ad6a0394227394ded01ef79bcf9efa";

function Home() {

    const [weather, setWeather] = useState(null);
    const inputLocation = useRef(null);
    let lat = ""
    let lon = ""
    

    function getLocationLatLong() {
        if(inputLocation.current != null) {
            let locationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${inputLocation.current.value}&limit=5&appid=${api_key}`
            axios.get(locationURL)
            .then(response => {
                if(response.data.length === 0) {
                    throw new Error("Invalid Input!")
                }
                lat = response.data[0].lat
                lon = response.data[0].lon
                let weatherURL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${api_key}`
                return weatherURL
            })
            
            .then(response => {
                axios.get(response)
                .then(response => {
                   setWeather(<WeatherCard weatherData={response.data}/>)
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }
    
    }
   


    return (
            <div className="container px-5 py-24">
                <div className="flex flex-col text-center w-full">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white items-center">Current Weather</h1>
                    
                    <div>
                        <input 
                            className="border-b bg-blue-900 placeholder-slate-300 w-2/5 outline-none text-white" 
                            placeholder="Search for a city"
                            ref={inputLocation} 
                            onKeyPress={(e) => {
                                if(e.key === "Enter") {
                                    getLocationLatLong()
                                }}
                            }
                        >

                        </input>
                        <button 
                            type="button" 
                            className="bg-rose-600 text-white ml-4 p-2 rounded"
                            onClick={() => getLocationLatLong()}
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>

            <div>
                {weather}
            </div>
        </div>
    )
}

export default Home;