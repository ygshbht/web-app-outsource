import React, { useEffect, useState, useContext } from "react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "web/MapboxGlWrapper";
import {
	Tooltip,
	OverlayTrigger,
	Container,
	Row,
	Col,
	Card,
	Button,
} from "react-bootstrap";
import { MapContext } from "web/MapProvider";
import "./MenuDiscover.css";
import Form from "react-bootstrap/Form";
import {
	InfoCircle,
	Water,
	Building,
	CaretUpFill,
	ArrowBarLeft,
	Eye,
	Search,
	CurrencyDollar,
	Bullseye,
} from "react-bootstrap-icons";
import routes from "web/routeList";
import { center } from "@turf/turf";

const MenuDiscover = (_) => {
	const { map, zoom } = useContext(MapContext);
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
			id="menu-discover-container"
			class={expanded ? "expanded" : ""}
			style={{
				backgroundColor: "rgba(36, 0, 81, 0.75)",
				maxWidth: "min(494px, 100vw)",
				height: "100%",
			}}
		>
			<Row>
				<Col>
					<div className="geocoder-container" />
				</Col>
			</Row>
			<Row>
				<Col>
					<div style={{ display: "flex", gap: 3, alignItems: "center" }}>
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
						<div
							style={{
								display: "Flex",
								gap: "15px",
								justifyContent: "space-between",
							}}
						>
							<div style={{ display: "flex" }}>
								<label style={{ color: "white" }} className="form-label">
									Lng:
								</label>
								<Form.Control type="text" placeholder="Search"></Form.Control>
							</div>
							<div style={{ display: "flex" }}>
								<label style={{ color: "white" }} className="form-label">
									Lat:
								</label>
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
						// <select
						// 	className="form-select p-2"
						// 	style={{ borderRadius: "0.25rem", width: "100%" }}
						// >

						// </select>
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
					<div
						style={{
							marginTop: 10,
							fontWeight: "bold",
							color: "white",
							textTransform: "uppercase",
							writingMode: "vertical-rl",
						}}
					>
						Tiles selected: &nbsp; 0/1000
					</div>
				)}
			</Row>
		</Container>
	);
};

function AppRow({ children }) {
	return (
		<div style={{ display: "flex", alignItems: "start", gap: 10 }}>
			<div
				className="d-flex justify-content-center pt-1"
				style={{ minWidth: "7%" }}
			>
				{children[0]}
			</div>
			<div style={{ flexGrow: "1" }}>{children[1]}</div>
		</div>
	);
}

function IconButton({ icon: Icon, onClick }) {
	return (
		<div
			onClick={onClick}
			style={{
				width: 24,
				height: 25,
				background: "white",
				borderRadius: "5px",
				display: "grid",
				padding: 0,
				cursor: "pointer",
				placeItems: "center",
			}}
		>
			<Icon></Icon>
		</div>
	);
}

