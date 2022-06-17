import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import { GlobalStyle } from "./styles/Styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />

    <Header />
  </React.StrictMode>
);
