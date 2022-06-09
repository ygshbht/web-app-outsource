import MenuSelector from "web/components/Menus/MenuSelector/MenuSelector";
import MenuSelectorMobile from "web/components/Menus/MenuSelector/MenuSelectorMobile";
import React from "react";

export default function Layout({ children, propsForMobileMenuSeclector = {} }) {
	return (
		<div style={{ display: "flex", alignItems: "stretch", minHeight: "100vh" }}>
			<div
				style={{ zIndex: 999999999999, position: "sticky", left: 0, top: 0 }}
				id="sideBar"
			>
				<MenuSelector />
			</div>
			<div
				style={{
					flexGrow: 1,
				}}
			>
				<div
					style={{
						position: "sticky",
						top: 0,
						left: 0,
						// transform: "translateX(0)",
						zIndex: 9999999999999999,
						width: "100%",
					}}
				>
					<MenuSelectorMobile {...propsForMobileMenuSeclector} />
				</div>
				{children}
			</div>
		</div>
	);
}
