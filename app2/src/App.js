import React from 'react'

import logo from './logo.svg'

import './App.css'

const App = () => (
    <div className="App">
        <header className="App-header">
            <img src={`${process.env.REACT_APP_CONTENT_HOST}${logo}`} className="App-logo" alt="logo"/>
            <p>
                Application 2
            </p>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>
)

export default App
