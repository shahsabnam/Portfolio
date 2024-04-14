import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {

  DiAngularSimple,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiMysql,
  SiSpringboot,
  SiSpringsecurity,
  SiHtml5,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus  title="C++"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot title="Spring Boot" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringsecurity title="Spring Security"/>
      </Col>     
      <Col xs={4} md={2} className="tech-icons">
        <DiGit  title="Git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML" />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql  title="My Sql"/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple title="Angular" />
      </Col>
    </Row>
  );
}

export default Techstack;
