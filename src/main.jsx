import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

if (!("process" in window)) {
  // @ts-ignore
  window.process = {};
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
