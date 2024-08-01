"use client"

import React from 'react'
import { useEffect,useState } from 'react'

export default function Timer() {
  const [codingTime,setCodingTime] = useState(false);
  const [days,setDays] = useState(0);
  const [hours,setHours] = useState(0);
  const [minutes,setMinutes] = useState(0);
  const [seconds,setSeconds] = useState(0);
  
  useEffect(() => {
    const target = new Date("8/6/2024 23:59:59");

    const interval = setInterval(() => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();

        const d = Math.floor(difference / (1000*60*60*24));
        setDays(d);

        const h = Math.floor((difference % (1000*60*60*24))/(1000*60*60));
        setHours(h);

        const m = Math.floor((difference%(1000*60*60))/(1000*60));
        setMinutes(m);

        const s = Math.floor((difference%(1000*60))/1000);
        setSeconds(s);

        if(d<=0 && h<=0 && m<=0 && s<=0){
            setCodingTime(true);
        }
    },1000);
    return () => clearInterval(interval);
  },[]);
  
  return (
    <div className='h-full w-full px-3 py-3 bg-gray-500/30 backdrop-blur-md border border-gray-100/10 rounded-3xl'>
      {codingTime ? (
        <h1 className='text-3xl font-bold text-green-500 flex justify-center items-center'>It's Coding Time!</h1>
      ) : (
        <div className='text-white flex flex-col items-center justify-center'>
          <h1 className='text-1xl font-bold'>Countdown to Event</h1>
          <div className='flex justify-center mt-4'>
            <div className='mx-3'>
              <div className=' text-7xl'>{days}</div>
              <div className='text-sm'>Days</div>
            </div>
            <div className='mx-3'>
              <div className='text-7xl'>{hours}</div>
              <div className='text-sm'>Hours</div>
            </div>
            <div className='mx-3'>
              <div className='text-7xl'>{minutes}</div>
              <div className='text-sm'>Minutes</div>
            </div>
            <div className='mx-3'>
              <div className='text-7xl'>{seconds}</div>
              <div className='text-sm'>Seconds</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


