import React, { useEffect, useState } from 'react';
import { Table, Text, Button, HelpButton } from '@axa-fr/react-toolkit-all';
import { CalculatorService } from '../../services/calc/calculator-service';
import { InstanceService } from '../../services/calc/instance-service';
import './Home.scss';

export const HomeComponent = () => {
  const [i1Number, seti1Number] = useState(0);
  const [i2Number, seti2Number] = useState(0);
  const [i3Number, seti3Number] = useState(0);
  const [i1NumberProjection, seti1NumberProjection] = useState(0);
  const [i2NumberProjection, seti2NumberProjection] = useState(0);
  const [i3NumberProjection, seti3NumberProjection] = useState(0);

  const [isDisabled, setIsDisabled] = useState(true);

  const [resultActuel, setResultActuel] = useState(0);
  const [resultProjection, setResultProjection] = useState(0);
  const [resultDiff, setResultDiff] = useState(0);

  const instanceService = new InstanceService();
  const i1Data = instanceService.getInstanceData('I1');
  const i2Data = instanceService.getInstanceData('I2');
  const i3Data = instanceService.getInstanceData('I3');

  useEffect(() => {
    setResultProjection(0);
    setResultActuel(0);
    setResultDiff(0);

    if (
      i1Number > 0 ||
      i2Number > 0 ||
      i3Number > 0 ||
      i1NumberProjection > 0 ||
      i2NumberProjection > 0 ||
      i3NumberProjection > 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [
    i1Number,
    i2Number,
    i3Number,
    i1NumberProjection,
    i2NumberProjection,
    i3NumberProjection,
  ]);

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

  const classNameBtn = isDisabled
    ? 'hasiconLeft calculate disabled'
    : 'hasiconLeft calculate';

  return (
    <>
      <div className="home container">
        <h1 className="af-title--content">Estimation Service Plan</h1>
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
                  <HelpButton classModifier="small" mode="hover">
                    <ul>
                      <li>Prix : {i1Data.coutMensuel} €/mois</li>
                      <li>Ressources :</li>
                      <ul>
                        <li>{i1Data.acu} ACU</li>
                        <li>{i1Data.ram} Go RAM</li>
                      </ul>
                    </ul>
                  </HelpButton>
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
                  <HelpButton classModifier="small" mode="hover">
                    <ul>
                      <li>Prix : {i2Data.coutMensuel} €/mois</li>
                      <li>Ressources :</li>
                      <ul>
                        <li>{i2Data.acu} ACU</li>
                        <li>{i2Data.ram} Go RAM</li>
                      </ul>
                    </ul>
                  </HelpButton>
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
                  <HelpButton classModifier="small" mode="hover">
                    <ul>
                      <li>Prix : {i3Data.coutMensuel} €/mois</li>
                      <li>Ressources :</li>
                      <ul>
                        <li>{i3Data.acu} ACU</li>
                        <li>{i3Data.ram} Go RAM</li>
                      </ul>
                    </ul>
                  </HelpButton>
                </span>
              </Table.Th>
              <Table.Th>
                <span className="af-table-th-content">Total</span>
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
              </Table.Td>
              <Table.Td>
                <label>Actuel :</label>
                <Text
                  id="i2-nb"
                  name="i2-nb"
                  value={i2Number}
                  onChange={({ value }) => seti2Number(parseInt(value) || 0)}
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
              </Table.Td>
              <Table.Td>{i1Number + i2Number + i3Number}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
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
              <Table.Td>
                {i1NumberProjection + i2NumberProjection + i3NumberProjection}
              </Table.Td>
            </Table.Tr>
          </Table.Body>
        </Table>
        <div className="container-center">
          <Button
            disabled={isDisabled}
            classModifier={classNameBtn}
            id="validation-button"
            onClick={calculHandler}>
            <span className="af-btn__text">Calculer</span>
            <i className="glyphicon glyphicon-stats" />
          </Button>
        </div>
        {parseInt(resultActuel) > 0 && (
          <>
            <h2>Résultat</h2>
            <p>Le coût actuel est de : {resultActuel}€ / mois</p>
          </>
        )}
        {parseInt(resultProjection) > 0 && (
          <p>Le coût de la projection est de : {resultProjection}€ / mois</p>
        )}
        {parseInt(resultDiff) > 0 && parseInt(resultProjection) > 0 && (
          <p>
            Econnomie réalisé :
            <span className="badge badge-success">{resultDiff}€ / mois</span>
          </p>
        )}
        {parseInt(resultDiff) < 0 && parseInt(resultProjection) > 0 && (
          <p>
            Côut supplémentaire :
            <span className="badge badge-danger">
              {Math.abs(resultDiff)}€ / mois
            </span>
          </p>
        )}
      </div>
    </>
  );
};
