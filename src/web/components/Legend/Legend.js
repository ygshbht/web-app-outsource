import React, { useEffect, useState, useContext } from "react";
import { MapContext } from "web/MapProvider";
// import "./Legend.css";
import styles from "./Legend.module.css";
// TODO moving to another location whould not show the previous owners
const Legend = (props) => {
	const { map, zoom } = useContext(MapContext);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (map) {
			if (zoom >= 17) {
				setShow(true);
			} else {
				setShow(false);
			}
		}
	}, [map, zoom]);

	return show ? (
		<div id="state-legend" className={styles["legend"]}>
			<h4>Population</h4>
		</div>
	) : null;
};
export default Legend;
