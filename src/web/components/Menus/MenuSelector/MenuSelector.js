import React, { useContext, useState } from "react";
import { ArrowsAngleExpand } from "react-bootstrap-icons";
// import "./MenuSelector.css";
import { Container, Row, Col } from "react-bootstrap";
// import SlideIn from "web/components/Drawer";
import { Link } from "@reach/router";
import { useLocation } from "@reach/router";
import routes from "web/routeList";
import styles from "./MenuSelector.module.css";
import Drawer from "web/components/Drawer/Drawer";
const ActiveElemContext = React.createContext(null);

const MenuSelector = ({ settings }) => {
  const [activeElem, setActiveElem] = useState(null);
  const [showExandedMenu, setShowExpanedMenu] = useState(false);

  return (
    <ActiveElemContext.Provider
      value={{ showExandedMenu, activeElem, setActiveElem, setShowExpanedMenu }}
    >
      <Drawer onClose={() => setShowExpanedMenu(false)} open={showExandedMenu}>
        <div className={`${styles.expandedSidebarMenu}`}>
          <Menu setShowExpanedMenu={setShowExpanedMenu} expanded={true} />
        </div>
      </Drawer>

      <div className={styles.menuSelectorDesktop}>
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
        className={`${styles.sideBar} ${expanded ? styles.expanded : ""}`}
      >
        <div>
          <Row>
            <Col>
              <div
                onClick={() => setShowExpanedMenu((e) => !e)}
                className={styles.toggleMenu}
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
        className={`${styles.linkButton} ${expanded ? styles.expanded : ""}`}
      >
        <div className={`${styles.icon} ${isActive ? styles.active : ""}`}>
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
