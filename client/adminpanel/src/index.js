import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FpjsProvider
        cacheLocation="memory"
        loadOptions={{
          apiKey: "fingerprintjs-pro-public-api-key",
          region: "eu",
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FpjsProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
