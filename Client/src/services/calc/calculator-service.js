import characteristics from './characteristics.json';

export class CalculatorService {
    findInstanceCost(instanceLabel) {
        let instanceCost = 0;

        const instanceFound = characteristics.instances.find((characteristic) => {
            return characteristic.nom === instanceLabel
        });

        if(instanceFound) {
            instanceCost = instanceFound.coutMensuel;
        }

        return instanceCost;
    }

    calculateCost(instancesToCost) {
        let cost = 0;

        if(Array.isArray(instancesToCost)) {
            const reducer = (currentCost, instanceToCost) => {
                let instance;
                let quantity;
                for (const [key, value] of Object.entries(instanceToCost)) {
                    instance = key;
                    quantity = value;
                }

                const cost = this.findInstanceCost(instance) * quantity;
                return cost + currentCost;
            }

            cost = instancesToCost.reduce(reducer, 0);
        }
        return cost;
    }
}