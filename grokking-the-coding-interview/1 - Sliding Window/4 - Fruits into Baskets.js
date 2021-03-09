// Given an array of characters where each character represents a fruit tree, 
// you are given two baskets, and your goal is to put maximum number of fruits in each basket. 
// The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started. 
// You will pick one fruit from each tree until you cannot, 
// i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.



//this is the same question as Longest Substring with K Distinct Characters (it's even easier cuz k is a constant aka. 2) 
const fruits_into_baskets = function(fruits) {
  const windowAkaPartOfArrayWeAreLookingAt = {}
  let windowStart = 0
  let maxFruits = 0

  //1. expand window aka. add next element to what we are looking at
  for (windowEnd = 0; windowEnd < fruits.length; windowEnd++){
    const fruitToAdd = fruits[windowEnd]
    //2. well our window needs to be something that stores both what fruits we've added - to know if we're violating the can't have more than 2 distinct fruits constraint - and the # of fruits we've added - cuz otherwise there'd be no way of differentiating that we're looking at something like [A, C] vs [A, C, A, A] -> an object / hashmap is perfect for this because fruit name can be the key and # of them is the value. so we'll create an object 'window' to indicate what we're looking at
    if (!(fruitToAdd in windowAkaPartOfArrayWeAreLookingAt)) windowAkaPartOfArrayWeAreLookingAt[fruitToAdd] = 1 //3a. if never seen character before need to create new entry
    else windowAkaPartOfArrayWeAreLookingAt[fruitToAdd]++// 3b. if seen before then just increment existing entry

    while (Object.keys(windowAkaPartOfArrayWeAreLookingAt).length > 2){ //4. shrink until what we're looking at no longer violates constraint
      //5. shrink just means to stop looking at the 1st thing in our window -> we need to track the 1st thing via 'windowStart' variable above
      const fruitToRemove = fruits[windowStart] 
      windowAkaPartOfArrayWeAreLookingAt[fruitToRemove]-- //5a. which means we need to take the 1st thing out of our window
      windowStart++ //5b. have to update that the new 1st thing in our window will be the next element in the array
      if (windowAkaPartOfArrayWeAreLookingAt[fruitToRemove] === 0) delete windowAkaPartOfArrayWeAreLookingAt[fruitToRemove]

      //6. now we've shrunk once but maybe need to shrink more than once aka. however many times necessary until part of array we're looking at / window no longer violates constraint -> so instead of if use while.
    }

	//7. when reach this point we know we added a new fruit into our window / the part of the array we are looking at - and either 1. it did not violate the constraint or violated it so we shrunk until window no longer did violate. so should see if #fruits we have in our basket currently is > previous greatest # -> so we need to keep track of max#fruits which we'll declare variable above as 'maxFruits'

    maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1) //8. what is the indicator of current # fruits in basket aka. length of the current part of the array we are lookinng at? -> 1 way to calculate would be to sum up all the values in our window object because window object represents what we're looking at. Faster way is to use values we already keep track of. windowEnd - windowStart to see the length of current window / part of array we're looking at.
  }
  
  return maxFruits
};
//Time Complexity: same as previous question. We'll expand our window from start to finish of the array so that's O(n) and then we'll shrink max from start of array to end of array so that's also O(n). O(n) + O(n) == O(2n) = O(n)
//Space: # of fields in our object is boud to constant (2) because every time we go over 2 distinct we'll shrink window until we're back to two.-> boud to constant is represented as O(1)
