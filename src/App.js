import "./App.css";

function Navbar(props) {
  return (
    <div
      style={{
        background: "black",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img src="/images/ironhack-logo.svg"></img>
      <img src="/images/menu-top.svg"></img>
    </div>
  );
}

function Footer(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src="../images/icon1.png" />
        <h3> Declarative</h3>
        <p> React makes it painless to create interative Uls</p>
      </div>
      <div
        style={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src="../images/icon2.png" />
        <h3> Components</h3>
        <p> Build encapsulated components that manage their state.</p>
      </div>
      <div
        style={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src="../images/icon3.png" />
        <h3> Single-Way</h3>
        <p> A set of immutable values are passed to the component's.</p>
      </div>
      <div
        style={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src="../images/icon4.png" />
        <h3> JSX</h3>
        <p> Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer
        </p>
        <button>Awesome!</button>
      </header>
      <Footer />
    </div>
  );
}

export default App;
