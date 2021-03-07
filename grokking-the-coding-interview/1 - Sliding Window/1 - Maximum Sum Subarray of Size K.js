const max_sub_array_of_size_k = function(k, arr) {
  //strategy: create sliding window -> compare sum of previous max sum with current window sum
  let windowSum = 0, 
  windowStart = 0,
  maxSum = 0
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    windowSum += arr[windowEnd] //until we make window size k all we do is 1. increase our window size which happens in for loop 2. add element to sum 
    if(windowEnd >= k - 1){//now window is correct size so just 1. compare sums 2. move the window along by taking out the first element
      maxSum = Math.max(maxSum, windowSum)
      windowSum -= arr[windowStart]
      windowStart += 1
    }
  }
  return maxSum

};
//Time Complexity: O(n) -> only process each element once (as opposed to brute force solution where process each element multiple times because there's overlap in the subarrays)
//Space complexity: O(1) -> not storing anything in proportion to input array (whereas solution below creates an array that's in proportion to input array so it's O(n))


//   // My 1st solution: even though I did sliding window correctly I unnecessarily created a new array thereby increasing time complexity
// const max_sub_array_of_size_k = function(k, arr) {
//   //1. create an array of all the sums
//   const result = []
//   let windowSum = 0
//   let windowStart = 0
//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
//     windowSum += arr[windowEnd] //until we make window size k all we do is 1. increase our window size which happens in for loop 2. add element to sum 
//     if(windowEnd >= k - 1){//now window is at the right size so all we need to do is 1. add the finished sum to the results array 2a. subtract the first element from the sum and 2b. increment first element because we want to slide the window forward
//       result.push(windowSum)
//       windowSum -= arr[windowStart]
//       windowStart += 1
//     }


//   }
//   //2. go through array to find max sum 
//   console.log(result)
//   return Math.max(...result)
//   // return Math.max(9,6)
// };
