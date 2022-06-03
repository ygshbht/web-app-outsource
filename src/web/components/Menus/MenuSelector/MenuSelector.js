import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
const MenuSelector = (_) => {
  return (
    <Container>
      <Row>
        <Col>
          <button>Map</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button>Connect</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button>Wallet</button>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuSelector;
