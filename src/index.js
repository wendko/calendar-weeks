import React from "react";
import ReactDOM from "react-dom";
import CalendarWeeks from './components/CalendarWeeks';

import "./styles.css";

function App() {
    return (
        <>
            <input type="checkbox" className="theme-toggle" />
            <div className="app">
                <CalendarWeeks />
            </div>
            <footer>
                By <a href="https://www.wendko.com" target="_blank">wendko</a>.
                Created with
                &nbsp;<a href="https://momentjs.com/" target="_blank">momentjs</a>
                &nbsp;and&nbsp;<a href="https://reactjs.org/" target="_blank">React</a>.
            </footer>
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
