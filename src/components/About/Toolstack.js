import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiIntellijidea,
  SiEclipseche,
  SiMysql,
} from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <div title="IntelliJ IDEA" >
      <SiIntellijidea title="IntelliJ IDEA" />
      </div>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <div title="Visual Studio Code">
        <SiVisualstudiocode title="Visual Studio Code" />
        </div>
      </Col>
    <Col xs={4} md={2} className="tech-icons">
      <div title="Postman">
        <SiPostman title="Postman" />
      </div>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <div title="Eclipse">
      <SiEclipseche title="Eclipse" />
      </div>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <div title="My SQL">
      <SiMysql title="My SQL" />
      </div>
    </Col>
    </Row>
  );
}

export default Toolstack;
