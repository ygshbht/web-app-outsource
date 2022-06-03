import React, { useEffect, useContext } from "react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "web/MapboxGlWrapper";
import { Container, Row, Col, Card } from "react-bootstrap";
import { MapContext } from "web/MapProvider";
import "./MenuDiscover.css";

const MenuDiscover = (_) => {
  const { map, zoom } = useContext(MapContext);
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
      geocoder.addTo(".geocoder-container");
    }
  }, [map]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <Row>
        <Col>
          <div className="geocoder-container" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div>Testtttt</div>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuDiscover;
