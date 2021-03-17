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

  findInstanceData(instanceToCost) {
    const instanceData = {
      quantity: 0,
      cost: 0,
    };

    if (instanceToCost) {
      for (const [key, value] of Object.entries(instanceToCost)) {
        instanceData.label = key;
        instanceData.quantity = value;
      }

      instanceData.cost = this.findInstanceCost(instanceData.label);
    }

    return instanceData;
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
    const instanceData = this.findInstanceData(instanceToCost);
    const cost = ((6 * instanceData.quantity + 1) * instanceData.cost) / 7;
    return Math.round(cost * 100) / 100;
  }

  calculateAutoScaleWorkingHoursCost(instanceToCost) {
    const instanceData = this.findInstanceData(instanceToCost);
    // 50 heures sur une instance
    // 118 heures en mode normal
    // 168: nombres d'heures totales sur une semaine
    const cost = ((50 + 118 * instanceData.quantity) * instanceData.cost) / 168;
    return Math.round(cost * 100) / 100;
  }

  calculateAutoScaleWorkingDaysAndWeekEndCost(instanceToCost) {
    const instanceData = this.findInstanceData(instanceToCost);
    // 48 heures du WE et 50 heures semaine sur une instance
    // 70 heures en mode normal
    // 168: nombres d'heures totales sur une semaine
    // (98 + 70 N)*i / 168
    const cost = ((98 + 70 * instanceData.quantity) * instanceData.cost) / 168;
    return Math.round(cost * 100) / 100;
  }

  calculateInternetAppAutoScaleCost(instanceToCost) {
    const instanceData = this.findInstanceData(instanceToCost);
    // INTERNET : Le passage à 1 instance tous les jours, de 23h à 6h du matin
    // 49 heures sur une instance
    // 119 heures en mode normal
    // 168: nombres d'heures totales sur une semaine
    // on ajoute le cout mensuel pour 1 instance pour EN
    let cost = ((49 + 119 * instanceData.quantity) * instanceData.cost) / 168;
    cost += instanceData.cost;

    return Math.round(cost * 100) / 100;
  }

  calculateInternetCompanyAppAutoScaleCost(instanceToCost) {
    const instanceData = this.findInstanceData(instanceToCost);
    // INTERNET ENTREPRISE : Le passage à 1 instance du lundi au samedi de 20h à 7h du matin ,  et une instance le dimanche
    // 24 heures + 11 heures * 6, soit 90 heures sur une instance
    // 78 heures en mode normal
    // 168: nombres d'heures totales sur une semaine
    // on ajoute le cout mensuel pour 1 instance pour EN
    let cost = ((90 + 78 * instanceData.quantity) * instanceData.cost) / 168;
    cost += instanceData.cost;

    return Math.round(cost * 100) / 100;
  }

  calculateDistributeurAppAutoScaleCost(instanceToCost) {
    // DISTRIBUTEUR : Le passage à 1 instance du lundi au samedi de 20h à 7h du matin, et une instance le dimanche
    // 24 heures + 11 heures * 6, soit 90 heures sur une instance
    // 78 heures en mode normal
    // 168: nombres d'heures totales sur une semaine
    // on ajoute le cout mensuel pour 1 instance pour EN
    return this.calculateInternetCompanyAppAutoScaleCost(instanceToCost);
  }

  calculateAdministratifAppAutoScaleCost(instanceToCost) {
    const instanceData = this.findInstanceData(instanceToCost);
    // ADMINISTRATIF : Le passage à 1 instance du lundi au vendredi, de 19h30 à 7h30 du matin et une instance les samedi et dimanche
    // 48 heures + 12 heures * 5, soit 108 heures sur une instance
    // 60 heures en mode normal
    // 168: nombres d'heures totales sur une semaine
    // on ajoute le cout mensuel pour 1 instance pour EN
    let cost = ((108 + 60 * instanceData.quantity) * instanceData.cost) / 168;
    cost += instanceData.cost;

    return Math.round(cost * 100) / 100;
  }
}
