import React, { useState } from 'react';
import { Table, Text, Button } from '@axa-fr/react-toolkit-all';
import './Home.scss';
 
export const HomeComponent = () => {
  const [i1Number, seti1Number] = useState(0);
  const [i2Number, seti2Number] = useState(0);
  const [i3Number, seti3Number] = useState(0);
  const [result, setResult] = useState(0);
 
  const calculHandler = () => {
    console.log('test');
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
                <Text id="i1-nb" name="i1-nb" value={i1Number} />
              </Table.Td>
              <Table.Td>
                <Text id="i1-nb" name="i1-nb" value={i2Number} />
              </Table.Td>
              <Table.Td>
                <Text id="i1-nb" name="i1-nb" value={i3Number} />
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
        <p>Le coût total est de : {result}€ / mois</p>
        <br />
        <br /> <br />
        <br />
      </div>
    </>
  );
};