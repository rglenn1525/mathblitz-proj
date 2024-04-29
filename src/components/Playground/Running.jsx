import Countdown from './Countdown'
import { useState } from 'react'
import './Play.css'

export default function Running({setIsTimeout, currentItem}) {
    const [timeLeft, setTimeLeft] = useState(30);

    return <>
    <div className='running' style={{backgroundColor: "grey"}}>
    <div className='runningtime' style={{width: ((timeLeft-1)/30)*100 + "%"}}>
        <Countdown time="30" onTimeEnd={()=>setIsTimeout("grid")} setTimeLeft={setTimeLeft} currentItem={currentItem}/>
    </div>
    </div>
    </>
}