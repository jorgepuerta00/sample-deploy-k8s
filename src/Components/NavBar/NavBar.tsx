import React from "react";
import { NavLink } from 'react-router-dom';

export interface INavBarProps { 
  props?: any
}

const NavBar: React.FC<INavBarProps> = ({ 
  props
}) => {
  return (
    <div className="header">
      <NavLink exact activeClassName="active" to="/">Home</NavLink>
      <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
      <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
    </div>
  );
}

export default NavBar;