import { NavLink } from "react-router-dom";
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

class Menu extends Component {
  render() {
    console.log('this.props', this.props);
    const { intl } = this.props;
    return (
      <section>
        <ul>
          <li><NavLink activeClassName="selected" to={`/${intl.locale}`}>Home</NavLink></li>
          <li><NavLink activeClassName="selected" to={`/${intl.locale}/challenges`}>Challenges</NavLink></li>
        </ul>
      </section>
    );
  }
}

export default injectIntl(Menu);