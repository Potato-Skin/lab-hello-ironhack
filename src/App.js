//import logo from "./logo.svg";
import "./App.css";
import AwesomeButton from "./components/AwesomeButton";
import NavBar from "./components/NavBar";
import ReactInfoCard from "./components/ReactInfoCard";

function Header() {
  return (
    <header
      className="App-header"
      style={{
        backgroundImage: 'url("/images/react-logo.svg")',
      }}
    >
      <section className="menu-bar"></section>
      <section style={{ maxWidth: "50vw", padding: "50px" }}>
        <h1
          style={{
            fontSize: "2em",
          }}
        >
          Say hello to ReactJS
        </h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <AwesomeButton />
      </section>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <div className="react-info">
        <ReactInfoCard imageSource="/images/icon1.png" name="Declarative">
          React makes it painless to create interactive UIs.
        </ReactInfoCard>
        <ReactInfoCard imageSource="/images/icon2.png" name="Components">
          Build encapsulated components that manage their state.
        </ReactInfoCard>
        <ReactInfoCard imageSource="/images/icon3.png" name="Single-Way">
          A set of immutable values are passed to the components.
        </ReactInfoCard>
        <ReactInfoCard imageSource="/images/icon4.png" name="JSX">
          Statically-typed, designed to run on modern browsers
        </ReactInfoCard>
      </div>
    </div>
  );
}

export default App;
