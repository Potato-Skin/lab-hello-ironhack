import React from "react";
import "./App.css";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Hello from "./components/Hello";
import Icons from "./components/Icons";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <section>
                        <Navbar />
                        <Hello />
                        <Button />
                    </section>
                    <section>
                        <Icons />
                    </section>
                </div>
            </header>
        </div>
    );
}

export default App;
