function ReactCard(props) {
    return (
        <div className="react-card">   
            <img src={props.image}></img>
            <h3>{props.name}</h3>
            <p>{props.children}</p>
        </div>
    )
}

export default ReactCard