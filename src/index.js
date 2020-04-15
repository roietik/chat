import React from "react";
import ReactDOM from "react-dom";
import Auth from "./Auth";
import Chat from "./Chat";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Auth>
      <Chat />
    </Auth>
  </React.StrictMode>,
  rootElement
);
