function hasTargetSum(array, target) {
  // Write your algorithm here

// first thing is to iterate throgh the array to find the sum

for(let i= 0; i < array.length; i++){

  for(let j=i+1; j < array.length; j++){
    if(array[i] + array[j] === target){
      return true
    }
  }
}
return false

}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

first thing to do is to is to iterate though the array and get the sum of the elements 
in the array
after getting the elements in the array compare them to the target if they are equal 

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
