import React, { Component } from 'react';
import { withRouter } from "react-router";

class LanguageSwitcher extends Component {

  state = {
    language: localStorage.getItem('locale') || 'fr',
  };

  toggleLocale = () => {
    const { language } = this.state;
    const { location } = this.props;
    const newLanguage = language === 'fr' ? 'en' : 'fr';

    this.setState({ language: newLanguage}, () => {
      this.props.history.push(location.pathname.replace(language, newLanguage))
    })
  }

  setLocale = (newLocale) => {
    this.setState({ language: newLocale });
  }


  render() {
    console.log('props in LanguageSwitcher', this.props);

    return (
      <button onClick={this.toggleLocale}>Toggle locale</button>
    );
  }
}

export default withRouter(LanguageSwitcher);