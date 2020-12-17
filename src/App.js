import "./App.css";
import React from "react";

import Nav from "./componente/Nav";
import Contact from "./componente/Contact";
import Home from "./componente/Home";
import PhotoGalery from "./componente/PhotoGalery";
import Resorts from "./componente/Resorts";
import About from "./componente/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/PhotoGalery" component={PhotoGalery} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Resorts" component={Resorts} />
          <Route path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
