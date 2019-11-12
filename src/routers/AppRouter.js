import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import Header from '../components/Header';
import FlowPro from '../components/FlowPro';
import Scrutinizer from '../components/Scrutinizer';
import Home from '../components/Home';
import Intergrations from '../components/Intergrations'
import Replicator from '../components/Replicator'



const AppRouter =() =>(
    <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/scrutinizer" component={Scrutinizer} />
        <Route path="/flowpro" component={FlowPro} />
        <Route path="/replicator" component={Replicator} />
        <Route path="/intergrations" component={Intergrations} />

      </Switch>
    </div>
  </BrowserRouter>

)
export default AppRouter;