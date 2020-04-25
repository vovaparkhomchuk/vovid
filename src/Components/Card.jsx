import React, { useState, useEffect } from "react";

const Block = ({ country, load }) => {
  const [data, setData] = useState([]);
  const URL =
    country !== ""
      ? `https://coronavirus-19-api.herokuapp.com/countries/${country}`
      : "https://coronavirus-19-api.herokuapp.com/all";

  useEffect(() => {
    const res = fetch(URL)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [country]);

  const { cases, deaths, recovered } = data;

  if (cases) {
    load(true);
  }

  return (
    <div className={"row-center"}>
      <div className={"card"}>
        <div className={"card-text"}>{cases}</div>
        <div className={"card-number"}>TOTAL CASES</div>
      </div>
      <div className={"card"}>
        <div className={"card-text"}>{deaths}</div>
        <div className={"card-number"}>TOTAL DEATHS</div>
      </div>
      <div className={"card"}>
        <div className={"card-text"}>{recovered}</div>
        <div className={"card-number"}>TOTAL RECOVERED</div>
      </div>
    </div>
  );
};

export default Block;
