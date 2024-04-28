import {useState} from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Level from './components/Playground/Level.jsx'
import Play from './components/Playground/Play.jsx'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";


function App() {
  const operations = ["addition", "subtraction", "multiplication", "division", "all"];
  
    const routePlay = (operation) => {
        const array = [];
        for (let i = 1; i <= 50; i++) {
        array.push(<Route path={"/mathblitz-proj/"+operation+"/"+i} element={<Play operation={operation} levelNumber={i}/>}/>)
        }
        return array;
    }

    return (
        <>
          <BrowserRouter>
            <Home/>
      
            <Routes>
              {operations.map(operation => (
                <>
                <Route path={"/mathblitz-proj/"+operation} element={<Level operation={operation}/>}/>
                {routePlay(operation)}
                </>
              ))}
            </Routes>
          </BrowserRouter>
        </>
        )
}

export default App