function TilesInfo() {
	return (
		<Col className="tiles-info" style={{ color: "white" }}>
			<div style={{ color: "white" }}>
				<div
					style={{
						textTransform: "uppercase",
						display: "flex",
						justifyContent: "space-between",
						color: "white",
						marginTop: "15px",
					}}
				>
					<div style={{ fontWeight: "bold" }}>Tiles Selected: -/1000</div>
					<a style={{ textDecoration: "underline", color: "white" }} href="#">
						Clear selection
					</a>
				</div>
			</div>
			<div>
				<div
					style={{
						textTransform: "uppercase",
						fontWeight: "bold",
						margin: "10px 0",
						color: "rgb(44, 206, 143)",
					}}
				>
					No tiles selected
				</div>
			</div>
			<div>
				<div className="tiles-info-card-top">
					<div className="font-weight-bold d-flex align-items-center justify-content-between">
						<p className="m-0" style={{ fontSize: "1.5rem" }}>
							{" "}
							Budavári Palota, Budapest
						</p>
						<Bullseye />
					</div>
					<div style={{ gap: 10 }} className="font-weight-bold d-flex ">
						<div className="d-flex" style={{ alignItems: "center", gap: 5 }}>
							<Building />
							<span>644</span>
						</div>
						<div className="d-flex" style={{ alignItems: "center", gap: 5 }}>
							<CaretUpFill />
							<span>644</span>
						</div>
						<div className="d-flex" style={{ alignItems: "center", gap: 5 }}>
							<Water />
							<span>0</span>
						</div>
					</div>
					<div className="d-flex align-items-center  text-uppercase">
						<span
							style={{
								color: "orange",
								border: "1px solid orange",
								padding: "2px 5px",
								fontSize: "0.8rem",
							}}
						>
							Not land art compatible
						</span>
						<OverlayTrigger
							placement="top"
							overlay={
								<Tooltip>
									Neque porro quisquam est qui dolorem ipsum quia dolor sit
									amet, consectetur, adipisci velit..." "There is no one who
									loves pain itself, who seeks after it and wants to have it,
									simply because it is pain...
								</Tooltip>
							}
						>
							<InfoCircle style={{ marginLeft: 10 }} />
						</OverlayTrigger>
					</div>
					<AppRow>
						<div>
							<CurrencyDollar style={{ fontSize: "1.5rem" }} />
						</div>
						<div>
							<div
								className="d-flex align-items-center"
								style={{ fontWeight: "bold" }}
							>
								<span style={{ fontSize: "1.5rem" }}>
									<span>Total</span>

									<span className="text-primary" style={{}}>
										&nbsp;64.4 USDT
									</span>
								</span>
								<OverlayTrigger
									placement="top"
									overlay={
										<Tooltip>
											Neque porro quisquam est qui dolorem ipsum quia dolor sit
											amet, consectetur, adipisci velit..." "There is no one who
											loves pain itself, who seeks after it and wants to have
											it, simply because it is pain...
										</Tooltip>
									}
								>
									<InfoCircle style={{ marginLeft: 5 }} />
								</OverlayTrigger>
							</div>
							<div className="d-flex">
								<div className="p-0 md-col-4 col-6 text-secondary">
									{" "}
									Price per tile
								</div>
								<div className="col-8"> 0.1 USDT</div>
							</div>
						</div>
					</AppRow>
					<AppRow>
						<InfoCircle />

						<div
							style={{ flexDirection: "column" }}
							className="d-flex flex-flex-column"
						>
							<div className="d-flex">
								<div className="p-0 md-col-4 col-6 text-secondary">
									{" "}
									Current owner:
								</div>

								<div className="col-8"> zsef</div>
							</div>
							<div className="d-flex">
								<div className="p-0 md-col-4 col-6 text-secondary">
									{" "}
									Purchased for:
								</div>
								<div className="col-8"> 66.4 USDT</div>
							</div>

							<div className="d-flex">
								<div className="md-col-4 col-6 p-0 text-secondary">
									{" "}
									Price per tile
								</div>
								<div className="col-8"> 0.1 USDT</div>
							</div>
						</div>
					</AppRow>

					<AppRow>
						<InfoCircle />
						<div>
							<div> Budapest, Szent Gyorgy Utca 2, 1013, Hungary</div>
							<div className="text-secondary">19.03921 47.495895</div>
						</div>
					</AppRow>
				</div>
				<div
					className="tiles-info-card-bottom"
					style={{ background: "#240051" }}
				>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div className="text-secondary p-0 col-6">Current market value</div>
						<div className="p-0 col-3">721.79 USDT</div>
						<span className="p-0 col-3">10,20 %</span>
					</div>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div className=" text-secondary p-0 col-6">
							Original new land value:
						</div>
						<div className="p-0 col-3">0.1 USDT</div>
						<div className="p-0 col-3"></div>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "stretch",
							gap: 10,
							marginTop: 20,
						}}
						className="tiles-selected-buttons"
					>
						<Button
							style={{
								background:
									"linear-gradient(160.71deg,rgba(81,238,144,.2) .39%,rgba(17,17,17,0) 87.04%),radial-gradient(100% 100% at 100% 0%,#6100FF 0%,rgba(17,17,17,0) 100%),#874BE8",
							}}
						>
							History
						</Button>
						<Button
							style={{
								background:
									"radial-gradient(100% 683.38% at 100% -1.52%,#AA20EB 0%,#FF6B00 100%)",
							}}
						>
							Inspect
						</Button>
						<Button
							style={{
								background:
									"radial-gradient(100% 683.38% at 100% -1.52%,#AA20EB 0%,#FF6B00 100%)",
							}}
						>
							Place an offer
						</Button>
					</div>
				</div>
			</div>
		</Col>
	);
}

export default MenuDiscover;
