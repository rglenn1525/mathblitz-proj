import "./Timeout.css"
import timeoutImg from '../../assets/img-tm.gif'
import ok from '../../assets/thumbs-up-cat.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faForward, faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Timeout(props) {
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
                            
                                <button className="tm-btn" onClick={()=>window.location.reload()}><FontAwesomeIcon icon={faRotateLeft}/></button>
                                <Link to={'/mathblitz-proj/'+props.operation}>
                                    <button className="tm-btn"><FontAwesomeIcon icon={faBars}/></button>
                                </Link>
                                <Link to={'/mathblitz-proj/'+props.operation+'/'+(props.levelNumber+1)}>
                                    <button className="tm-btn" onClick={()=>props.restartTimer("none")} onBlur={()=>window.location.reload()}><FontAwesomeIcon icon={faForward}/></button>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

