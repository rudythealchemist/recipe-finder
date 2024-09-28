import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import your App component
import store from "../redux/store"; // Ensure this path is correct based on your structure
import { Provider } from "react-redux"; // Import Provider for Redux
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App /> {/* Render App here without another Router */}
  </Provider>
);
