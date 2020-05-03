import { equals } from '../util';

/**
 * Returns true if the received array contains the expected value
 */
export const contains = <T>(expectedValue: T) => (receivedArray: Array<T> | ReadonlyArray<T>) => {
  return receivedArray.findIndex((item) => equals(item, expectedValue)) > -1;
};
