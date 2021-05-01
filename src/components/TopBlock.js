import ironhackLogo from "../ironhack-logo.svg";
import menuTop from "../menu-top.svg";

function TopBlock() {
  return (
    <div className="TopBlock">
      <div class="TopImages">
        <img src={ironhackLogo} alt="Ironhack logo" id="logo"></img>
        <img src={menuTop} alt="Hamburger menu" id="menu"></img>
      </div>
      <h1>
        Say hello to<br></br> ReactJS
      </h1>
      <p>
        You will learn how to use<br></br> the most popular frontend library{" "}
        <br></br>and become a super Ninja developer
      </p>
      <button>Awesome!</button>
    </div>
  );
}

export default TopBlock;
