import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import { IntlProvider } from "react-intl";

import Challenge from './views/Challenge';
import Home from './views/Home';
import Menu from './components/Menu';
import NotFound from './components/NotFound';

import messages_fr from "./translations/fr.json";
import messages_en from "./translations/en.json";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_fr from 'react-intl/locale-data/fr';
import { injectIntl } from 'react-intl'

addLocaleData([...locale_en, ...locale_fr]);
const language = navigator.language.split(/[-_]/)[0];  // language without region code

class App extends Component {

  state = {
    language: localStorage.getItem('locale') || 'fr',
  };

  render() {
    console.log('this.state', this.state);
    console.log('this.props', this.props);
    const { language } = this.state;

    const messages = {
      'fr': messages_fr,
      'en': messages_en,
    };

    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <Router>
          <React.Fragment>
            <Menu />
            <Switch>
              <Route path="/:lang(fr|en)?" exact component={Home} />
              <Route path="/:lang(fr|en)?/challenges" component={Challenge} />
              <Route path="*" component={NotFound}/>
            </Switch>
          </React.Fragment>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
