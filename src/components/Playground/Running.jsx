import Countdown from './Countdown'
import { useState } from 'react'
import './Play.css'

export default function Running({setIsTimeout, currentItem}) {
    const [timeLeft, setTimeLeft] = useState(20);

    return <>
    <div className='running' style={{backgroundColor: "grey"}}>
    <div className='runningtime' style={{width: ((timeLeft-1)/20)*100 + "%"}}>
        <Countdown time="20" onTimeEnd={()=>setIsTimeout("grid")} setTimeLeft={setTimeLeft} currentItem={currentItem}/>
    </div>
    </div>
    </>
}