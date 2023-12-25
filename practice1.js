function sumOfElements(...elements) {
    // Using the spread operator to unpack elements into an array
    return elements.reduce((acc, val) => acc + val, 0);
  }
  
  // Example usage:
  const result = sumOfElements(1, 2, 3, 4, 5);
  console.log(result);
  let arr=[5,56,5,3,5,6,7,5];
  console.log(arr.sort())