// String Calculator - TDD Kata
// Krunal Vyas | Incubyte Assessment

export function add(input: string): number {
  if (input === '') return 0;
  return input.split(',').map(Number).reduce((a, b) => a + b, 0);
}
