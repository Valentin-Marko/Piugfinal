import "./Resorts.css";
import React from "react";
import ResortsCard from "../componente/ResortsComponents/ResortsCard";
import ResortsArray from "../componente/ResortsComponents/resortsArray";

function Resorts() {
  return (
    <div>
      <h1>Resorts and prices</h1>
      <ResortsCard resort={ResortsArray} />
    </div>
  );
}

export default Resorts;
