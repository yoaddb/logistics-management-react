import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Manager from "./Manager";

export default function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = emp => {
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === emp.id) return;
    }
    setEmployees([...employees, emp]);
  };

  const updateEmployee = emp => {
    let foundIndex = employees.findIndex(e => e.id === emp.id);
    employees[foundIndex].timesVisited = emp.timesVisited;
    employees[foundIndex].productsPlaced = emp.productsPlaced;
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />}></Route>
          <Route
            exact
            path="/signup"
            component={() => <Signup addEmployee={addEmployee} />}
          ></Route>
          <Route
            exact
            path="/login"
            component={() => (
              <Login employees={employees} updateEmployee={updateEmployee} />
            )}
          ></Route>
          <Route
            exact
            path="/manager"
            component={() => <Manager employees={employees} />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}
