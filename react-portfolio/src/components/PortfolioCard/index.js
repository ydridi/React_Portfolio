import React from "react";
import "./style.css";
import Col from "../Col";

function PortfolioCard(props) {
  return (
    <Col size="md-4">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>GitHub: </strong><a className="underLine" href={props.github}>{props.github}</a>
            </li>
            <li>
              <strong>URL: </strong><a className="underLine" href={props.url}>{props.url}</a>
            </li>
          </ul>
        </div>
      </div>
    </Col>
  );
}

export default PortfolioCard;