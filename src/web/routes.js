import React, { useState } from "react";
// TODO migrate from REACH ROUTER TO REACT ROUTER WTF!
import { Router } from "@reach/router";
import MapProvider from "web/MapProvider";
import MenuDiscover from "web/components/Menus/MenuDiscover/MenuDiscover";
import MarketplaceMenu from "web/components/Menus/MarketplaceMenu/MarketplaceMenu";
// import Header from "web/components/Header";
import { Sliders2 } from "react-bootstrap-icons";
import Layout from "./components/Layout";

const renderRoutes = () => (
	<Router>
		<Home path="/" key="home" />
		<Home path="/map" key="map" />
		<MarketPlace path="/marketplace" key="marketplace" />
	</Router>
);

const MarketPlace = () => {
	const [showMarketplace, setShowMarketPlace] = useState(() => {
		return window.innerWidth > 850 ? true : false;
	});

	return (
		<Layout
			propsForMobileMenuSeclector={{
				settings: (
					<Sliders2
						onClick={() => setShowMarketPlace((e) => !e)}
						style={{ color: "white", cursor: "pointer" }}
					/>
				),
			}}
		>
			<div className="map-container-big">
				<div id="main-map" className="map" />
			</div>
			<MapProvider>{showMarketplace && <MarketplaceMenu />}</MapProvider>
		</Layout>
	);
};

function Home() {
	return (
		<Layout>
			<div className="map-container-big">
				<div id="main-map" className="map" />
			</div>
			<MapProvider>
				<div className="bars">
					<div style={{}} id="content">
						<MenuDiscover />
					</div>
				</div>
			</MapProvider>
		</Layout>
	);
}

export default renderRoutes;
