import React from 'react';
import PropTypes from 'prop-types';

import './Home.scss';

export const HomeComponent = ({ title, subtitle }) => (
  <div className="home container">
    <h1 className="af-title--content">Accueil</h1>
    <table className="af-table">
      <thead>
        <tr>
          <th>i1</th>
          <th>i2</th>
          <th>i3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text" id="id1" name="id1" required />
          </td>
          <td>
            <input type="text" id="id2" name="id2" required />
          </td>
          <td>
            <input type="text" id="id3" name="id3" required />
          </td>
        </tr>
      </tbody>
    </table>
    <button>Calculer</button>
 
    <h2>Résultats</h2>
    <p>Le coût total est de : xx.xx€ / mois</p>
  </div>
);

const propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

HomeComponent.propTypes = propTypes;
