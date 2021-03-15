import { CalculatorService } from 'services/calc/calculator-service';

describe('Calculator service', () => {

    const calculatorService = new CalculatorService();

    describe('calculateCost', () => {
        it('should return zero when data to cost are undefined', () => {
            // given
            const dataToCost = null;

            // when
            const cost = calculatorService.calculateCost(dataToCost);

            // then
            expect(cost).toEqual(0);
        })

        it('should return 144*1 when data to cost contains 1 instance I1', () => {
            // given
            const dataToCost = [
                {
                    "I1": 1
                }
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
                    "I2": 2
                }
            ];

            // when
            const cost = calculatorService.calculateCost(dataToCost);

            // then
            expect(cost).toEqual(288*2);
        })

        it('should return 576*3 when data to cost contains 3 instances I2', () => {
            // given
            const dataToCost = [
                {
                    "I3": 3
                }
            ];

            // when
            const cost = calculatorService.calculateCost(dataToCost);

            // then
            expect(cost).toEqual(576*3);
        })

        it('should return 144*2+576*3 when data to cost contains 3 instances I2', () => {
            // given
            const dataToCost = [
                {
                    "I1": 2
                },
                {
                    "I3": 3
                }
            ];

            // when
            const cost = calculatorService.calculateCost(dataToCost);

            // then
            expect(cost).toEqual(144*2+576*3);
        })
    });
});