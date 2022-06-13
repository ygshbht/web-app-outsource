import React, { useState } from "react";
import { List } from "react-bootstrap-icons";
// import "./MenuSelector.css";
import { Container } from "react-bootstrap";
import { Menu as MenuList } from "./MenuSelector";
import { useLocation } from "@reach/router";
import routes from "web/routeList";
// import Drawer from "web/components/Drawer";

import styles from "./MenuSelector.module.scss";
import Drawer from "web/components/Drawer/Drawer";
const MenuSelectorMobile = ({ settings }) => {
  const [showExpanedmenu, setShowExpanedMenu] = useState(false);
  return (
    <div id="menu-selector-mobile" className={styles.menuSelectorMobile}>
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
    <Container className={styles.mobileMenuContainer}>
      <div style={{ height: "38px", width: "100%", display: "flex" }}>
        <div className={styles.toggleMenuButton}>
          <List
            color="white"
            size={20}
            onClick={() => setShowExpanedMenu(true)}
          />
        </div>
        <div className={styles.contentContainer}>
          <div>
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
