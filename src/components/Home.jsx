import './Home.css'
import logo from '../assets/MathBlitz_logo_nobg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faX } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import {useState} from 'react'
import Settings from './Settings'
import MathType from './MathType'

import clickWAV from "../assets/click.wav"


function Home() {
    const click = new Audio(clickWAV);

    const [toggleSettings, setToggleSettings] = useState(false);
    const [toggleMathType, setToggleMathType] = useState(false);

    return <>
        <div className='home'>
            <div className='settings-icon'>
                {toggleSettings 
                    ? <FontAwesomeIcon className='home_icon' icon={faX} onClick={() => {setToggleSettings(!toggleSettings);click.play()}}/> 
                    : <FontAwesomeIcon className='home_icon' icon={faSliders} onClick={() => {setToggleSettings(!toggleSettings);click.play()}}/>
                }
            </div>
            <div className="options">
                <img src={logo} className='logo'></img>
                <Button buttonText="Play" clicked={() => {setToggleMathType(!toggleMathType);click.play()}}/>
                <Button buttonText="How To" clicked={() => click.play()}/>
            </div>

            <Settings isOpen={toggleSettings}/>
            <MathType isOpen={toggleMathType} setToggleMathType={setToggleMathType}/>
        </div>
    </>
}

export default Home;