import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import renderRoutes from "web/routes";
import "web/index.scss";

// inside the class app
const routes = renderRoutes();

render(
  <React.StrictMode>{renderRoutes(routes)}</React.StrictMode>,
  document.getElementById("root")
);
