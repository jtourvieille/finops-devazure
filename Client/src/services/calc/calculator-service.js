import characteristics from './characteristics.json';

export class CalculatorService {
  findInstanceCost(instanceLabel) {
    let instanceCost = 0;

    const instanceFound = characteristics.instances.find(characteristic => {
      return characteristic.nom === instanceLabel;
    });

    if (instanceFound) {
      instanceCost = instanceFound.coutMensuel;
    }

    return instanceCost;
  }

  calculateCost(instancesToCost) {
    let cost = 0;

    if (Array.isArray(instancesToCost)) {
      const reducer = (currentCost, instanceToCost) => {
        let instance;
        let quantity;
        for (const [key, value] of Object.entries(instanceToCost)) {
          instance = key;
          quantity = value;
        }

        const cost = this.findInstanceCost(instance) * quantity;
        return cost + currentCost;
      };

      cost = instancesToCost.reduce(reducer, 0);
    }
    return cost;
  }

  calculateAutoScaleCost(instanceToCost) {
    let instanceLabel;
    let quantity;

    let cost = 0;

    if (instanceToCost) {
      for (const [key, value] of Object.entries(instanceToCost)) {
        instanceLabel = key;
        quantity = value;
      }

      const instanceCost = this.findInstanceCost(instanceLabel);

      // 1 jour sur une instance
      // 6 jours en mode normal
      // 7 jours sur une semaine
      cost = ((6 * quantity + 1) * instanceCost) / 7;
    }

    return Math.round(cost * 100) / 100;
  }

  calculateAutoScaleWorkingHoursCost(instanceToCost) {
    let instanceLabel;
    let quantity;

    let cost = 0;

    if (instanceToCost) {
      for (const [key, value] of Object.entries(instanceToCost)) {
        instanceLabel = key;
        quantity = value;
      }

      const instanceCost = this.findInstanceCost(instanceLabel);

      // 50 heures sur une instance
      // 118 heures en mode normal
      // 168: nombres d'heures totales sur une semaine
      cost = ((50 + 118 * quantity) * instanceCost) / 168;
    }

    return Math.round(cost * 100) / 100;
  }
}
