import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavBar, NavBarItem } from '@axa-fr/react-toolkit-all';

import './Menu.scss';

export const Menu = ({ location }) => (
  <NavBar positionInit={-1} onClick={() => {}} isVisible>
    <NavBarItem
      classModifier={classNames({
        active: location && location.pathname === '/',
      })}
      actionElt={
        <Link className="af-nav__link" to="/">
          Estimation Service Plan
        </Link>
      }
    />
    <NavBarItem
      classModifier={classNames({
        active: location && location.pathname === '/simulateurAutoscale',
      })}
      actionElt={
        <Link className="af-nav__link" to="/simulateurAutoscale">
          Estimation Service Plan Autoscale
        </Link>
      }
    />
  </NavBar>
);

const propTypes = {
  location: PropTypes.object.isRequired,
};

Menu.propTypes = propTypes;
