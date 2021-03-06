import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { About } from "./components/About";

import { Users } from "./components/Users";
export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}
