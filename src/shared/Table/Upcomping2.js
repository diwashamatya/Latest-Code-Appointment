import React from "react";
import "./YourComponent.css"; // Make sure to import your CSS file

const YourComponent = () => {
  return (
    <div>
      {/* Hidden Header */}
      <table className="hidden-header">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
      </table>

      {/* First Table */}
      <table className="data-table">
        <tbody>
          <tr>
            <td>Data 1A</td>
            <td>Data 2A</td>
            <td>Data 3A</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>

      {/* Second Table */}
      <table className="data-table">
        <tbody>
          <tr>
            <td>Data A1</td>
            <td>Data B1</td>
            <td>Data C1</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default YourComponent;
