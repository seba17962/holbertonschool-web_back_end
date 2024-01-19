export default function appendToEachArrayValue(array, appendString) {
  for (value of array) {
    const value = appendString + value;
  }

  return array;
}
