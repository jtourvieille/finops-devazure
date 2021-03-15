import { CalculatorService } from 'services/calc/calculator-service';

describe('Calculator service', () => {
  const calculatorService = new CalculatorService();

  describe('calculateAutoScaleCost', () => {
    it('should return zero when data to cost are undefined', () => {
      // given
      const instanceToCost = 0;

      // when
      const cost = calculatorService.calculateAutoScaleCost(instanceToCost);

      // then
      expect(cost).toEqual(0);
    });

    it('should return 390.86 when data to cost are three I3', () => {
      // given
      const instanceToCost = { I1: 3 };

      // when
      const cost = calculatorService.calculateAutoScaleCost(instanceToCost);

      // then
      expect(cost).toEqual(390.86);
    });

    it('should return 1275.43 when data to cost are five I3', () => {
      // given
      const instanceToCost = { I2: 5 };

      // when
      const cost = calculatorService.calculateAutoScaleCost(instanceToCost);

      // then
      expect(cost).toEqual(1275.43);
    });

    it('should return 1069.71 when data to cost are three I3', () => {
      // given
      const instanceToCost = { I3: 2 };

      // when
      const cost = calculatorService.calculateAutoScaleCost(instanceToCost);

      // then
      expect(cost).toEqual(1069.71);
    });
  });

  describe('calculateCost', () => {
    it('should return zero when data to cost are undefined', () => {
      // given
      const dataToCost = null;

      // when
      const cost = calculatorService.calculateCost(dataToCost);

      // then
      expect(cost).toEqual(0);
    });

    it('should return 144*1 when data to cost contains 1 instance I1', () => {
      // given
      const dataToCost = [
        {
          I1: 1,
        },
      ];

      // when
      const cost = calculatorService.calculateCost(dataToCost);

      // then
      expect(cost).toEqual(144);
    });

    it('should return 288*2 when data to cost contains 2 instances I', () => {
      // given
      const dataToCost = [
        {
          I2: 2,
        },
      ];

      // when
      const cost = calculatorService.calculateCost(dataToCost);

      // then
      expect(cost).toEqual(288 * 2);
    });

    it('should return 576*3 when data to cost contains 3 instances I2', () => {
      // given
      const dataToCost = [
        {
          I3: 3,
        },
      ];

      // when
      const cost = calculatorService.calculateCost(dataToCost);

      // then
      expect(cost).toEqual(576 * 3);
    });

    it('should return 144*2+576*3 when data to cost contains 3 instances I2', () => {
      // given
      const dataToCost = [
        {
          I1: 2,
        },
        {
          I3: 3,
        },
      ];

      // when
      const cost = calculatorService.calculateCost(dataToCost);

      // then
      expect(cost).toEqual(144 * 2 + 576 * 3);
    });
  });
});
