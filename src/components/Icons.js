import React from "react";

function Icons() {
    return (
        <div>
            <div>
                <img src="/images/icon1.png" alt="icon1" />
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img src="/images/icon2.png" alt="icon2" />
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
                <img src="/images/icon3.png" alt="icon3" />
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to components.</p>
            </div>
            <div>
                <img src="/images/icon4.png" alt="icon4" />
                <h3>JSX</h3>
                <p>Statically typed, designed to run on modern browsers.</p>
            </div>
        </div>
    );
}

export default Icons;
