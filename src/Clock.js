import React, { useEffect, useState } from 'react';

const FLIGHT_TIME = new Date(2019, 6, 19, 15, 30);

const Clock = () => {
  const [time, setTime] = useState();

  const calculateTimeDifference = () => {
    const now = new Date();
    const diff = FLIGHT_TIME.getTime() - now.getTime();
    let msec = diff;
    const hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    const mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    const ss = Math.floor(msec / 1000);
    msec -= ss * 1000;

    return hh + ' Hours, ' + mm + ' Minutes, ' + ss + ' Seconds';
  }

  useEffect(() => {
    const intervalID = setInterval(
      () => setTime(calculateTimeDifference()),
      1000
    );
      
    return () => clearInterval(intervalID);
  }, [time]);

  return (
    <div>
      {time}
    </div>
  )
}

export default Clock;