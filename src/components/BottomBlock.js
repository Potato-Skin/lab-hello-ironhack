import icon1 from "../icon1.png";
import icon2 from "../icon2.png";
import icon3 from "../icon3.png";
import icon4 from "../icon4.png";

function BottomBlock() {
  return (
    <div className="BottomBlock">
      <div>
        <img src={icon1} alt="Some icon"></img>
        <h3>Declarative</h3>
        <p>
          React makes it <br></br>painless to create <br></br>interactive UIs.
        </p>
      </div>
      <div>
        <img src={icon2} alt="Some icon"></img>
        <h3>Components</h3>
        <p>
          Build encapsulated <br></br>components that <br></br>manage their
          state.
        </p>
      </div>
      <div>
        <img src={icon3} alt="Some icon"></img>
        <h3>Single-Way</h3>
        <p>
          A set of immutable <br></br>values are passed to <br></br>the
          componens.
        </p>
      </div>
      <div>
        <img src={icon4} alt="Some icon"></img>
        <h3>JSX</h3>
        <p>
          Statically-typed <br></br>designed to run on <br></br>modern browsers.
        </p>
      </div>
    </div>
  );
}

export default BottomBlock;
