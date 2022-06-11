import React, { useEffect, useState, useContext } from "react";
import { MapContext } from "web/MapProvider";
import { Container, Row, Col, Card } from "react-bootstrap";
// import "./TileInfo.css";
import styles from "./TileInfo.module.css";
// TODO get the selected info via props
const TileInfo = ({ selectedTile, show }) => {
  return show ? (
    <>
      <Card className={styles["tileinfo"]}>
        <Card.Body>
          <Row>
            <Col>{selectedTile}</Col>
            <Col>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={unSelect}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  ) : null;
};
export default TileInfo;
