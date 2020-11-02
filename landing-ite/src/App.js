import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'
import Projects from './components/pages/Projects'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/landing-ite" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
