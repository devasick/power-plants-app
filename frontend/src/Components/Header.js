// Author: Asick Ahamed
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PowerPlantList from "./PowerPlantList"
import logo from '../Common/images/logo.svg' 



class Header extends Component {
  

  
  render() {

    
 
    return (
     
      <Router>
      <header>
      <div className="navbar-fixed">
      <nav>
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo"><img src={logo} alt={"logo"}/> </a>
       
      </div>
    </nav>
    </div>
        </header> 
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Router basename={'/'}>
            <Route exact path="/">
               <PowerPlantList />
            </Route>
          </Router>
        </Switch>
    </Router>
    
    );
  }
}

export default Header;

