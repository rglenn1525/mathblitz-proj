import "./LevelButton.css"

export default function LevelButton(props) {
    return (
        <div className="levels">
            <button onClick={props.clicked} className="level-button">{props.levelNumber}</button>
        </div>
    )
}