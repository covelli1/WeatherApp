import React from "react";

function WeatherCard(props) {
    var dayDict = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thrusday",
        5: "Friday",
        6: "Saturday"
    }

    var monthDict = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    }

    let cityName = props.weatherData.name
    let country = props.weatherData.sys.country
    let temp = Math.round(parseFloat(props.weatherData.main.temp)) 
    let high = Math.round(parseFloat(props.weatherData.main.temp_max))
    let low = Math.round(parseFloat(props.weatherData.main.temp_min))
    let weatherType = props.weatherData.weather[0].main
    let icon = `http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`
    console.log(high, low)

    var today = new Date();
    var day = dayDict[today.getDay()];
    var dd = String(today.getDate());
    var mm = monthDict[today.getMonth()];
    var yyyy = today.getFullYear();

    today = day + ' ' + dd + ' ' + mm + ' ' + yyyy;
    

    return(
        // <div>{props.weatherData.main.temp}</div>
        <div className="container mx-auto pt-24">
            <div className="flex items-center justify-center">
                <div className="bg-purple-300 shadow-2xl p-6 rounded-2xl border-2 border-transparent">
                    <div className="flex flex-col">
                        <div>
                            <h2 className="font-bold text-gray-600 text-center">{cityName}, {country}</h2>
                            <h3>{today}</h3>
                        </div>
                        <div className="my-6 flex flex-col">
                            <div className="flex flex-row justify-between items-center">
                                <img src={icon}></img>

                                <div className="flex flex-col space-x-4 items-center">
                                    <div id="temp">
                                        <h4 className="text-4xl">{temp}&deg;F</h4>
                                    </div>
                                    <div>{weatherType}</div>
                                </div>
                            </div>
                            <div className="text-xs">
                                High: {high}&deg;F | Low: {low}&deg;F
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;