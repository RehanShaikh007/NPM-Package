const testGk = require('./index');

const testArray = [1, 2, 2, 3, 4, 5, 5, 6];
const nestedArray = [1, [2, [3, [4, 5]]]];
const objectsArray = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' }
];

console.log('Sum:', testGk.sum(testArray));
console.log('Remove Duplicates:', testGk.removeDuplicates(testArray));
console.log('Max:', testGk.max(testArray));
console.log('Min:', testGk.min(testArray));
console.log('Average:', testGk.average(testArray));
console.log('Reverse:', testGk.reverse(testArray));
console.log('Unique:', testGk.unique(testArray));
console.log('Group By Category:', testGk.groupBy(objectsArray, 'category'));
console.log('Chunk (size 2):', testGk.chunk(testArray, 2));
console.log('Flatten:', testGk.flatten(nestedArray));