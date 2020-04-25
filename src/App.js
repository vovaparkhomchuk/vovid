import React, { useState } from "react";
import { Search, Card, LoadingScreen } from "./Components";
import "./main.css";

const LOGO = require("./assets/1472.gif");

function App() {
  const [country, setCountry] = useState("");
  const [load, setLoad] = useState(false);

  return (
    <div className={"container"}>
      {!load ? <LoadingScreen logo={LOGO} /> : null}
      <div className={"header"}>
        VOVID-19
        <img className={"logo"} src={LOGO} />
        STATISTICS
      </div>
      {/* <div>
        {!country ? (
          <span className={"country-name"}>All Countries</span>
        ) : (
          <span className={"country-name"}>{country}</span>
        )}
      </div> */}
      <Search chooseCountry={setCountry} />
      <Card country={country} load={setLoad} />
    </div>
  );
}

export default App;
