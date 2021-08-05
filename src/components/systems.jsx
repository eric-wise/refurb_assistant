import React, { useState, useEffect } from "react";
import { getSystems } from "../services/dummieSystem";

function Systems() {
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    setSystems(getSystems());
    // console.log(systems);
  }, []);

  return (
    <div>
      <h1>Systems</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Asset_ID</th>
            <th scope="col">Grade</th>
            <th scope="col">Product_Name</th>
            <th scope="col">Serial_Number</th>
            <th scope="col">Processor</th>
            <th scope="col">Procssor_Cores</th>
            <th scope="col">Ram</th>
            <th scope="col">First_Graphics_Card</th>
            <th scope="col">Second_Graphics_Card</th>
            <th scope="col">HD_Size</th>
            <th scope="col">HD_Type</th>
          </tr>
        </thead>
        <tbody>
          {systems.map((system) => (
            <tr key={system.Asset_ID}>
              <td>{system.Asset_ID}</td>
              <td>{system.Grade}</td>
              <td>{system.Product_Name}</td>
              <td>{system.Serial_Number}</td>
              <td>{system.Processor}</td>
              <td>{system.Procssor_Cores}</td>
              <td>{system.Ram}</td>
              <td>{system.First_Graphics_Card}</td>
              <td>{system.Second_Graphics_Card}</td>
              <td>{system.HD_Size}</td>
              <td>{system.HD_Type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Systems;
