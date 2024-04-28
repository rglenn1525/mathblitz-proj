import Countdown from './Countdown'
import { useState } from 'react'
import './Play.css'

export default function Running({setIsTimeout, currentItem}) {
    const [timeLeft, setTimeLeft] = useState(100);

    return <>
    <div className='running' style={{backgroundColor: "grey"}}>
    <div className='runningtime' style={{width: (timeLeft/100)*100 + "%"}}>
        <Countdown time="100" onTimeEnd={()=>setIsTimeout("grid")} setTimeLeft={setTimeLeft} currentItem={currentItem}/>
    </div>
    </div>
    </>
}