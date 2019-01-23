import React, { Component } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

class Home extends Component {
  render() {
    return (
      <div>
        <FormattedMessage
          id="app.title"
          defaultMessage="Welcome to {what}"
          values={{ what: 'react-intl' }}
        />
        <br />
        <FormattedHTMLMessage
          id="app.description"
          defaultMessage="To get started, edit <b>src/App.js</b> and save to reload."
        />
      </div>
    );
  }
}

export default Home;