import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <div className="table__cases">{numeral(cases).format("0,0")}</div>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
