import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup(props) {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    needForklift: false,
    timesVisited: 0,
    productsPlaced: 0
  });

  const [err, setErr] = useState({
    idErr: "",
    nameErr: ""
  });

  const onIdChanged = el => {
    let id = el.target.value;
    if (id.length !== 5) {
      setErr({
        idErr: "the number must be with 5 digits.",
        nameErr: err.nameErr
      });
    } else {
      setErr({
        idErr: "",
        nameErr: err.nameErr
      });
    }
    setEmployee({
      id: id,
      name: employee.name,
      needForklift: employee.needForklift,
      timesVisited: employee.timesVisited,
      productsPlaced: employee.productsPlaced
    });
  };

  const onNameChanged = el => {
    let name = el.target.value;

    if (name.length < 4 || !name.match("^[a-zA-Z ]+$")) {
      setErr({
        idErr: err.idErr,
        nameErr: "the name must contain minimum 4 characters."
      });
    } else {
      setErr({
        idErr: err.idErr,
        nameErr: ""
      });
    }
    setEmployee({
      id: employee.id,
      name: name,
      needForklift: employee.needForklift,
      timesVisited: employee.timesVisited,
      productsPlaced: employee.productsPlaced
    });
  };

  const onRBChanged = el => {
    setEmployee({
      id: employee.id,
      name: employee.name,
      needForklift: el.target.value === "true",
      timesVisited: employee.timesVisited,
      productsPlaced: employee.productsPlaced
    });
  };

  const onCreateClicked = () => {
    if (employee.id === "" || employee.name === "") return;
    props.addEmployee(employee);
  };

  return (
    <div>
      <h1>Sign up</h1>
      <div className="row">
        <div className="col-4">No.</div>
        <div className="col">
          <input type="number" onChange={onIdChanged} />
        </div>
      </div>
      <span className="err1">{err.idErr}</span>

      <div className="row">
        <div className="col-4">Full Name:</div>
        <div className="col">
          <input type="text" onChange={onNameChanged} />
        </div>
      </div>
      <span className="err1">{err.nameErr}</span>

      <div>Forklift truck</div>
      <input
        id="0"
        type="radio"
        className="radio1"
        name="rb"
        onClick={onRBChanged}
        value={true}
      />
      <label for="0">Yes</label>
      <input
        id="1"
        type="radio"
        name="rb"
        defaultChecked
        onClick={onRBChanged}
        value={false}
        className="radio1"
      />
      <label for="1">No</label>
      <br />
      <Link to="/">
        <button type="button" onClick={onCreateClicked} className="btn1">
          Create
        </button>
      </Link>
    </div>
  );
}
