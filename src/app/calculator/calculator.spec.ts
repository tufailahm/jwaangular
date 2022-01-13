import { Calculator } from "./calculator"

describe('testing angular calculator app', () => {
    it('should be able to add two whole numbers', () => {
        var calculator = new Calculator();
        expect(calculator.sum(2,18)).toBe(20);
    })
})