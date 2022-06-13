import React from "react";
import { Tooltip, OverlayTrigger, Col, Button } from "react-bootstrap";
// import "./MenuDiscover.css";
import styles from "./TilesInfo.module.scss";

import {
  InfoCircle,
  Water,
  Building,
  CaretUpFill,
  CurrencyDollar,
  Bullseye,
} from "react-bootstrap-icons";

export default function TilesInfo() {
  return (
    <Col className={styles.tilesInfo}>
      <div>
        <div style={{ fontWeight: "bold" }}>Tiles Selected: -/1000</div>
        <a href="/">Clear selection</a>
      </div>

      {/* <div>
        <div
          className="uppercase font-weight-bold"
          style={{
            margin: "10px 0",
            color: "rgb(44, 206, 143)",
          }}
        >
          No tiles selected
        </div>
      </div> */}
      <div>
        <div className={styles.tilesInfoCardTop}>
          <div>
            <p> Budavári Palota, Budapest</p>
            <Bullseye />
          </div>
          <div className={styles.areaGeographyInfo}>
            <div>
              <Building />
              <span>644</span>
            </div>
            <div>
              <CaretUpFill />
              <span>644</span>
            </div>
            <div>
              <Water />
              <span>0</span>
            </div>
          </div>
          <div className={styles.landArtCompatibility}>
            <span className={styles.compatibilityStatus}>
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
              <div className={styles.totalValue}>
                <span style={{}}>
                  <span>Total</span>

                  <span className={styles.gradientText}>&nbsp;64.4 USDT</span>
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
              <div className={styles.subDataRow}>
                <div>Price per tile</div>
                <div> 0.1 USDT</div>
              </div>
            </div>
          </AppRow>
          <AppRow>
            <InfoCircle />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.subDataRow}>
                <div>Current owner:</div>

                <div> zsef</div>
              </div>
              <div className={styles.subDataRow}>
                <div>Purchased for:</div>
                <div> 66.4 USDT</div>
              </div>

              <div className={styles.subDataRow}>
                <div>Price per tile</div>
                <div> 0.1 USDT</div>
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
        <div className={styles.tilesInfoCardBottom}>
          <div className={styles.moreLandInfo}>
            <div>Current market value</div>
            <div>721.79 USDT</div>
            <span>10,20 %</span>
          </div>
          <div className={styles.moreLandInfo}>
            <div>Original new land value:</div>
            <div>0.1 USDT</div>
            <div></div>
          </div>
          <div className={styles.tilesSelectedButtons}>
            <Button>History</Button>
            <Button>Inspect</Button>
            <Button>Place an offer</Button>
          </div>
        </div>
      </div>
    </Col>
  );
}

function AppRow({ children }) {
  return (
    <div className={styles.dataRow}>
      <div className={styles.dataRowIcon}>{children[0]}</div>
      <div style={{ flexGrow: "1" }}>{children[1]}</div>
    </div>
  );
}
