import './Play.css'
import { useState , useRef, useEffect, useMemo} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faHome } from '@fortawesome/free-solid-svg-icons'
import questCriteria from "./questCriteria.json"
import Countdown from './Countdown'
import Timeout from './Timeout'
import Running from './Running'
import { Link } from 'react-router-dom'

function getRndInteger(min, max) {
    return Math.floor(Math.random()*(max-min))+min;
}

function generateQuestion(operation, level) {
    const dig = questCriteria["Level "+ level]["Digits"];
    const num = questCriteria["Level "+ level]["Numbers"];
    const sign = questCriteria["Level "+ level]["Sign"];

    let question = [];
    let operator = "";

    switch (operation) {
        case "addition":
            operator = "+";
            break;
        case "subtraction":
            operator = "-";
            break;
        case "multiplication":
            operator = "×";
            break;
        case "division":
            operator = "÷";
            break;
    }

    for (let i = 1; i <= num; i++) {
        if (sign === "p") {
            let randomNumber = getRndInteger(Math.pow(10,dig-1), Math.pow(10,dig)-1);
            question.push(randomNumber);
            question.push(operator);
        } else if (sign === "pm") {
            let randomNumber = getRndInteger(-Math.pow(10,dig)+1, Math.pow(10,dig)-1);
            question.push(randomNumber);
            question.push(operator);
        }
    }
    question.pop();
    return question;
}


export default function Play(props) {
    let question = generateQuestion(props.operation, props.levelNumber);
    const [score, setScore] = useState(0);
    const [currentItem, setCurrentItem] = useState(1);
    const [isTimeout, setIsTimeout] = useState("none");
    //const [timeLeft, setTimeLeft] = useState(10);

    let answer = "";

    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-"];

    function onClickKey(event) {
        answer += event.target.value;
        let d = document.querySelector("#answer");
        d.innerText = answer;
        setTimeout(checkInput, 250);
    }

    const checkInput = () => {
        if (props.operation === "multiplication") {
            question = question.replace("×", "*")
        } else if (props.operation === "division") {
            question = question.replace("÷", "/")
        }


        if (answer == eval(question.join("")).toString()) {
            setScore(score + 1);
            setCurrentItem(currentItem + 1);
            answer = '';
            let d = document.querySelector("#answer");
            d.innerText = answer;
            checkInput();
        }
    }

    function deleteLetter() {
        answer = answer.slice(0, answer.length-1);
        let d = document.querySelector("#answer");
        d.innerText = answer;
    }

    return (
        <>
        <div className='play'>
            <Timeout score={score} 
                     itemFinished={currentItem-1} 
                     display={isTimeout} 
                     operation={props.operation} 
                     levelNumber={props.levelNumber} 
                     restartTimer={setIsTimeout}
                     tm={(currentItem <= 10)}
            />
            <div className='play-header'>
                <Link to="..">
                <FontAwesomeIcon style={{color:"yellow", fontSize:"1.5rem"}}icon={faHome}/>
                </Link>
                <h1>{props.operation}</h1>
            </div>
            <div className='play-container'>
                <div className="un-ct">
                    <div className='un-1'>
                        <div className='countdown'>
                            {/*<div className='runningtime' style={{backgroundImage:`linear-gradient(90deg, rgb(44, 126, 249) ${(timeLeft/100)*100}%, grey 0.1%, grey ${100-(timeLeft/10000)*100}%)`}}>
                                <Countdown time="100" onTimeEnd={()=>setIsTimeout("grid")} setTimeLeft={setTimeLeft}/>
                            </div>*/}
                            <Running setIsTimeout={setIsTimeout} currentItem={currentItem}/>
                        </div>
                    </div>
                    <div className='level-ct'>
                        <div className='level-ct-2'>
                            <span style={{fontSize: "0.8rem"}}>Level</span><br/>
                            <span style={{fontSize: "2rem"}}>{props.levelNumber}</span>
                        </div>
                    </div>
                </div>
                <div style={{textAlign:"center", marginTop: "20px"}}>{currentItem}/10</div>
                <div style={{textAlign:"center"}}>Score: {score}</div>

                <div className='question'>
                    {
                        question.map((el) => 
                            <>
                            <div className='q-ct'>
                                <div className='q-ct-2'>
                                    <span>{el}</span>
                                </div>
                            </div>
                            </>
                        )
                    }
                    <div className='q-ct'>
                        <div className='q-ct-2'>=</div>
                    </div>
                    <div className='q-ct'>
                        <div className='q-ct-2' id="answer">{answer}</div>
                    </div>
                </div>

                <div className='keyboard-ct'>
                    <div className='keyboard'>
                        {
                            keys.map((key) => 
                                <>
                                <div className='key-ct'>
                                    <button className='key-ct-2' onClick={onClickKey} value={key}>
                                        {key}
                                    </button>
                                </div>
                                </>
                            )
                        }
                        <div className='key-ct'>
                            <button className='key-ct-2' onClick={deleteLetter}>
                                <FontAwesomeIcon icon={faDeleteLeft}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}