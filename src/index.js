import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import $ from 'jquery';

// import AllRouters from "./AllRouters";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  // <React.StrictMode> // chế độ test của developer khi build nó sẽ tự mất nhưng nếu mà để thì ngứa mắt
  <>
    <StoreProvider>
      {/* <AllRouters /> */}
      <App />
    </StoreProvider>
  </>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
