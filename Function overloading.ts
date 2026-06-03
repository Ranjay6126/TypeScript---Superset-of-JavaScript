function combine(a: string, b: string): string;
function combine(a: number, b: number): number;

function combine(a: any, b: any) {
    return a + b;
}