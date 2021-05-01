import "./App.css";
import SmallDiv from "./SmallDiv.js";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#282c34", padding: "20px" }}>
      <img src="/images/ironhack-logo.svg" alt="not found" />
    </nav>
  );
}

function Header(props) {
  return (
    <div className="header-div" style={{ padding: "100px 0 50px 50px" }}>
      <h1 style={{ fontSize: "100px", margin: "0" }}>Say hello to ReactJS</h1>
      <p style={{ padding: "0", margin: "0" }}>You will learn how to use</p>
      <p style={{ padding: "0", margin: "0" }}>
        the most popular frontend library,
      </p>
      <p style={{ padding: "0", margin: "0" }}>
        and become a super Ninja developer.
      </p>
      {props.Button()}
    </div>
  );
}

function Button() {
  return (
    <button style={{ padding: "20px", color: "#282c34", margin: "30px 0" }}>
      Awesome!
    </button>
  );
}

function BottomSection() {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "#282c34",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
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
