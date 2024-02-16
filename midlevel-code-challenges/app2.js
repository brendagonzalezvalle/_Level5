// ### **Sort by Property:**

// Write a function called **`sortByProperty`** that takes an array of objects and a property name as input. The function should return a new array containing the objects sorted in ascending order based on the specified property.

function sortByProperty(objects, propertyName) {
    const age = propertyName
    const peopleSorted = objects.sort((a, b)=> a.age - b.age) //comparing the value of age to ascend the order of object
    return peopleSorted
 
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);