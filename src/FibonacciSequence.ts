/**
 * 斐波那契数列
 * @param n
 */
export function fibonacciSequence (n: number) {
    let map = new Map()
    map.set(0, 1)
    map.set(1, 1)

    if (n <= 2) {
        return map.get(n - 1)
    }

    for (let i = 0; i < n - 2; i++) {
        const num1 = map.get(i)
        const num2 = map.get(i + 1)
        map.set(i + 2, num1 + num2)
    }

    return map.get(n - 1)
}
