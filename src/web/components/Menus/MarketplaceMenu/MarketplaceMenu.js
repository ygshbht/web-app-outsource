import React, { useEffect, useState, useContext } from "react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "web/MapboxGlWrapper";
import { Container, Button } from "react-bootstrap";
import { MapContext } from "web/MapProvider";
import Form from "react-bootstrap/Form";
import {
  CaretUpFill,
  CaretDownFill,
  ArrowsAngleExpand,
  Hammer,
  TriangleFill,
  Gem,
  TriangleHalf,
  Grid,
  Water,
  Building,
  ArrowsAngleContract,
} from "react-bootstrap-icons";
import styles from "./MarketplaceMenu.module.css";
const MenuDiscover = (_) => {
  const { map } = useContext(MapContext);
  const [showLandType, setShowLandType] = useState(false);
  const [showTileCount, setShowTileCount] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
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

  function handleToggleCollapseClick() {
    let showCollapse = true;
    if (showLandType || showCategories || showPrice || showPrice) {
      showCollapse = false;
    }
    setShowCategories(showCollapse);
    setShowLandType(showCollapse);
    setShowPrice(showCollapse);
    setShowTileCount(showCollapse);
  }

  return (
    <Container className={styles.marketplaceMenuContainer}>
      <div className={styles.header}>
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <Hammer></Hammer>
          <span style={{ textTransform: "uppercase" }}>Marketplace</span>
        </div>
        <span onClick={handleToggleCollapseClick} style={{ cursor: "pointer" }}>
          {showLandType || showCategories || showPrice || showPrice ? (
            <ArrowsAngleContract></ArrowsAngleContract>
          ) : (
            <ArrowsAngleExpand />
          )}
        </span>
      </div>
      <div>
        <Form.Control
          style={{ margin: "20px auto" }}
          type="text"
          placeholder="Search username"
        ></Form.Control>
      </div>
      <AppAccordion
        open={showLandType}
        setOpen={setShowLandType}
        title={"Land Type"}
      >
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-between">
            <Building></Building>
            <span>Urban</span>
          </div>
          <Form.Check type="checkbox"></Form.Check>
        </div>
        <div className="d-flex justify-content-between">
          <div
            style={{
              display: "flex",
              gap: 5,
              alignItems: "center",
            }}
          >
            <TriangleFill></TriangleFill>
            <span>Non Urban</span>
          </div>
          <Form.Check type="checkbox"></Form.Check>
        </div>
        <div className="d-flex justify-content-between">
          <div
            style={{
              display: "flex",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Water />
            <span>Water</span>
          </div>
          <Form.Check type="checkbox"></Form.Check>
        </div>
      </AppAccordion>
      <AppAccordion
        icon={<Grid />}
        title="Tile Count"
        open={showTileCount}
        setOpen={setShowTileCount}
      >
        <div
          className="d-flex justify-content-between align-items-center "
          style={{
            gap: 5,
          }}
        >
          <Form.Control placeholder="Min 01" type="number"></Form.Control>
          <span>to</span>
          <Form.Control placeholder="Max 1000" type="number"></Form.Control>
        </div>
      </AppAccordion>
      <AppAccordion
        icon={<TriangleHalf />}
        open={showPrice}
        setOpen={setShowPrice}
        title="Price [Matic]"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Form.Control placeholder="Min 0.1" type="number"></Form.Control>
          <span>to</span>
          <Form.Control placeholder="Max" type="number"></Form.Control>
        </div>
      </AppAccordion>
      <AppAccordion
        icon={<Gem />}
        title="Categories"
        open={showCategories}
        setOpen={setShowCategories}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Land Art</span>
          <Form.Check type="checkbox"></Form.Check>
        </div>
      </AppAccordion>

      <Button className={styles.applyBtn}>Apply</Button>
    </Container>
  );
};

function AppAccordion({ open, setOpen, icon, title, children }) {
  return (
    <div className={styles.appAccordion}>
      <Button
        onClick={() => setOpen((e) => !e)}
        className={styles.appAccordionToggle}
      >
        <span style={{ display: "flex", gap: 5, alignItems: "center" }}>
          {icon}
          {title}
        </span>

        {open ? <CaretUpFill /> : <CaretDownFill />}
      </Button>
      {open && <div>{children}</div>}
    </div>
  );
}

export default MenuDiscover;
