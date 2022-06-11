import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => {
	return (
		<Navbar>
			<Navbar.Brand href="#no">CW</Navbar.Brand>
			<Nav className="justify-content-cente">
				<Nav.Item>
					<Nav.Link href="#map">Map</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="#search">Search</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="#ownings">Ownings</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="#notif">Notif</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="#profile">Profile</Nav.Link>
				</Nav.Item>
			</Nav>
		</Navbar>
	);
};

export default Header;
