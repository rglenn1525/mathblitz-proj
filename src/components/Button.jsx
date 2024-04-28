import './Button.css'

export default function Button(props) {
    let clickResponse = props.clicked;

    return (
        <>
            <button className="optionButton" style={props.style} onClick={clickResponse}>{props.buttonText}</button>
        </>
    )
}