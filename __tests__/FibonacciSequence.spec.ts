import {fibonacciSequence} from "../src/FibonacciSequence";


describe('斐波那契数列测试', () => {
    it('测试2', () => {
        expect(fibonacciSequence(2)).toBe(1)
    })

    it('测试10', () => {
        expect(fibonacciSequence(10)).toBe(55)
    })

    it('测试50', () => {
        expect(fibonacciSequence(50)).toBe(12586269025)
    })
})
