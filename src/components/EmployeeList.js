import React from "react";

const styles = {
    card: {
        "borderRadius": "2% 2%",
        width: "18rem",
        margin: "1%",
        "boxShadow": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        "textAlign": "center",
    },
    profilePicture: {
        "borderRadius": "60% 60%",
        "position": "relative",
        "top": "5%",
        "left": "50%",
        "maxWidth": "180px",
        "marginBottom": "20px",
        "boxShadow": "3px 3px 20px rgba(0, 0, 0, 0.5)",
        "border": "2px solid rgba(255, 255, 255, 1)",
        "WebkitTransform": "translate(-50%, 0%)",
        "transform": "translate(-50%, 0%)",
    },
    "card:hover": {
        "transform":"scale(1.05)"
    }
}

function EmployeeList(props) {
  return (

    <div className="container">
        <div className="row justify-content-center">
            {props.results.map(result => (
                <div className="card" style={styles.card} key={result.email}>
                    <img alt={result.name.first} style={styles.profilePicture} className="card-img-top" src={result.picture.large} />
                    <div className="card-body">
                        <h5 className="card-title">{result.name.first} {result.name.last}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{result.email}</li>
                        <li className="list-group-item">{result.phone}</li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
  );
}

export default EmployeeList;
