import "./App.css";
import SmallDiv from "./SmallDiv.js";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/images/ironhack-logo.svg" alt="not found" />
    </nav>
  );
}

function Header(props) {
  return (
    <div className="header-div">
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use</p>
      <p>the most popular frontend library,</p>
      <p>and become a super Ninja developer.</p>
      {props.Button()}
    </div>
  );
}

function Button() {
  return <button>Awesome!</button>;
}

function BottomSection() {
  return (
    <div className="bottom-div">
      <SmallDiv
        image="/images/icon1.png"
        title="Declarative"
        text="React makes it painless to create interactive UIs."
      />
      <SmallDiv
        image="/images/icon2.png"
        title="Components"
        text="Build encapsulated compnents that manage their state."
      />
      <SmallDiv
        image="/images/icon3.png"
        title="Single-Way"
        text="A set of immutable values are passed to the components."
      />
      <SmallDiv
        image="/images/icon4.png"
        title="JSX"
        text="Statically-typed, designed to run on modern browsers."
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Header Button={Button} />
        <BottomSection />
      </header>
    </div>
  );
}

export default App;
