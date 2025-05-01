import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h3>Uncle</h3>
      <section>
        <Cousin name="Rafsan" />
        <Cousin name="Rifa" />
      </section>
    </div>
  );
};

export default Uncle;
