import React from "react";
import { Link } from "react-router-dom";

export default function Manager(props) {
  return (
    <div>
      <h1>Manager</h1>
      <table class="table">
        <thead>
          <tr>
            <th>NO.</th>
            <th>Full Name</th>
            <th>Counter</th>
            <th>Number of products</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map(emp => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.timesVisited}</td>
                <td>{emp.productsPlaced}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/">
        <button className="btn2" type="button">
          Log out
        </button>
      </Link>
    </div>
  );
}
