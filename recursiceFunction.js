const testArray = [6, 2, 30, 45, 1, 5, 8, 98, 32, 21];

function swapElements(array, leftIndex, rightIndex) {
  const temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
  return array;
}

function partition(arrayPartition, left, right) {
  let leftPointer = left;
  let rightPointer = right;

  const pivot = arrayPartition[Math.floor((right + left) / 2)];
  // let pivot = arrayPartition[right - 1];

  while (leftPointer <= rightPointer) {
    while (arrayPartition[leftPointer] < pivot) {
      leftPointer += 1;
    }
    while (arrayPartition[rightPointer] > pivot) {
      rightPointer -= 1;
    }

    if (leftPointer <= rightPointer) {
      swapElements(arrayPartition, leftPointer, rightPointer);
      leftPointer += 1;
      rightPointer -= 1;
    }
  }
  // console.table(arrayPartition);
  console.log(
    `${arrayPartition} - ${pivot}, ${leftPointer}, ${rightPointer}`
  );
  return leftPointer;
}

function quickSort(array, start = 0, end = array.length - 1) {
  let pivotIndex;
  if (array.length > 1) {
    pivotIndex = partition(array, start, end);
    if (start < pivotIndex - 1) {
      // sort left
      quickSort(array, start, pivotIndex - 1);
    }
    if (pivotIndex < end) {
      // sort right
      quickSort(array, pivotIndex, end);
    }
  }
  return array;
}

console.log(`${testArray} - begin`);
// console.table(testArray);
// console.log(`After swapping the array ${testArray}`);
// console.table(swapElements(testArray, 0, 8));
// console.log(partition(testArray, 0, testArray.length - 1));
const d1 = new Date();
console.log(`${quickSort.name} - ${quickSort(testArray)}`);
console.log(`quickSort function benchmark : ${new Date() - d1} sn`);
