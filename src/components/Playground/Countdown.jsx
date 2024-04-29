import { useState, useEffect } from 'react' 
import ticksrc from '../../assets/tick.mp3'
import losesrc from '../../assets/lose.mp3'

export default function Countdown({time, onTimeEnd, setTimeLeft, currentItem}) {
    const [secondsRemaining, setSecondsRemaining] = useState(time);
    const tick = new Audio(ticksrc);
    const lose = new Audio(losesrc);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (secondsRemaining > 0 && currentItem <= 10) {
                    setSecondsRemaining(secondsRemaining - 1);
                    setTimeLeft(secondsRemaining);

                    if (secondsRemaining == 4) {
                        tick.play();
                    }
            } else {
                if (secondsRemaining == 0) {
                    lose.play();
                }
                clearInterval(timerId);
                onTimeEnd();
            }
        },1000);

        return () => clearInterval(timerId);
    }, [secondsRemaining]);

    return (
        <span>{secondsRemaining} s</span>
    )
}