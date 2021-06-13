import React from 'react'

function LapTime(props) {
  const msToTime = (duration) => {
    let milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    if (hours > 0)
      return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    else
      return minutes + ":" + seconds + "." + milliseconds;
  }

  return (
    <lap-time>{msToTime(props.duration*1000)}</lap-time>
  )
}

export default LapTime