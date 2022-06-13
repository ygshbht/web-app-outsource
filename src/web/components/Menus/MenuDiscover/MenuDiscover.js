import React, { useEffect, useState, useContext } from "react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "web/MapboxGlWrapper";
import { Container, Row, Col } from "react-bootstrap";
import { MapContext } from "web/MapProvider";
// import "./MenuDiscover.css";
import styles from "./MenuDiscover.module.scss";

import Form from "react-bootstrap/Form";
import { ArrowBarLeft, Eye, Search, Bullseye } from "react-bootstrap-icons";
import TilesInfo from "web/components/TilesInfo/TilesInfo";

const MenuDiscover = (_) => {
  const { map } = useContext(MapContext);
  const [expanded, setExpanded] = useState(false);
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    flyTo: {
      bearing: 5,
      speed: 6, // Make the flying slow.
      curve: 1, // Change the speed at which it zooms out.
      zoom: 15,
      easing: function (t) {
        return t;
      },
    },
  });
  useEffect(() => {
    if (map) {
      geocoder.onAdd(map);
      // geocoder.addTo(".geocoder-container");
    }
  }, [map]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container
      className={`${styles.menuDiscoverContainer} ${styles.normal} ${
        expanded ? styles.expanded : null
      }`}
    >
      <Row>
        <Col>
          <div className={styles.geocoderContainer} />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex align-items-center" style={{ gap: 3 }}>
            {expanded && (
              <Form.Control type="text" placeholder="Search"></Form.Control>
            )}
            <button
              onClick={() => setExpanded((e) => !e)}
              style={{ background: "transparent", border: 0 }}
            >
              <ArrowBarLeft color="white" />
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {expanded ? (
            <div className={styles.latLongContainer}>
              <div>
                <label>Lng:</label>
                <Form.Control type="text" placeholder="Search"></Form.Control>
              </div>
              <div>
                <label>Lat:</label>
                <Form.Control type="text" placeholder="Search"></Form.Control>
              </div>
            </div>
          ) : (
            <IconButton
              onClick={() => setExpanded(true)}
              icon={Search}
            ></IconButton>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {expanded ? (
            <Form.Control as="select">
              <option>Sattelite</option>
              <option>Sattelite Streets</option>
              <option>Streets</option>
              <option>Outdoors</option>
              <option>Light</option>
              <option>Dark</option>
              <option>Navigation Day</option>
              <option>Navigation Light</option>
            </Form.Control>
          ) : (
            <IconButton
              onClick={() => setExpanded(true)}
              icon={Eye}
            ></IconButton>
          )}
        </Col>
      </Row>
      {!expanded && (
        <Row>
          <Col>
            <IconButton onClick={() => setExpanded(true)} icon={Bullseye} />
          </Col>
        </Row>
      )}
      <Row>
        {expanded ? (
          <TilesInfo />
        ) : (
          <div className={styles.tilesSummaryCondensed}>
            Tiles selected: &nbsp; 0/1000
          </div>
        )}
      </Row>
    </Container>
  );
};

function IconButton({ icon: Icon, onClick }) {
  return (
    <div onClick={onClick} className={styles.iconButton}>
      <Icon></Icon>
    </div>
  );
}

export default MenuDiscover;
