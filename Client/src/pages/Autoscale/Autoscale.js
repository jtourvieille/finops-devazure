import React, { useState, useEffect } from 'react';
import { Table, Text, Button, HelpButton } from '@axa-fr/react-toolkit-all';
import { CalculatorService } from '../../services/calc/calculator-service';
import { InstanceService } from '../../services/calc/instance-service';
import './Autoscale.scss';
import { CardPrice } from 'pages/Autoscale/CardPrice/CardPrice';

export const Autoscale = () => {
  const [i1Number, seti1Number] = useState(0);
  const [i2Number, seti2Number] = useState(0);
  const [i3Number, seti3Number] = useState(0);

  const [hasResults, setHasResults] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [cost, setCost] = useState(0);
  const [autoScaleCost, setAutoScaleCost] = useState(0);
  const [autoScaleWorkingHoursCost, setAutoScaleWorkingHoursCost] = useState(0);
  const [
    autoScaleWorkingDaysAndWeekEndCost,
    setAutoScaleWorkingDaysAndWeekEndCost,
  ] = useState(0);
  const [internetAppAutoScaleCost, setInternetAppAutoScaleCost] = useState(0);
  const [
    internetCompanyAppAutoScaleCost,
    setInternetCompanyAppAutoScaleCost,
  ] = useState(0);
  const [
    distributeurAppAutoScaleCost,
    setDistributeurAppAutoScaleCost,
  ] = useState(0);
  const [
    administratifAppAutoScaleCost,
    setAdministratifAppAutoScaleCost,
  ] = useState(0);

  const instanceService = new InstanceService();
  const i1Data = instanceService.getInstanceData('I1');
  const i2Data = instanceService.getInstanceData('I2');
  const i3Data = instanceService.getInstanceData('I3');

  useEffect(() => {
    setHasResults(false);
    if (i1Number > 0 || i2Number > 0 || i3Number > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [i1Number, i2Number, i3Number]);

  const calculHandler = () => {
    const service = new CalculatorService();

    if (i1Number > 0) {
      setAutoScaleCost(service.calculateAutoScaleCost({ I1: i1Number }));
      setAutoScaleWorkingHoursCost(
        service.calculateAutoScaleWorkingHoursCost({ I1: i1Number })
      );
      setAutoScaleWorkingDaysAndWeekEndCost(
        service.calculateAutoScaleWorkingDaysAndWeekEndCost({ I1: i1Number })
      );
      setInternetAppAutoScaleCost(
        service.calculateInternetAppAutoScaleCost({ I1: i1Number })
      );
      setInternetCompanyAppAutoScaleCost(
        service.calculateInternetCompanyAppAutoScaleCost({ I1: i1Number })
      );
      setDistributeurAppAutoScaleCost(
        service.calculateDistributeurAppAutoScaleCost({ I1: i1Number })
      );
      setAdministratifAppAutoScaleCost(
        service.calculateAdministratifAppAutoScaleCost({ I1: i1Number })
      );
    } else if (i2Number > 0) {
      setAutoScaleCost(service.calculateAutoScaleCost({ I2: i1Number }));
      setAutoScaleWorkingHoursCost(
        service.calculateAutoScaleWorkingHoursCost({ I2: i2Number })
      );
      setAutoScaleWorkingDaysAndWeekEndCost(
        service.calculateAutoScaleWorkingDaysAndWeekEndCost({ I2: i2Number })
      );
      setInternetAppAutoScaleCost(
        service.calculateInternetAppAutoScaleCost({ I2: i2Number })
      );
      setInternetCompanyAppAutoScaleCost(
        service.calculateInternetCompanyAppAutoScaleCost({ I2: i2Number })
      );
      setDistributeurAppAutoScaleCost(
        service.calculateDistributeurAppAutoScaleCost({ I2: i2Number })
      );
      setAdministratifAppAutoScaleCost(
        service.calculateAdministratifAppAutoScaleCost({ I2: i2Number })
      );
    } else {
      setAutoScaleCost(service.calculateAutoScaleCost({ I3: i3Number }));
      setAutoScaleWorkingHoursCost(
        service.calculateAutoScaleWorkingHoursCost({ I3: i3Number })
      );
      setAutoScaleWorkingDaysAndWeekEndCost(
        service.calculateAutoScaleWorkingDaysAndWeekEndCost({ I3: i3Number })
      );
      setInternetAppAutoScaleCost(
        service.calculateInternetAppAutoScaleCost({ I3: i3Number })
      );
      setInternetCompanyAppAutoScaleCost(
        service.calculateInternetCompanyAppAutoScaleCost({ I3: i3Number })
      );
      setDistributeurAppAutoScaleCost(
        service.calculateDistributeurAppAutoScaleCost({ I3: i3Number })
      );
      setAdministratifAppAutoScaleCost(
        service.calculateAdministratifAppAutoScaleCost({ I3: i3Number })
      );
    }

    setCost(
      service.calculateCost([
        { I1: i1Number },
        { I2: i2Number },
        { I3: i3Number },
      ])
    );

    setHasResults(true);
  };

  const setInputValue = (name, value) => {
    if (name === 'i1-nb') {
      seti1Number(value);
      seti2Number(0);
      seti3Number(0);
    }
    if (name === 'i2-nb') {
      seti1Number(0);
      seti2Number(value);

      seti3Number(0);
    }
    if (name === 'i3-nb') {
      seti1Number(0);
      seti2Number(0);
      seti3Number(value);
    }
  };

  const classNameBtn = isDisabled
    ? 'hasiconLeft calculate disabled'
    : 'hasiconLeft calculate';
  return (
    <>
      <div className="container container-body">
        <h1 className="af-title--content">Estimation Service Plan AutoScale</h1>
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

        {hasResults && (
          <div class="container-result">
            <h1>Résultats</h1>
            <div class="container-card">
              <CardPrice
                title="AutoScale le samedi"
                autoScaleCost={autoScaleCost}
                cost={cost}></CardPrice>
              <CardPrice
                title="AutoScale soir du lundi au vendredi"
                autoScaleCost={autoScaleWorkingHoursCost}
                cost={cost}></CardPrice>
              <CardPrice
                title="AutoScale"
                autoScaleCost={autoScaleWorkingDaysAndWeekEndCost}
                cost={cost}></CardPrice>
              <CardPrice
                title="Internet"
                autoScaleCost={internetAppAutoScaleCost}
                cost={0}></CardPrice>
              <CardPrice
                title="Internet Entreprise"
                autoScaleCost={internetCompanyAppAutoScaleCost}
                cost={0}></CardPrice>
              <CardPrice
                title="Distributeur"
                autoScaleCost={distributeurAppAutoScaleCost}
                cost={0}></CardPrice>
              <CardPrice
                title="Administratif"
                autoScaleCost={administratifAppAutoScaleCost}
                cost={0}></CardPrice>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
