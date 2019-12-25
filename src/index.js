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
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
