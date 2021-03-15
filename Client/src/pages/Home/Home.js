import React, { useState } from 'react';
import { Table, Text, Button } from '@axa-fr/react-toolkit-all';
import { CalculatorService } from '../../services/calc/calculator-service';
import './Home.scss';

export const HomeComponent = () => {
  const [i1Number, seti1Number] = useState(0);
  const [i2Number, seti2Number] = useState(0);
  const [i3Number, seti3Number] = useState(0);
  const [i1NumberProjection, seti1NumberProjection] = useState(0);
  const [i2NumberProjection, seti2NumberProjection] = useState(0);
  const [i3NumberProjection, seti3NumberProjection] = useState(0);
  const [resultActuel, setResultActuel] = useState(0);
  const [resultProjection, setResultProjection] = useState(0);
  const [resultDiff, setResultDiff] = useState(0);

  const calculHandler = () => {
    const service = new CalculatorService();
    setResultActuel(
      service.calculateCost([
        { I1: i1Number },
        { I2: i2Number },
        { I3: i3Number },
      ])
    );

    setResultProjection(
      service.calculateCost([
        { I1: i1NumberProjection },
        { I2: i2NumberProjection },
        { I3: i3NumberProjection },
      ])
    );

    setResultDiff(
      service.calculateCost([
        { I1: i1Number },
        { I2: i2Number },
        { I3: i3Number },
      ]) -
        service.calculateCost([
          { I1: i1NumberProjection },
          { I2: i2NumberProjection },
          { I3: i3NumberProjection },
        ])
    );
  };

  return (
    <>
      <div className="home container">
        <h1 className="af-title--content">Simulateur</h1>
        <Table className="af-table">
          <Table.Header>
            <Table.Tr>
              <Table.Th>
                <span className="af-table-th-content">
                  <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="144€ /mois">
                    i1
                  </span>
                </span>
              </Table.Th>
              <Table.Th>
                <span className="af-table-th-content">
                  <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="288€ /mois">
                    i2
                  </span>
                </span>
              </Table.Th>
              <Table.Th>
                <span className="af-table-th-content">
                  <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="576€ /mois">
                    i3
                  </span>
                </span>
              </Table.Th>
            </Table.Tr>
          </Table.Header>
          <Table.Body>
            <Table.Tr>
              <Table.Td>
                <label>Actuel :</label>
                <Text
                  id="i1-nb"
                  name="i1-nb"
                  value={i1Number}
                  onChange={({ value }) => seti1Number(parseInt(value) || 0)}
                />
                <br />
                <br />
                <label>Projection :</label>
                <Text
                  id="i1-nbP"
                  name="i1-nbP"
                  value={i1NumberProjection}
                  onChange={({ value }) =>
                    seti1NumberProjection(parseInt(value) || 0)
                  }
                />
              </Table.Td>
              <Table.Td>
                <label>Actuel :</label>
                <Text
                  id="i2-nb"
                  name="i2-nb"
                  value={i2Number}
                  onChange={({ value }) => seti2Number(parseInt(value) || 0)}
                />
                <br />
                <br />
                <label>Projection :</label>
                <Text
                  id="i2-nbP"
                  name="i2-nbP"
                  value={i2NumberProjection}
                  onChange={({ value }) =>
                    seti2NumberProjection(parseInt(value) || 0)
                  }
                />
              </Table.Td>
              <Table.Td>
                <label>Actuel :</label>
                <Text
                  id="i3-nb"
                  name="i3-nb"
                  value={i3Number}
                  onChange={({ value }) => seti3Number(parseInt(value) || 0)}
                />
                <br />
                <br />
                <label>Projection :</label>
                <Text
                  id="i3-nbP"
                  name="i3-nbP"
                  value={i3NumberProjection}
                  onChange={({ value }) =>
                    seti3NumberProjection(parseInt(value) || 0)
                  }
                />
              </Table.Td>
            </Table.Tr>
          </Table.Body>
        </Table>
        <Button
          classModifier="hasiconLeft"
          id="validation-button"
          onClick={calculHandler}>
          <span className="af-btn__text">Calculer</span>
          <i className="glyphicon glyphicon-stats" />
        </Button>
        <br />
        <br />
        <h2>Résultat</h2>
        <p>Le coût actuel est de : {resultActuel}€ / mois</p>
        {parseInt(resultProjection) > 0 && (
          <p>Le coût de la projection est de : {resultProjection}€ / mois</p>
        )}
        {parseInt(resultDiff) > 0 && parseInt(resultProjection) > 0 && (
          <p>
            Econnomie réalisé :
            <span className="badge badge-success">{resultDiff}</span>€ / mois
          </p>
        )}
        {parseInt(resultDiff) < 0 && parseInt(resultProjection) > 0 && (
          <p>
            Côut supplementaire :
            <span className="badge badge-danger">{Math.abs(resultDiff)}</span>€
            / mois
          </p>
        )}
        <br />
        <br /> <br />
        <br />
      </div>
    </>
  );
};
