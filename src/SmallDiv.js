import React from "react";

function SmallDiv(props) {
  return (
    <div
      style={{
        width: "15%",
        display: "flex",
        flexDirection: "column",
        padding: "110px 1px",
      }}
    >
      <img src={props.image} alt="not found" />
      <h3 style={{ margin: "0", fontSize: "21px" }}>{props.title}</h3>
      <p style={{ fontSize: "15px", color: "gray" }}>{props.text}</p>
    </div>
  );
}

export default SmallDiv;
