import React, { useEffect, useState, useContext } from "react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "web/MapboxGlWrapper";
import { Container, Button } from "react-bootstrap";
import { MapContext } from "web/MapProvider";
import "./MarketplaceMenu.css";
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
		<Container
			style={{
				backgroundColor: "#7000ff",
				position: "relative",
				zIndex: 100,
				paddingTop: "20px",
			}}
			id="marketplace-menu-container"
		>
			<div
				style={{
					color: "white",
					display: "flex",
					justifyContent: "space-between",
					margin: "0px auto ",
				}}
			>
				<div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
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
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div style={{ display: "flex", gap: 5, alignItems: "center" }}>
						<Building></Building>
						<span>Urban</span>
					</div>
					<Form.Check type="checkbox"></Form.Check>
				</div>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div style={{ display: "flex", gap: 5, alignItems: "center" }}>
						<TriangleFill></TriangleFill>
						<span>Non Urban</span>
					</div>
					<Form.Check type="checkbox"></Form.Check>
				</div>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div style={{ display: "flex", gap: 5, alignItems: "center" }}>
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
					style={{
						display: "flex",
						justifyContent: "space-between",
						gap: 5,
						alignItems: "center",
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

			<Button
				style={{
					background:
						"radial-gradient(100% 683.38% at 100% -1.52%,#AA20EB 0%,#FF6B00 100%)",
					width: "100%",
					marginTop: "20px",
				}}
			>
				Apply
			</Button>
		</Container>
	);
};

function AppAccordion({ open, setOpen, icon, title, children }) {
	return (
		<div
			style={{
				margin: "10px auto",
				display: "flex",
				flexDirection: "column",
				gap: 10,
				alignItems: "stretch",
				padding: 15,
				background: "#6408d2",
				color: "white",
			}}
		>
			<Button
				onClick={() => setOpen((e) => !e)}
				style={{
					border: 0,
					padding: 0,
					display: "flex",
					justifyContent: "space-between",
					background: "transparent",
					alignItems: "center",
					width: "100%",
					fontWeight: "bold",
					textTransform: "uppercase",
				}}
			>
				<span style={{ display: "flex", gap: 5, alignItems: "center" }}>
					{icon}
					{title}
				</span>

				{open ? <CaretUpFill /> : <CaretDownFill />}
			</Button>
			{/* <Collapse in={open}> */}
			{open && <div>{children}</div>}
			{/* </Collapse> */}
		</div>
	);
}

export default MenuDiscover;
