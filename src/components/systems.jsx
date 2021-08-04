import React, { useState, useEffect } from "react";
import { getSystems } from "../services/dummieSystem";

function Systems() {
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    setSystems(getSystems());
    console.log(systems);
  });

  return (
    <div>
      <h1>Systems</h1>
    </div>
  );
}

export default Systems;
