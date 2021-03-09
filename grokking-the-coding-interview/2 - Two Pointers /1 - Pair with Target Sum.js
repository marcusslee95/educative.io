//Same algo as my original w/only difference being I only generate the return array at the end 
//so i'm probably taking up less storage during duration of algo execution(?) Though end storage / space complexity is same
const pair_with_targetsum = function(arr, target_sum) {
  //0. Set up variables: sum = inf; pointers = [0, arr.length - 1]
  let sum = Infinity
  // const pointers = [0, arr.length - 1]
  let leftPointer = 0
  let rightPointer = arr.length - 1

  while(leftPointer < rightPointer){//1. Set terminating condition aka. when pointers[0] >= pointers[1] stop
    //2. Set what we'll do repeatedly aka. check sum and move pointers accordingly
    sum = arr[leftPointer] + arr[rightPointer]
    if (sum === target_sum) return [leftPointer, rightPointer]
    else if (sum < target_sum) leftPointer++
    else rightPointer--
  }
  //3. Set what do if we never return in while loop aka. sum never equaled target
  return [-1, -1]
}



// //ALGO
// //0. Set up variables: sum = inf; pointers = [0, arr.length - 1]
// //1. Set terminating condition aka. when pointers[0] >= pointers[1] stop
// //2. Set what we'll do repeatedly aka. check sum and move pointers accordingly
// //3. Set what do if we never return in while loop aka. sum never equaled target
// const pair_with_targetsum = function(arr, target_sum) {
//   //0. Set up variables: sum = inf; pointers = [0, arr.length - 1]
//   let sum = Infinity
//   const pointers = [0, arr.length - 1]

//   while(pointers[0] < pointers[1]){//1. Set terminating condition aka. when pointers[0] >= pointers[1] stop
//     //2. Set what we'll do repeatedly aka. check sum and move pointers accordingly
//     sum = arr[pointers[0]] + arr[pointers[1]]
//     if (sum === target_sum) return pointers
//     else if (sum < target_sum) pointers[0]++
//     else pointers[1]--
//   }
//   //3. Set what do if we never return in while loop aka. sum never equaled target
//   return [-1, -1]
// }
// //Time Complexity: we'll only ever max go through each element in input array so O(n)
// //Space: we'll only ever be max storing two values - both pointers - and 2 is a constant that doesn't grow w/respect to input size also represented as O(1)
