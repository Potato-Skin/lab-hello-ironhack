import logo from "./logo.svg";
import "./App.css";
import icon1 from "./icon1.png";
import navbar from "./img/menu-top.svg";
import ironhack from "./img/ironhack-logo.svg";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import icon4 from "./img/icon4.png";
import { Component } from "react";

function NavBar() {
  return (
    <div>
      {" "}
      <img src={ironhack} />
      <img src={navbar} />
    </div>
  );
}

function Mufasa(props) {
  return <h1>Say hello to ReactJS</h1>;
}

function Awesome() {
  let styles = {
    margin: "20px",
    width: "200px",
    height: "100px",
    backgroundColor: "white",
  };
  return <button style={styles}>Awesome!</button>;
}

function Declar(props) {
  let styles2 = {
    textAlign: "left",
  };
  return (
    <div style={styles2}>
      Declarative <br></br>
      {props.children}
    </div>
  );
}

function Compo(props) {
  return (
    <div>
      {" "}
      Components <br></br>
      {props.children}
    </div>
  );
}

function Single(props) {
  return (
    <div>
      {" "}
      Single-Way <br></br> {props.children}
    </div>
  );
}
function Jsx(props) {
  return (
    <div>
      JSX<br></br> {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Mufasa />
        <p>
          You will learn how to use the most popular frontend library, and
          become a super ninja developer.
        </p>
        <Awesome />
      </header>
      <Declar className="Declar">
        <img src={icon1} className="icon1" alt="declarative" />
        <p>React makes it painless to create interactive UIs.</p>
      </Declar>
      <Compo>
        <img src={icon2} />{" "}
        <p>Build encapsulated components that manage their state.</p>
      </Compo>
      <Single>
        {" "}
        <img src={icon3} />
        <p>A set of immutable values are passed to the components.</p>
      </Single>
      <Jsx>
        <img src={icon4} />
        <p>Statically-typed. designed to run on modern browsers</p>
      </Jsx>
    </div>
  );
}

export default App;
