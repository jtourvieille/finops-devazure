import characteristics from './characteristics.json';

export class CalculatorService {
    findInstanceCost(instanceLabel) {
        let instanceCost = 0;
        characteristics.instances.forEach((instance) => {
            if(instance.nom === instanceLabel) {
                instanceCost = instance.coutMensuel;
            }
        })

        return instanceCost;
    }

    calculateCost(instancesToCost) {

        let cost = 0;

        if(Array.isArray(instancesToCost)) {
            instancesToCost.forEach((instanceToCost) => {
                let instance;
                let quantity;
                for (const [key, value] of Object.entries(instanceToCost)) {
                    instance = key;
                    quantity = value;
                }

                cost += this.findInstanceCost(instance) * quantity;
            })
        }
        return cost;
    }
}