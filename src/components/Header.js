import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
    <header>
  <div className = "Header">
  
      <NavLink to="/" activeClassName="is-active" exact={true}><div className="MainColor"><img className = "inlineImage" src="https://www.plixer.com/wp-content/uploads/2019/05/insights.svg"></img><h1 className = "inlineText" >Brian Storming</h1></div></NavLink>
      <NavLink className="push" to="/scrutinizer" activeClassName="is-active">Scrutinizer</NavLink>
      <NavLink className="navLinkChildren" to="/flowpro" activeClassName="is-active">FlowPro</NavLink>
      <NavLink className="navLinkChildren" to="/replicator" activeClassName="is-active">Replicator</NavLink>
      <NavLink className="navLinkChildren" to="/intergrations" activeClassName="is-active">Intergrations</NavLink>
      

      </div>
    </header>
  );


export default Header;