import "./Level.css"
import LevelButton from "./LevelButton"
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";

import clickWAV from '../../assets/click.wav'

export default function Play({operation})  {
    const click = new Audio(clickWAV);

    const levels = [];

    for (let i = 1; i <= 50; i++) {
        levels.push(<Link to={"/"+operation+"/"+i}><LevelButton clicked={() => click.play()} levelNumber={i}/></Link>);
    }

    return (
        <div className="play">
            <h1>{operation}</h1>
            <h2>Levels</h2>
            <div className="level-list">
                {levels}
            </div>
        </div>
    )
}