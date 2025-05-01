import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunt from "./Aunt";
import "./familyTree.css";

const Grandpa = ({asset}) => {
  return (
    <div>
      <h3>Grandpa</h3>
      <section className="">
        <Dad asset={asset}></Dad>
        <Uncle />
        <Aunt asset={asset}/>
      </section>
    </div>
  );
};

export default Grandpa;
