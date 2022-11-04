import React from "react";
import ReactDOM from "react-dom/client";
import Routering from './Routes/routes'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Profiler>
    <Routering />
  </React.Profiler>
);
