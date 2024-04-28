import './Settings.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones, faMusic, faPhoneVolume, faEnvelope, faCircleInfo, faChevronRight } from '@fortawesome/free-solid-svg-icons'


function Settings(props) {
    const [toggleSound, setToggleSound] = useState(true);
    const [toggleMusic, setToggleMusic] = useState(true);
    const [toggleVibration, setToggleVibration] = useState(true);

    const style1 = (con) => {
        return {
            backgroundColor: (con ? "rgb(55, 185, 255)" : "rgb(189, 188, 188)")
        }
    };

    const style2 = (con) => {
        return {
            position: "relative",
            left: (con ? "20px": "0px")
        }
    }

    return (
        <>
            <div className="settings" style={{top: (props.isOpen ? "0px" : "-100%")}}>
                <div className='settings-ct1'>
                    <h1>Settings</h1>
                </div>

                <button className='settings-btn' onClick={()=>setToggleSound(!toggleSound)}>
                    <FontAwesomeIcon icon={faHeadphones}/>
                    <span>Sound</span>
                    <div className='toggle' style={style1(toggleSound)}><div className='switch' style={style2(toggleSound)}></div></div>
                </button>
                <button className='settings-btn' onClick={()=>setToggleMusic(!toggleMusic)}>
                    <FontAwesomeIcon icon={faMusic} />
                    <span>Music</span>
                    <div className='toggle' style={style1(toggleMusic)}><div className='switch' style={style2(toggleMusic)}></div></div>
                </button>
                <button className='settings-btn' onClick={()=>setToggleVibration(!toggleVibration)}>
                    <FontAwesomeIcon icon={faPhoneVolume}/>
                    <span>Vibration</span>
                    <div className='toggle' style={style1(toggleVibration)}><div className='switch' style={style2(toggleVibration)}></div></div>
                </button>
                <button className='settings-btn'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <span>Contact Us</span>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
                <button className='settings-btn'>
                    <FontAwesomeIcon icon={faCircleInfo}/>
                    <span>About</span>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
                
            </div>
        </>
    )
}

export default Settings;