import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar";
import Systems from "./components/systems";
import POs from "./components/pos";
import NotFound from "./components/notFound";
import SystemForm from "./components/systemForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/systems/:id" component={SystemForm} />
          <Route path="/systems" component={Systems} />
          <Route path="/PO" component={POs} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/systems" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
