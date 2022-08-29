// Merge sort recursion function
export const mergeSort = (arr) => {
    if (arr.length < 2) return arr;

    const halfLength = Math.ceil(arr.length / 2);
    const left = arr.slice(0, halfLength);
    const right = arr.slice(halfLength);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    let result = [];
    let leftCounter = 0;
    let rightCounter = 0;

    while (leftCounter < left.length && rightCounter < right.length) {
        if (left[leftCounter] < right[rightCounter]) {
            result.push(left[leftCounter]);
            leftCounter++;
        } else if (right[rightCounter] < left[leftCounter]) {
            result.push(right[rightCounter]);
            rightCounter++;
        }
    }

    while (leftCounter < left.length) {
        result.push(left[leftCounter]);
        leftCounter++;
    }

    while (rightCounter < right.length) {
        result.push(right[rightCounter]);
        rightCounter++;
    }

    return result;
}