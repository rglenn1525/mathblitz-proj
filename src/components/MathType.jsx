import './MathType.css'
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faXmark, faDivide, faCalculator, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";

import clickWAV from "../assets/click.wav"


function MathType({isOpen, setToggleMathType}) {
    const click = new Audio(clickWAV);

    const buttonStyle = {height: "45px",
                         width: "70%",
                         position: "relative",
                         left: "50%",
                         transform: "translateX(-50%)",
                         margin: 0,
                         display: "grid",
                         alignItem: "center",
                         gridTemplateColumns: "15% 70% 15%",
                         padding: "10px",
                         textAlign: "left",
                         textDecoration: "none"
                        };

    return (
        <>
            <div className="math-type" style={{top: isOpen ? "0px" : "-100%"}}>
                <div className="header">
                    <FontAwesomeIcon className='backButton' icon={faChevronLeft} onClick={() => setToggleMathType(!isOpen)}/>
                    <h1>Operations</h1>
                </div>

                <Link to="/addition">
                    <Button clicked={()=>click.play()} style={buttonStyle} 
                        buttonText = {
                            <>
                            <FontAwesomeIcon icon={faPlus}/>
                            <span> Addition </span>
                            </>
                        }
                    />
                </Link>

                <Link to='/subtraction'>
                    <Button clicked={()=>click.play()} style={buttonStyle} 
                        buttonText = {
                            <>
                            <FontAwesomeIcon icon={faMinus}/>
                            <span> Subtraction </span>
                            </>
                        }
                    />
                </Link>

                <Link to="multiplication">
                    <Button clicked={()=>click.play()} style={buttonStyle} 
                        buttonText = {
                            <>
                            <FontAwesomeIcon icon={faXmark}/>
                            <span> Multiplication </span>
                            </>
                        }
                    />
                </Link>

                <Link to="division">
                    <Button clicked={()=>click.play()} style={buttonStyle} 
                        buttonText = {
                            <>
                            <FontAwesomeIcon icon={faDivide}/>
                            <span> Division</span>
                            </>
                        }
                    />
                </Link>
            </div>
        </>
    )
}

export default  MathType;