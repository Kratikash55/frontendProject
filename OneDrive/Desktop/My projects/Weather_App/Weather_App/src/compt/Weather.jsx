import React, { useState } from 'react'

const Weather = () => {
    const [weather ,setweather ] = useState(null);
    const [error ,seterror ] = useState(" ");
    const [city ,setcity ] = useState("");

    const api_key = "2098168dea34fbccf7e2c9d0c8a7a4fc";
   

    const handelWeather = async function(){
        try {
            seterror("");
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);

            if(!response.ok) throw new Error ("City not found ❌");
            const record = await response.json();
            setweather(record);
            console.log(record);
        } catch (error) {
            setweather(null); 
            seterror(error.message);
        }
    }

  

    return (
        <div className='min-h-screen bg-bgimg bg-cover bg-no-repeat flex flex-col items-center justify-center'>
            <div className='w-full max-w-md bg-black bg-opacity-50 rounded-3xl shadow-2xl p-7 text-white'>

            <h1 className='text-4xl font-bold text-center tracking-wide mb-7'>🌍 Weather Forecast</h1>

            <div className='flex flex-col gap-5'>
            <input type="text" name="" id="" className='p-3 rounded-xl text-black focus:outline-none shadow-inner' placeholder='Enter Your City' value={city} onChange={(e)=>{setcity(e.target.value);}}
            onKeyDown={(e)=>e.key === "Enter" && handelWeather()}/>

            <button className='bg-white text-indigo-500 font-bold py-2 rounded-xl hover:bg-indigo-400 hover:text-white' onClick={handelWeather}>Search Weather🔍 {" "}</button>

            {
                error && <p className='text-center text-red-600'>{error}</p>
            }
            
        {
            weather && (
                <div className='text-center'>
                <img src= {` https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" className='mx-auto w-32 h-32 object-contain' />
                <h2 className='font-bold text-2xl'>{weather.name}/{weather.sys.country}</h2>
                <p className='text-xl'>{weather.weather[0].description}</p>
                <p className='text-5xl font-bold mt-2'>{weather.main.temp}°C</p>
            </div>
            )
        }
 </div>

        {
            weather && (
                <div className='grid grid-cols-3 text-black text-sm text-center mt-7 gap-2'>
            <div className='bg-white opacity-60 rounded-xl p-2'>
                <p className='font-bold'>Humidity</p>
               <p className='font-bold'>{weather.main.humidity}%</p>
            </div>
            <div className='bg-white opacity-60 rounded-xl p-2'>
                <p className='font-bold'>Wind</p>
               <p className='font-bold'>{weather.wind.speed} m/s</p>
            </div>
            <div className='bg-white opacity-60 rounded-xl p-2'>
                <p className='font-bold'>Clouds</p>
               <p className='font-bold'>{weather.clouds.all}%</p>
            </div>
         </div>
            )
        }

         
    </div>
</div>
    )
}

export default Weather
