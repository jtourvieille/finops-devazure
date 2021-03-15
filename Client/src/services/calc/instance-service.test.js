import { InstanceService } from 'services/calc/instance-service';

describe('Instance service', () => {
  const instanceService = new InstanceService();

  describe('getInstanceData', () => {
    it('should return undefined when instance label is unknown', () => {
      // given
      const instanceLabel = 'toto';

      // when
      const instanceData = instanceService.getInstanceData(instanceLabel);

      // then
      expect(instanceData).toBeUndefined();
    });

    it('should return instance data when instance label is known', () => {
      // given
      const instanceLabel = 'I2';

      // when
      const instanceData = instanceService.getInstanceData(instanceLabel);

      // then
      expect(instanceData).toEqual({
        acu: 420,
        coutMensuel: 288,
        nom: 'I2',
        ram: 7,
      });
    });
  });
});
