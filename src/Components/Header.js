import React from "react";


function Header() {
    return(
        <header className="border-b border-b-white p-3 flex justify-between items-center">
           <div className="container flex flex-wrap p-1 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img src="/weather-icon.png"  width={50} height={50}></img>
                    <span className="ml-3 text-xl text-white">WeatherApp</span>
                </a>
            </div>
            
        </header>
    )
}

export default Header;