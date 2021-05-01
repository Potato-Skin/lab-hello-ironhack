function ReactInfoCard(props) {
    return (
      <div className="info-card">
        <img src={props.imageSource}></img>
        <h3>{props.name}</h3>
        <p> {props.children}</p>
      </div>
    );
  }

  export default ReactInfoCard;