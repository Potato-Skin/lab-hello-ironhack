// import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import ReactCard from "./components/ReactCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="react-cards">
        <section className="react-card">
          <ReactCard image="/images/icon1.png" name="Declarative">
            <p>React makes it painless to create interactive UIs.</p>
          </ReactCard>
        </section>
        <section className="react-card">
          <ReactCard image="/images/icon2.png" name="Components">
            <p>Build encapsulated components that manage their state.</p>
          </ReactCard>
        </section>
        <section className="react-card">
          <ReactCard image="/images/icon3.png" name="Single-Way">
            <p>A set of immutable values are passed to the components.</p>
          </ReactCard>
        </section>
        <section className="react-card">
          <ReactCard image="/images/icon4.png" name="JSX">
            <p>Statically-typed, designed to run on modern browsers.</p>
          </ReactCard>
        </section>
      </div>
    </div>
  );
}

export default App;
