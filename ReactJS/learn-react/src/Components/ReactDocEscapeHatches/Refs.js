import { useState, useRef } from "react";

const StopWatch = ()=> {

    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    const intervalRef = useRef(null);

    const handleStart = () => {
        setStartTime(Date.now())
        setNow(Date.now())

        clearInterval(intervalRef.current)
        
        intervalRef.current = setInterval(() => {
          setNow(Date.now())
        }, 10)

    }

    const handleStop = ()=> {
        clearInterval(intervalRef.current);
    }

    let secondsPast = 0
    if(startTime != null && now != null){
        secondsPast = (now - startTime) / 1000
    }

    return (
        <div>
            <h3> Time : {secondsPast}</h3>

            <button onClick={handleStart}>Start</button>

            <button onClick={handleStop}>Stop</button>
        </div>
    )

}

export default StopWatch