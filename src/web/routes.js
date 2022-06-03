import React, { useEffect } from "react";
// TODO migrate from REACH ROUTER TO REACT ROUTER WTF!
import { Router } from "@reach/router";
import MapProvider from "web/MapProvider";
import MenuDiscover from "web/components/Menus/MenuDiscover/MenuDiscover";
import MenuSelector from "web/components/Menus/MenuSelector/MenuSelector";
import Header from "web/components/Header";

const renderRoutes = () => (
  <Router>
    <Home path="/" key="home" />
  </Router>
);
const Home = (props) => {
  return [
    <div className="main">
      <div className="map-container-big">
        <div id="main-map" className="map" />
      </div>
      <MapProvider>
        <div className="bars">
          <div id="sideBar">
            <MenuSelector />
          </div>
          <div id="content">
            <MenuDiscover />
          </div>
        </div>
      </MapProvider>
    </div>,
  ];
};

export default renderRoutes;
