import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";
import SiteProvider from "./components/SiteProvider";

ReactDom.render(
    <SiteProvider>
        <App />
    </SiteProvider>,
document.getElementById('root'));