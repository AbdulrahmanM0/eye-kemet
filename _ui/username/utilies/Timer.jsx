"use client"

import { useState, useEffect } from "react";

function Timer({time,setTime}) {

  useEffect(() => {
    if (time <= 0) return; 

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, [time]);

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return (
    <div className="text-clamp-20 font-bold leading-[0.7] uppercase text-gold100">
      {minutes}:{seconds}
    </div>
  );
}

export default Timer;