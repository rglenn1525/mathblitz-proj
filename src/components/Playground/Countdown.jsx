import { useState, useEffect } from 'react' 

export default function Countdown({time, onTimeEnd, setTimeLeft, currentItem}) {
    const [secondsRemaining, setSecondsRemaining] = useState(time);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (secondsRemaining > 0 && currentItem <= 10) {
                    setSecondsRemaining(secondsRemaining - 1);
                    setTimeLeft(secondsRemaining);
            } else {
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