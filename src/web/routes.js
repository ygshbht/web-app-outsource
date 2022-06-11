import React, { useState } from "react";
// TODO migrate from REACH ROUTER TO REACT ROUTER WTF!
import { Router } from "@reach/router";
import MenuDiscover from "web/components/Menus/MenuDiscover/MenuDiscover";
import MarketplaceMenu from "web/components/Menus/MarketplaceMenu/MarketplaceMenu";
// import Header from "web/components/Header";
import { Sliders2 } from "react-bootstrap-icons";
import Layout from "./components/Layout/Layout";
// import Layout from "./components/Layout";

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
			{showMarketplace && <MarketplaceMenu />}
		</Layout>
	);
};

function Home() {
	return (
		<Layout>
			<MenuDiscover />
		</Layout>
	);
}

export default renderRoutes;
