import { mergeSort } from './mergeSort.js';

class Tree {
    constructor(root) {
        this.root = root;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let arr = [5, 23, 1, 14, 7, 9, 44, 12, 31];
let sortedArray = mergeSort(arr);

const buildTree = (array, start, end) => {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);

    let node = new Node(array[mid]);
    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end);

    return node;
}

let bst = new Tree(buildTree(sortedArray, 0, sortedArray.length - 1));

console.log(bst);