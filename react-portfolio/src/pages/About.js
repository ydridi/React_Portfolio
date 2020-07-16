import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="sm-4">
            <img alt="Yassine Dridi" src="yassine.jpg" className="img-fluid" />
          </Col>
          <Col size="sm-4" style={{ color: 'cadetblue' }}>
            <p>Hi.  My name is Yassine Dridi.  I am 36 years old.  I am currently working as a manufacturing Process Technicien for a company called Zentech.  I work with Xray-machine programmer.<br /><br />
              I am taking this bootcamp so I can have a good knowledge with Full-stack-Developpere.<br /><br />Please feel free to visit my other pages which are in the navigation bar at the top of the page.   I hope you enjoy my page.
            </p>
          </Col>
          <Col size="sm-4">
            <Card title="GW Fullstack Developer Bootcamp" subtitle="Part-Time (Monday, Wednesday and Saturday)" text="Please Google GW Bootcamps for more information. " />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;