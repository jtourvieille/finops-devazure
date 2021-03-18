import React from 'react';
import './CardPrice.scss';

export const CardPrice = ({ title, autoScaleCost, cost }) => {
  const roundDecimal = (nombre, precision) => {
    let tmp = Math.pow(10, precision);
    return Math.round(nombre * tmp) / tmp;
  };

  const gain = (cost1, cost2) => {
    return roundDecimal(cost2 - cost1, 2);
  };

  return (
    <>
      <div className="cardPrice">
        <div className="cardPrice-header">
          <h2>{title}</h2>
        </div>
        <div className="cardPrice-body">
          <p>
            Total :
            <span>
              {autoScaleCost}€ <small className="text-muted">/ mois</small>
            </span>
          </p>
          {parseInt(gain(autoScaleCost, cost)) > 0 && (
            <>
              <p>
                Gain :
                <span>
                  {gain(autoScaleCost, cost)}€{' '}
                  <small className="text-muted">/ mois</small>
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};
