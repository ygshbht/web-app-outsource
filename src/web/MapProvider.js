import { createContext } from "react";
import React, { useRef, useEffect, useState } from "react";
import Legend from "web/components/Legend/Legend";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapboxGLButtonControl from "web/components/MapboxGLButtonControl/MapboxGLButtonControl";
import mapboxgl from "web/MapboxGlWrapper";

// TODO is it really an empty map context
export const MapContext = createContext();

const MapProvider = (props) => {
  const [center, setCenter] = useState({ lat: 45.525517, lng: -73.574476 });

  const [zoom, setZoom] = useState(15);
  const [map, setMap] = useState(null);

  useEffect(() => {
    console.log("NEW MAP!!!!!!!!!");
    const map = new mapboxgl.Map({
      container: "main-map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [center.lng, center.lat],
      zoom: zoom,
      maxZoom: 17,
      dragRotate: false,
      // maxBounds: [
      //   [150.57998657226562, -34.14931753487508], // Southwest coordinates
      //   [151.37237548828125, -33.533381957638305], // Northeast coordinates
      // ],
    });
    map.on("load", () => {
      setMap(map);
    });
    map.on("move", () => {
      setCenter(map.getBounds().getCenter());
      setZoom(map.getZoom());
    });
    map.on("click", function (e) {
      if (map.getZoom() >= 17) {
        console.log(e);
        map.flyTo({
          duration: 10,
          easing: (t) => 1 - Math.pow(1 - t, 5),
          offset: [0, 0],
          animate: true,
          essential: true,
          center: [e.lngLat.lng, e.lngLat.lat],
        });
      }
    });
    // const geocoder = new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   mapboxgl: mapboxgl,
    // });
    // map.addControl(geocoder);

    // map.addControl(new mapboxgl.NavigationControl({ showCompass: false }));
    // const ctrlPoint = new MapboxGLButtonControl({
    //   className: "mapbox-gl-draw_point",
    //   title: "Draw Point",
    //   eventHandler: () => ({}),
    // });
    // map.addControl(ctrlPoint);
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const value = { map, zoom, center };
  return <MapContext.Provider value={value}>{props.children}</MapContext.Provider>;
};
export default MapProvider;
