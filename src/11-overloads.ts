
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
    if(Array.isArray(input))
        return input.join('')
    else if(typeof input === 'string')
        return input.split(',')
    else if(typeof input === 'number')
        return true
}

const str = parseStr(['a', 'b', 'c'])

console.log(str)

const arr = parseStr('abc')

console.log(arr)

const num = parseStr(1)

console.log(num)
