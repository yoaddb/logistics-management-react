import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
export default function Home() {
  return (
    <div>
      <h2>Logistics Management</h2>
      <Link to="/signup">
        <button type="button" className="btn1">
          Sign in
        </button>
      </Link>
      <br />
      <Link to="/login">
        <button type="button" className="btn1">
          Log in
        </button>
      </Link>
    </div>
  );
}
