// Given an array of positive numbers and a positive number ‘S,’ 
// find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
// Return 0 if no such subarray exists.

//Algorithm: 
//1. put stuff into / expand window until sum of #s in window >= s
// 2. once have a window w/sum >= s... take the lesser of the length of current window vs. length of smallest window with sum >= s up till now
//3. see if you can shrink window and still get sum >= s
	//if you can then keep shrinking until you can't and then take the lesser of the lengths (aka. do step 2)
	//if you can't then just move onto putting stuff into / expanding window until sum becomes >= s again


const smallest_subarray_with_given_sum = function(s, arr) {
  let smallestLength = Infinity
  let windowStart = 0,
  windowSum = 0

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++){//for loop will take care of expanding the window. You have to write out the code that will shrink it when it's sum is >= S
    windowSum += arr[windowEnd] //1. put stuff into / expand window until sum of #s in window >= s 5. 

    while (windowSum >= s){
      smallestLength = Math.min(smallestLength, windowEnd - windowStart + 1)// 2. once have a window w/sum >= s... take the lesser of the length of current window vs. length of smallest window with sum >= s up till now
      windowSum -= arr[windowStart]//3. see if you can shrink window and still get sum >= s
      windowStart++ //3. see if you can shrink window and still get sum >= s

    }
  }

  if (smallestLength === Infinity) smallestLength = 0

  return smallestLength
};



// const smallest_subarray_with_given_sum = function(s, arr) {
//   let smallestLength = 9999
//   let windowStart = 0,
//   windowSum = 0,
//   windowLength = 0

//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){//there are only two scenarios: either your windowSum is >= s or < s
//     if (windowSum < s){//scenario where your windowSum is not >= s so you add the next element aka. expand your window
//       windowSum += arr[windowEnd] 
//       windowLength++
//     }
//     else {//scenario where windowSum is >= s so you take out first element in window and see if it's still >= S aka. shrink your window
//       windowSum -= arr[windowStart]
//       windowLength--
//       windowStart++
//     }

//     if (windowSum >= s){//in either case we want to see if updated windowSum >= s and if so record the length
//       // console.log(windowSum)
//       smallestLength = Math.min(smallestLength, windowLength)
//       console.log(smallestLength)
//     }
//   }

//   if (smallestLength = 9999) smallestLength = 0

//   return smallestLength
// };

