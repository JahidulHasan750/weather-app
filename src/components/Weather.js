import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Weather = () => {
    
    const[lat,setLat]=useState('');
    const[lot,setLot]=useState('');
    const url= `https://api.open-meteo.com/v1/forecast?latitude=${lat}.52&longitude=${lot}.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;
    const[temp, setTemp]=useState(null);
    
    const calculate=(event)=>{
        if(event.key==='Enter'){
            axios.get(url).then((response)=>{
           
                setTemp(response.data)
                
                
            })
        }
    }
  
    console.log(temp)
  
  
  return (
    <div className='w-full h-screen'>
    <img src='https://images.pexels.com/photos/17130141/pexels-photo-17130141/free-photo-of-road-dawn-landscape-beach.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' className=' w-full h-screen object-cover'></img>
    <div className='absolute top-0 w-full '>
      <div className=' w-full flex justify-center mt-20 gap-5'>
      <input className='bg-gray-700 rounded-lg px-3 py-2 ' onChange={(e)=>setLat(e.target.value)} placeholder='lattitude' ></input>
    <input className='bg-gray-700 rounded-lg px-3 py-2' placeholder='longitude' onChange={(e)=>setLot(e.target.value)}  onKeyDown={(e)=>calculate(e)}></input>
    
      </div>
      <div className='absolute flex w-full items-center justify-center'>
      <div className=' flex flex-col text-left mt-32 w-[400px] gap-10 h-[500px] text-center '>
      {temp? <p className='  font-bold text-6xl text-white'>{temp.current_weather.temperature}&deg;C</p> :'' }
       {temp? <p className='font-bold text-4xl text-emerald-700'>Windspeed:{temp.current_weather.windspeed}</p> :'' }
       {temp? <p className='font-bold text-4xl text-orange-700'>Wind Direction:{temp.current_weather.winddirection}</p> :'' }
      </div>
      </div>
     
   </div>
   </div>
  )
}

export default Weather