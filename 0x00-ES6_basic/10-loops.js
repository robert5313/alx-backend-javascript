export default function appendToEachArrayValue(array, appendString) {
  const testArray = [];
  for (const value of array) {
    testArray.push(appendString + value);
  }

  return testArray;
}
