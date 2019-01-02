import { NavLink } from "react-router-dom";
import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <section>
        <ul>
          <li><NavLink activeClassName="selected" exact={true} to="/">Home</NavLink></li>
          <li><NavLink activeClassName="selected" to="/challenges">Challenges</NavLink></li>
          <li><NavLink activeClassName="selected" to="/articles">Articles</NavLink></li>
        </ul>
      </section>
    );
  }
}

export default Menu;