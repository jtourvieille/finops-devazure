import React, { useState, useEffect } from 'react';
import { Table, Text, Button, HelpButton } from '@axa-fr/react-toolkit-all';
import { CalculatorService } from '../../services/calc/calculator-service';
import { InstanceService } from '../../services/calc/instance-service';
import './Autoscale.scss';

export const Autoscale = () => {
  const [i1Number, seti1Number] = useState(0);
  const [i2Number, seti2Number] = useState(0);
  const [i3Number, seti3Number] = useState(0);
  const [resultActuel, setResultActuel] = useState(0);
  const [resultActuelWorkingHours, setResultActuelWorkingHours] = useState(0);
  const [resultActuelWithoutScale, setResultActuelWithoutScale] = useState(0);
  const [resultDiff, setResultDiff] = useState(0);
  const [resultDiffWorkingHours, setResultDiffWorkingHours] = useState(0);

  const instanceService = new InstanceService();
  const i1Data = instanceService.getInstanceData('I1');
  const i2Data = instanceService.getInstanceData('I2');
  const i3Data = instanceService.getInstanceData('I3');

  useEffect(() => {
    setResultActuel(0);
    setResultActuelWithoutScale(0);
    setResultDiff(0);
  }, [i1Number, i2Number, i3Number]);

  const roundDecimal = (nombre, precision) => {
    let tmp = Math.pow(10, precision);
    return Math.round(nombre * tmp) / tmp;
  };

  const calculHandler = () => {
    const service = new CalculatorService();

    if (i1Number > 0) {
      setResultActuel(service.calculateAutoScaleCost({ I1: i1Number }));
      setResultActuelWorkingHours(
        service.calculateAutoScaleWorkingHoursCost({ I1: i1Number })
      );
      setResultDiff(
        service.calculateCost([
          { I1: i1Number },
          { I2: i2Number },
          { I3: i3Number },
        ]) - service.calculateAutoScaleCost({ I1: i1Number })
      );
      setResultDiffWorkingHours(
        service.calculateCost([
          { I1: i1Number },
          { I2: i2Number },
          { I3: i3Number },
        ]) - service.calculateAutoScaleWorkingHoursCost({ I1: i1Number })
      );
    } else if (i2Number > 0) {
      setResultActuel(service.calculateAutoScaleCost({ I2: i2Number }));
      setResultActuelWorkingHours(
        service.calculateAutoScaleWorkingHoursCost({ I2: i2Number })
      );
      setResultDiff(
        service.calculateCost([
          { I1: i1Number },
          { I2: i2Number },
          { I3: i3Number },
        ]) - service.calculateAutoScaleCost({ I2: i2Number })
      );
      setResultDiffWorkingHours(
        service.calculateCost([
          { I1: i1Number },
          { I2: i2Number },
          { I3: i3Number },
        ]) - service.calculateAutoScaleWorkingHoursCost({ I2: i2Number })
      );
    } else {
      setResultActuel(service.calculateAutoScaleCost({ I3: i3Number }));
      setResultActuelWorkingHours(
        service.calculateAutoScaleWorkingHoursCost({ I3: i3Number })
      );
      setResultDiff(
        service.calculateCost([
          { I1: i1Number },
          { I2: i2Number },
          { I3: i3Number },
        ]) - service.calculateAutoScaleCost({ I3: i3Number })
      );
      setResultDiffWorkingHours(
        service.calculateCost([
          { I1: i1Number },
          { I2: i2Number },
          { I3: i3Number },
        ]) - service.calculateAutoScaleWorkingHoursCost({ I3: i3Number })
      );
    }

    setResultActuelWithoutScale(
      service.calculateCost([
        { I1: i1Number },
        { I2: i2Number },
        { I3: i3Number },
      ])
    );

    // setResultActuel(
    //   service.calculateCost([
    //     { I1: i1Number },
    //     { I2: i2Number },
    //     { I3: i3Number },
    //   ])
    // );
  };

  const setInputValue = (name, value) => {
    if (name === 'i1-nb') {
      seti1Number(value);
      seti2Number(0);
      seti3Number(0);
    }
    if (name === 'i2-nb') {
      seti2Number(value);
      seti1Number(0);
      seti3Number(0);
    }
    if (name === 'i3-nb') {
      seti3Number(value);
      seti2Number(0);
      seti1Number(0);
    }
  };

  return (
    <>
      <div className="home container">
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
                      <li>{i1Data.coutMensuel} €/mois</li>
                      <li>{i1Data.acu} ACU</li>
                      <li>{i1Data.ram} Go RAM</li>
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
                      <li>{i2Data.coutMensuel} €/mois</li>
                      <li>{i2Data.acu} ACU</li>
                      <li>{i2Data.ram} Go RAM</li>
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
                      <li>{i3Data.coutMensuel} €/mois</li>
                      <li>{i3Data.acu} ACU</li>
                      <li>{i3Data.ram} Go RAM</li>
                    </ul>
                  </HelpButton>
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
                  onChange={({ value }) =>
                    setInputValue('i1-nb', parseInt(value) || 0)
                  }
                />
              </Table.Td>
              <Table.Td>
                <label>Actuel :</label>
                <Text
                  id="i2-nb"
                  name="i2-nb"
                  value={i2Number}
                  onChange={({ value }) =>
                    setInputValue('i2-nb', parseInt(value) || 0)
                  }
                />
              </Table.Td>
              <Table.Td>
                <label>Actuel :</label>
                <Text
                  id="i3-nb"
                  name="i3-nb"
                  value={i3Number}
                  onChange={({ value }) =>
                    setInputValue('i3-nb', parseInt(value) || 0)
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
        {parseInt(resultActuel) > 0 && (
          <>
            <h2>Résultat</h2>
            <p>
              Le coût actuel avec Autoscale le samedi est de : {resultActuel}€ /
              mois
            </p>
            <p>
              Le coût actuel avec Autoscale le soir est de :
              {resultActuelWorkingHours}€ / mois
            </p>
            <p>
              Le coût actuel sans Autoscale est de : {resultActuelWithoutScale}€
              / moi
            </p>
            <br />
            {/* <p>
              Econnomie réalisé :
              <span className="badge badge-success">
                {roundDecimal(resultDiff, 2)}
              </span>
              € / mois
            </p> */}
          </>
        )}
        <br />
        <br /> <br />
        <br />
      </div>
    </>
  );
};
