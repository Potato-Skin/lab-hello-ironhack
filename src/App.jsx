import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";

function InfoSection() {
  return (
    <section class="Cards-section">
      <div class="Info-card">
        <img src="images/icon1.png"></img>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div class="Info-card">
        <img src="images/icon2.png"></img>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div class="Info-card">
        <img src="images/icon3.png"></img>
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div class="Info-card">
        <img src="images/icon4.png"></img>
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </section>
  );
}

function Button() {
  return <button>Awesome!</button>;
}

function App() {
  return (
    <div className="App">
      <header class="App-header">
        <div class="App-header-container">
          <Navbar />
          <Header />
        </div>
      </header>
      <InfoSection />
    </div>
  );
}

export default App;
