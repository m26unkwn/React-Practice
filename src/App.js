import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Topics } from "./components/Topics";
export default function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/topics'>
          <Topics />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
