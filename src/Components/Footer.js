import React from "react";


function Footer() {
    return(
        <footer className="bg-gray-200 text-center text-xs p-3 w-full sticky top-[100vh]">
            <div className="container flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src="/weather-icon.png"  width={50} height={50}></img>
                <span className="ml-3 text-xl">WeatherApp</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0 mt-4">© 2022 WeatherApp —
                <a href="https://github.com/covelli1" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@covelli1</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"></span>
            </div>
        </footer>
    )
}

export default Footer;