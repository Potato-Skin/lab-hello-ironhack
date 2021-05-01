import React from "react";
import "./App.css";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
      }}
    >
      <img src="/images/ironhack-logo.svg" alt="ironhack-logo"></img>
      <img src="/images/menu-top.svg" alt="menu-top"></img>
    </div>
  );
}

function FirstDiv(props) {
  return (
    <div>
      <h1>Say hello to ReactJS</h1>
      <div>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer
        </p>
      </div>
      <button>Awesome!</button>
    </div>
  );
}

function SecondDiv() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        <img src="/images/icon1.png" alt="icon1"></img>
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src="/images/icon2.png" alt="icon2"></img>
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img src="/images/icon3.png" alt="icon3"></img>
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div>
        <img src="/images/icon4.png" alt="icon4"></img>
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <FirstDiv />
        <SecondDiv />
      </header>
    </div>
  );
}

export default App;
