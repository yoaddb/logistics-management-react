import React, { useState } from "react";
import { products } from "./Products";
import { Link, Redirect } from "react-router-dom";

export default function Login(props) {
  const [val, setVal] = useState("");
  const [pArray, setPArray] = useState([...products]);
  const [employee, setEmployee] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [managerVisible, setManagerVisible] = useState(false);

  const onInputChanged = el => {
    setVal(el.target.value);
  };

  const onEnterClicked = () => {
    if (val === "99999") {
      setLoggedIn(true);
      setManagerVisible(true);
      return;
    }
    for (let i = 0; i < props.employees.length; i++) {
      if (props.employees[i].id === val) {
        setEmployee(props.employees[i]);
        setLoggedIn(true);
        props.updateEmployee({
          name: props.employees[i].name,
          id: props.employees[i].id,
          needForklift: props.employees[i].needForklift,
          timesVisited: props.employees[i].timesVisited + 1,
          productsPlaced: props.employees[i].productsPlaced
        });
        return;
      }
    }
    alert("Employee " + val + " does not exist.");
  };

  const onUpdateProductClicked = product => {
    if (!product.needsForklift) {
      setPArray([
        ...pArray.map(p => {
          if (p.id === product.id) {
            p.isInPlace = true;
          }
          return p;
        })
      ]);
      props.updateEmployee({
        name: employee.name,
        id: employee.id,
        needForklift: employee.needForklift,
        timesVisited: employee.timesVisited,
        productsPlaced: employee.productsPlaced + 1
      });
    } else if (employee.needForklift) {
      setPArray([
        ...pArray.map(p => {
          if (p.id === product.id) {
            p.isInPlace = true;
          }
          return p;
        })
      ]);
      props.updateEmployee({
        name: employee.name,
        id: employee.id,
        needForklift: employee.needForklift,
        timesVisited: employee.timesVisited,
        productsPlaced: employee.productsPlaced + 1
      });
    } else alert("Forklift license is needed!");
  };

  const renderLogin = () => {
    if (!isLoggedIn) {
      return (
        <div>
          <h2>Login</h2>
          <div>
            No. <input type="number" onChange={onInputChanged} />
          </div>
          <button type="button" className="btn1" onClick={onEnterClicked}>
            Enter
          </button>
        </div>
      );
    } else if (!managerVisible) {
      return (
        <div>
          <h2>{"Welcome " + employee.name}</h2>
          <div className="details">Details:</div>
          <div className="details">{"Full Name: " + employee.name}</div>
          <div className="details">{"No. " + employee.id}</div>
          <div className="details">
            {"Forklift truck license: " +
              (employee.needForklift ? "yes" : "no")}
          </div>
          <div>List of products</div>
          <div>
            {pArray.map(product => {
              if (!product.isInPlace) {
                return (
                  <div className="card">
                    <div className="details">{"No. " + product.id}</div>
                    <div className="details">
                      {"Full Name: " + product.name}
                    </div>
                    <div className="details">
                      {"Need forklift truck: " +
                        (product.needsForklift ? "yes" : "no")}
                    </div>
                    <button
                      className="btn2"
                      type="button"
                      onClick={() => onUpdateProductClicked(product)}
                    >
                      Update
                    </button>
                  </div>
                );
              }
            })}
          </div>
          <Link to="/">
            <button className="btn2" type="button">
              Log out
            </button>
          </Link>
        </div>
      );
    } else {
      return <Redirect to="/manager"></Redirect>;
    }
  };

  return <div>{renderLogin()}</div>;
}
