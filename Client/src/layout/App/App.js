import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  AuthenticationProvider,
  InMemoryWebStorage,
  OidcSecure,
} from '@axa-fr/react-oidc-context';

import Header from 'layout/Header';
import Routes from 'layout/Routes';
import Footer from 'layout/Footer';
import oidcConfiguration from 'configuration';

import './App.scss';

const App = ({ oidcEnabled = true }) => {
  return (
    <AuthenticationProvider
      configuration={oidcConfiguration.is4}
      UserStore={InMemoryWebStorage}
      isEnabled={false}>
      <div className="app">
        <Router>
          <OidcSecure>
            <Header />
            <div className="app-content">
              <Routes />
            </div>
            <Footer />
          </OidcSecure>
        </Router>
      </div>
    </AuthenticationProvider>
  );
};

export default App;
