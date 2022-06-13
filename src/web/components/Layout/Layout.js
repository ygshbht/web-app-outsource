import MenuSelector from "web/components/Menus/MenuSelector/MenuSelector";
import MenuSelectorMobile from "web/components/Menus/MenuSelector/MenuSelectorMobile";
import React from "react";
import MapProvider from "web/MapProvider";

import styles from "./Layout.module.scss";

export default function Layout({ children, propsForMobileMenuSeclector = {} }) {
  return (
    <div className={styles.mainContainer}>
      <MenuSelector />
      <div
        style={{
          flexGrow: 1,
        }}
      >
        <MenuSelectorMobile {...propsForMobileMenuSeclector} />

        <div className={styles.mapContainerBig}>
          <div id="main-map" className={styles.map} />
        </div>
        <MapProvider>
          <div className={styles["bars"]}>
            <div style={{}} className={styles.content}>
              {children}
            </div>
          </div>
        </MapProvider>
      </div>
    </div>
  );
}
