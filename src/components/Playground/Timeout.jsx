import "./Timeout.css"
import timeoutImg from '../../assets/img-tm.gif'
import ok from '../../assets/thumbs-up-cat.gif'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import successrc from '../../assets/success.mp3'
import clickWAV from '../../assets/click.wav'

export default function Timeout(props) {
    const success = new Audio(successrc);
    const click = new Audio(clickWAV);

    if (props.score == 10) {
        success.play();
    }

    return <>
        <div style={{display: props.display}} className="timeout">
            <div className="timeout-container">
                <h1>{props.tm ? "Time is out!" : "Wow! 10 items in few seconds"}</h1>
                <div className="tm-ct-2">
                    <img style={{transform: (props.tm ? "none" : "scaleX(-1)")}} src={props.tm ? timeoutImg : ok} className="imgtim"/>
                    <div className="tm-ct-3">
                        <div>Score: {props.score}</div>
                        <div>Finished questions: {props.itemFinished}</div>
                        <div className="tm-btns">
                            
                                <Link to={'/mathblitz-proj/'+props.operation}>
                                    <button className="tm-btn" onClick={()=>click.play()}>Play again</button>
                                </Link>
                                <Link to='/mathblitz/'>
                                    <button className="tm-btn" onClick={()=>click.play()}>Home</button>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

