import React, { useState } from "react";
import { List } from "react-bootstrap-icons";
// import "./MenuSelector.css";
import { Container } from "react-bootstrap";
import { Menu as MenuList } from "./MenuSelector";
import { useLocation } from "@reach/router";
import routes from "web/routeList";
// import Drawer from "web/components/Drawer";

import styles from "./MenuSelector.module.css";
import Drawer from "web/components/Drawer/Drawer";
const MenuSelectorMobile = ({ settings }) => {
	const [showExpanedmenu, setShowExpanedMenu] = useState(false);
	return (
		<div id="menu-selector-mobile" className={styles["menu-selector-mobile"]}>
			<Menu settings={settings} setShowExpanedMenu={setShowExpanedMenu} />
			<Drawer onClose={() => setShowExpanedMenu(false)} open={showExpanedmenu}>
				<div style={{ background: "rgb(36, 0, 81)" }}>
					<MenuList expanded={true} setShowExpanedMenu={setShowExpanedMenu} />
				</div>
			</Drawer>
		</div>
	);
};

function Menu({ setShowExpanedMenu, settings: Settings }) {
	const location = useLocation();
	let activeRoute;
	for (let route in routes) {
		if (routes[route].link === location.pathname) {
			activeRoute = routes[route];
		}
	}
	const Icon = activeRoute.icon ?? <div></div>;
	return (
		<Container
			style={{
				display: "flex",
				// height: "100%",
				justifyContent: "space-between",
				flexDirection: "column",
				margin: 0,
				maxWidth: 9999,
				padding: 0,
				// paddingTop: "30px",
				height: "38px",
				width: "100%",
				background: "rgb(112, 0, 255)",
			}}
		>
			<div style={{ height: "38px", width: "100%", display: "flex" }}>
				<div
					style={{
						width: "44px",
						minWidth: "44px",
						height: "100%",
						background: "black",
						display: "grid",
						placeItems: "center",
						cursor: "pointer",
					}}
				>
					<List
						color="white"
						size={20}
						onClick={() => setShowExpanedMenu(true)}
					/>
				</div>
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "space-between",
						alignItems: "center",
						paddingRight: "15px",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "start",
							alignItems: "center",
							gap: 10,
							padding: "0 15px",
							color: "white",
							fontWeight: "bold",
							textTransform: "uppercase",
						}}
					>
						<Icon />
						<div>{activeRoute.name}</div>
					</div>
					{Settings && Settings}
				</div>
			</div>
		</Container>
	);
}

export default MenuSelectorMobile;
