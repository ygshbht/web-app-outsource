import React, { useContext, useState } from "react";
import {
	Map,
	Moon,
	Ethernet,
	CurrencyBitcoin,
	Gift,
	Hammer,
	EnvelopePaper,
	Truck,
	BarChartLine,
	BoxArrowInRight,
	ArrowsAngleExpand,
} from "react-bootstrap-icons";
import "./MenuSelector.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import SlideIn from "web/components/Drawer";
import { Link } from "@reach/router";
import { useLocation } from "@reach/router";
import routes from "web/routeList";
import MenuSelectorMobile from "./MenuSelectorMobile";

const ActiveElemContext = React.createContext(null);

const MenuSelector = ({ settings }) => {
	const [activeElem, setActiveElem] = useState(null);
	const [showExandedMenu, setShowExpanedMenu] = useState(false);
	console.log(settings);
	return (
		<ActiveElemContext.Provider
			value={{ showExandedMenu, activeElem, setActiveElem, setShowExpanedMenu }}
		>
			<SlideIn onClose={() => setShowExpanedMenu(false)} open={showExandedMenu}>
				<div
					style={{
						position: "relative",
						zIndex: 999999999999,
						display: "inline-block",
						height: "100vh",
						width: "auto",
					}}
					id="expanded-sidebar-menu"
					className="expanded-menu open"
				>
					<Menu setShowExpanedMenu={setShowExpanedMenu} expanded={true} />
				</div>
			</SlideIn>
			{/* <MenuSelectorMobile
				settings={settings}
				setShowExpanedMenu={setShowExpanedMenu}
			/> */}
			<div id="menu-selector-desktop">
				<Menu expanded={false} setShowExpanedMenu={setShowExpanedMenu} />
			</div>
		</ActiveElemContext.Provider>
	);
};

export function Menu({ expanded, setShowExpanedMenu }) {
	return (
		<ActiveElemContext.Provider
			value={{ ...useContext(ActiveElemContext), expanded }}
		>
			<Container
				style={{
					overflow: "visible",
					display: "flex",
					height: "100vh",
					justifyContent: "space-between",
					flexDirection: "column",
					padding: expanded ? `30px 50px 30px 0px` : `30px 0`,
					maxWidth: "90vw",
					minWidth: "48px",
				}}
			>
				<div>
					<Row>
						<Col>
							<div
								onClick={() => setShowExpanedMenu((e) => !e)}
								className="toggle-menu"
							>
								<LinkButton toggler icon={ArrowsAngleExpand}>
									Toggle Menu
								</LinkButton>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<LinkButton to={routes.map.link} icon={routes.map.icon}>
								{routes.map.name}
							</LinkButton>
						</Col>
					</Row>
					<Row>
						<Col>
							<LinkButton to={routes.connect.name} icon={routes.connect.icon}>
								{" "}
								{routes.connect.name}
							</LinkButton>
						</Col>
					</Row>
					<Row>
						<Col>
							<LinkButton to={routes.wallet.link} icon={routes.wallet.icon}>
								{routes.wallet.name}
							</LinkButton>
						</Col>
					</Row>
					<Row>
						<Col>
							<LinkButton
								to={routes.marketplaces.link}
								icon={routes.marketplaces.icon}
							>
								{routes.marketplaces.name}
							</LinkButton>
						</Col>
					</Row>
					<Row>
						<Col>
							<LinkButton to={routes.rewards.link} icon={routes.rewards.icon}>
								{routes.rewards.name}
							</LinkButton>
						</Col>
					</Row>
					<Row>
						<Col>
							<LinkButton to={routes.rewards.link} icon={routes.rewards.icon}>
								{routes.rewards.name}
							</LinkButton>
						</Col>
					</Row>
					<Row>
						<Col>
							<LinkButton
								to={routes.leaderboard.link}
								icon={routes.leaderboard.icon}
							>
								{routes.leaderboard.name}
							</LinkButton>
						</Col>
					</Row>
					<Row>
						<Col>
							<LinkButton
								to={routes.launchpad.link}
								icon={routes.launchpad.icon}
							>
								{routes.launchpad.name}
							</LinkButton>
						</Col>
					</Row>
				</div>
				<div>
					<Row>
						<Col>
							<LinkButton
								to={routes.backToWebsite.link}
								icon={routes.backToWebsite.icon}
							>
								{routes.backToWebsite.name}
							</LinkButton>
						</Col>
					</Row>
					<Row>
						<Col>
							<LinkButton to={routes.login.link} icon={routes.login.icon}>
								{routes.login.name}
							</LinkButton>
						</Col>
					</Row>
				</div>
			</Container>
		</ActiveElemContext.Provider>
	);
}

function LinkButton({ to, children, icon: Icon, toggler }) {
	const { expanded } = useContext(ActiveElemContext);
	const location = useLocation();
	const isActive = location.pathname === to;

	return (
		<Link to={toggler ? "" : to ?? "/"}>
			<button
				style={{
					textAlign: "start",
					backgroundColor: "transparent",
					border: "0",
					color: "white",
					fontWeight: "bold",
					margin: "5px 0 ",
					display: "flex",
					gap: 15,
					margin: !expanded ? "7px auto" : "7px 0",
					justifyContent: "start",
				}}
				className="link-button"
			>
				<div
					style={{
						borderRadius: "100%",
						display: "inline-grid",
						placeItems: "center",
						width: 25,
						height: 25,
						flexShrink: 0,
					}}
					className={`icon ${isActive ? "active" : ""}`}
				>
					{Icon && <Icon size={15}></Icon>}
				</div>
				{expanded && (
					<div style={{ textTransform: "uppercase", fontSize: "0.8rem" }}>
						{children}
					</div>
				)}
			</button>
		</Link>
	);
}

export default MenuSelector;
