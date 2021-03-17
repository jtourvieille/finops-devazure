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

  describe('calculateAutoScaleWorkingHoursCost', () => {
    it('should return zero when data to cost are undefined', () => {
      // given
      const instanceToCost = 0;

      // when
      const cost = calculatorService.calculateAutoScaleWorkingHoursCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(0);
    });

    it('should return 346.29 when data to cost are three I3', () => {
      // given
      const instanceToCost = { I1: 3 };

      // when
      const cost = calculatorService.calculateAutoScaleWorkingHoursCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(346.29);
    });

    it('should return 1097.14 when data to cost are five I3', () => {
      // given
      const instanceToCost = { I2: 5 };

      // when
      const cost = calculatorService.calculateAutoScaleWorkingHoursCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(1097.14);
    });

    it('should return 980.57 when data to cost are three I3', () => {
      // given
      const instanceToCost = { I3: 2 };

      // when
      const cost = calculatorService.calculateAutoScaleWorkingHoursCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(980.57);
    });
  });

  describe('calculateAutoScaleWorkingDaysAndWeekEndCost', () => {
    it('should return zero when data to cost are undefined', () => {
      // given
      const instanceToCost = 0;

      // when
      const cost = calculatorService.calculateAutoScaleWorkingDaysAndWeekEndCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(0);
    });

    it('should return 264 when data to cost are three I3', () => {
      // given
      const instanceToCost = { I1: 3 };

      // when
      const cost = calculatorService.calculateAutoScaleWorkingDaysAndWeekEndCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(264);
    });

    it('should return 768 when data to cost are five I3', () => {
      // given
      const instanceToCost = { I2: 5 };

      // when
      const cost = calculatorService.calculateAutoScaleWorkingDaysAndWeekEndCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(768);
    });

    it('should return 816 when data to cost are three I3', () => {
      // given
      const instanceToCost = { I3: 2 };

      // when
      const cost = calculatorService.calculateAutoScaleWorkingDaysAndWeekEndCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(816);
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

  describe('calculateInternetAppAutoScaleCost', () => {
    it('should return zero when data to cost are undefined', () => {
      // given
      const instanceToCost = 0;

      // when
      const cost = calculatorService.calculateAutoScaleWorkingDaysAndWeekEndCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(0);
    });

    it('should return 492 when data to cost are three I1', () => {
      // given
      const instanceToCost = { I1: 3 };

      // when
      const cost = calculatorService.calculateInternetAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(492);
    });

    it('should return 1188 when data to cost are four I2', () => {
      // given
      const instanceToCost = { I2: 4 };

      // when
      const cost = calculatorService.calculateInternetAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(1188);
    });

    it('should return 2784 when data to cost are five I3', () => {
      // given
      const instanceToCost = { I3: 5 };

      // when
      const cost = calculatorService.calculateInternetAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(2784);
    });
  });

  describe('calculateInternetCompanyAppAutoScaleCost', () => {
    it('should return zero when data to cost are undefined', () => {
      // given
      const instanceToCost = 0;

      // when
      const cost = calculatorService.calculateInternetCompanyAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(0);
    });

    it('should return 421,71 when data to cost are three I1', () => {
      // given
      const instanceToCost = { I1: 3 };

      // when
      const cost = calculatorService.calculateInternetCompanyAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(421.71);
    });

    it('should return 977,14 when data to cost are four I2', () => {
      // given
      const instanceToCost = { I2: 4 };

      // when
      const cost = calculatorService.calculateInternetCompanyAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(977.14);
    });

    it('should return 2221,71 when data to cost are five I3', () => {
      // given
      const instanceToCost = { I3: 5 };

      // when
      const cost = calculatorService.calculateInternetCompanyAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(2221.71);
    });
  });

  describe('calculateDistributeurAppAutoScaleCost', () => {
    it('should return zero when data to cost are undefined', () => {
      // given
      const instanceToCost = 0;

      // when
      const cost = calculatorService.calculateDistributeurAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(0);
    });

    it('should return 421,71 when data to cost are three I1', () => {
      // given
      const instanceToCost = { I1: 3 };

      // when
      const cost = calculatorService.calculateDistributeurAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(421.71);
    });

    it('should return 977,14 when data to cost are four I2', () => {
      // given
      const instanceToCost = { I2: 4 };

      // when
      const cost = calculatorService.calculateDistributeurAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(977.14);
    });

    it('should return 2221,71 when data to cost are five I3', () => {
      // given
      const instanceToCost = { I3: 5 };

      // when
      const cost = calculatorService.calculateDistributeurAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(2221.71);
    });
  });

  describe('calculateAdministratifAppAutoScaleCost', () => {
    it('should return zero when data to cost are undefined', () => {
      // given
      const instanceToCost = 0;

      // when
      const cost = calculatorService.calculateAdministratifAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(0);
    });

    it('should return 390,86 when data to cost are three I1', () => {
      // given
      const instanceToCost = { I1: 3 };

      // when
      const cost = calculatorService.calculateAdministratifAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(390.86);
    });

    it('should return 884,57 when data to cost are four I2', () => {
      // given
      const instanceToCost = { I2: 4 };

      // when
      const cost = calculatorService.calculateAdministratifAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(884.57);
    });

    it('should return 1974,86 when data to cost are five I3', () => {
      // given
      const instanceToCost = { I3: 5 };

      // when
      const cost = calculatorService.calculateAdministratifAppAutoScaleCost(
        instanceToCost
      );

      // then
      expect(cost).toEqual(1974.86);
    });
  });
});
