/**
 * Type union for types that can be coerced to the `number` type.
 */
// TODO Add remaining convertible types.
type CoercesToNumber = number | undefined | null | true | false | string;

/**
 * Performs `lhs + rhs` and returns the result.
 */
export function add(lhs: string, rhs: any): string;
export function add(lhs: BigInt, rhs: BigInt): BigInt;
export function add(lhs: CoercesToNumber, rhs: CoercesToNumber): number;
export function add(lhs: any, rhs: any) {
  return lhs + rhs;
}
