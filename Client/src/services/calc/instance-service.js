const characteristics = require('./characteristics.json');

export class InstanceService {
  getInstanceData(instanceLabel) {
    return characteristics.instances.find(
      characteristic => characteristic.nom === instanceLabel
    );
  }
}
