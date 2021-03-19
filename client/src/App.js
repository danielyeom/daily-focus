import React from "react";

import Header from "./components/Header";
import "./App.css";
import CalendarWidget from "./components/CalendarWidget";

function App() {
    return (
        <div className="App">
            <Header />
            <CalendarWidget />
        </div>
    );
}

export default App;
