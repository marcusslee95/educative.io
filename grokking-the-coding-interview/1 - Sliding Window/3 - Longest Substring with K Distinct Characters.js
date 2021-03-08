//Gist of what we're doing: expanding the window aka. including the next character in string to our substring
//  -> if resulting substring does not violate distinct character constraint, comparing the length of our current substring to the previous max substring and taking the greater one
// -> if resulting substring violates distinct character constraint, shrinking window aka. excluding the first character in window - until no longer violates distinct char. constraint.
// -> expanding window again

//Algo aka implementing the Gist:
//for each character add it to our window -> see if resulting window violates distinct value constraint
// -> if it does not then compare window length w/max window length that did not violate distinct value constraint and keep > one
// -> if it does then keep shrinking window until does not violate constraint before adding the next character
function longest_substring_with_k_distinct(str, k) {
  const windowAkaSubstring = {}
  let windowStart = 0 
  let maxLength = 0

  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    //Part1: expanding the window -> the question is... how do we want to represent our window aka. the substring we're looking at? It could be represented multiple ways. As a 26 length boolean array -> that wouldn't capture how many times we've seen a character which we need to capture. We could use a 26 length int array that captures the # of times we've seen characters -> problem with that is to know the # of distinct characters I'd have to go through the entire array to see the # of non 0 indexes... seems rather inefficient. Perhaps I could use a hashmap / not even a hashmap - since it won't use a hash funtion - but just an object that stores the frequency of characters in my substring. That way since i'm only holding the characters that are in my substring - it's less than 26 - I can just take the length of the # of kmeys to get the # distinct characters.
    const charToAddToWindow = str[windowEnd] 
    if (!(charToAddToWindow in windowAkaSubstring))  windowAkaSubstring[charToAddToWindow] = 1
    else windowAkaSubstring[charToAddToWindow] += 1

    //Part 2: handling situation where expanding window aka. adding one more character to substring caused us to go over distinct char constraint 
    while (Object.keys(windowAkaSubstring).length > k){
      //what does shrinking window really mean -> excluding the 1st thing in our window -> to do that we need a marker 'windowStart' that indicates the 1st thing / start of window
      
//       windowStart += 1;//also taking out 1st thing in window
//       if (window[charToRemoveFromWindow] === 0) {
//         delete window[charToRemoveFromWindow];
//       }
      const charToRemoveFromWindow = str[windowStart]
      windowAkaSubstring[charToRemoveFromWindow] -= 1 //so doing this effectively means we no longer looking at that character
      windowStart += 1 //have to move beginning of window to next character in overall string
      if (windowAkaSubstring[charToRemoveFromWindow] === 0){//in case where shrink and then char count becomes 0 that means that char no longer exists in our substring so should delete it -> after all that's the only way the while condition will ever terminate
        delete windowAkaSubstring[charToRemoveFromWindow]
      }
      //so by now we've shrunk the window once... but what if we still violate i.e. we expanded from "araa" to "araac" and then by shrinking went to "raac" but still violate dist char constraint of 2... we need to shrink again until meet constraint i.e. "aac" -> so since we have to shrink an indefinite # times instead of just once we'll use while instead of if
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1) //Part 3: by now we've either 1. added a new character to our substring and not violated distinct char constraint 2. added a new character and did violate constraint but shrunk substring back to point where it doesn't violate -> in either case I should check the length of the now constraint abiding substring to see if it's greater than the previous max substring
  }

  //thing you want to return is max length of substring that doesn't violate constraint
  return maxLength
}
//Time Complexity: O(n) -> we're going to go through all the characters in the substring so that's already O(n). 
You might ask well what about the shrinking part? 
We'll only shrink our window maximum as many characters as there are in the string 
(it's not like we'll ever slide the window forward and then slide it back so that we're processing the same character multiple times. We'll only ever slide away from a character once). 
So that's max O(n) too. So the expanding part and shrinking part is O(n+n) which is just O(n)

//Space Complexity: just have to know how many characters max will you store in your object / hashmap 
//K+1 because moment we add character to violate the dist character constraint (aka. we have K+1 characters in object)  we'll take character out until we meet it
//which is just represented as O(k)
