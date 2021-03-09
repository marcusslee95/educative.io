//  Given a string, find the length of the longest substring, which has no repeating characters.

//Algo:
// 0. Window will be object representing the substring we are looking at. keys are characters in the substring and values are the count in the substring 
// 1. add next element in strin g to our window aka. expand window
// 2. see if resulting window violates repeat rule by seeing if count of character you just added is > 1
// 3. If it is not then skip step 4 go to step 5
// 4. If it violates then shrink window until does not violate by taking out starting character we are looking at in window (since indefinite use while loop)
// 5. At this point know window / substring we are looking at does not violate repeat constraint so compare length of window  / substring to previous max window length to see if current substring is longest so far -> means we need to create a 'maxSubStringLength'
// 6. Repeat for next character  / element in the string

const non_repeat_substring = function(str) {
  let maxSubStringLength = 0 
  let windowStart = 0
  const windowAkaSubstringWeAreLookingAt = {} // 0. Window will be object representing the substring we are looking at. keys are characters in the substring and values are the count in the substring 
  // 1. add next element in string to our window aka. expand window
  for (windowEnd = 0; windowEnd < str.length; windowEnd++){ //would be str[0] but since repeat for all elements in the string... use for loop instead
    const characterToAddtoWindow = str[windowEnd]
    if (!(characterToAddtoWindow in windowAkaSubstringWeAreLookingAt)) windowAkaSubstringWeAreLookingAt[characterToAddtoWindow] = 1 //when have not seen character before create entry
    else windowAkaSubstringWeAreLookingAt[characterToAddtoWindow]++
    while (windowAkaSubstringWeAreLookingAt[characterToAddtoWindow] > 1){    // 2. see if resulting window violates repeat rule by seeing if count of character you just added is > 1
      // 4. If it violates then shrink window until does not violate by taking out starting character we are looking at in window (since indefinite use while loop) -> this means we need to keep track of starting element of window / substring. will create variable 'windowStart' => also since might be multiple times we need to shrink use while loop instead of if statement that would execute once
      const characterToRemoveFromWindow = str[windowStart]
      windowAkaSubstringWeAreLookingAt[characterToRemoveFromWindow]-- //shrinking window just measns taking it out from window / substring
      windowStart++ //move window / substring we're looking at to next element
    }
    // 5. At this point know window / substring we are looking at does not violate repeat constraint so compare length of window  / substring to previous max window length to see if current substring is longest so far -> means we need to create a 'maxSubStringLength'
    maxSubStringLength = Math.max(maxSubStringLength, windowEnd - windowStart + 1) //how to calculate length current window. we have windowend and window start
  }
  return maxSubStringLength 
};
//Time Complexity: O(n) I'll go through the whole string once as I expand my window character by character all the way to the last character in the string so that's O(n)
//Maximum I will shrink the window - aka. exclude starting elmeent in window / substring - will be for all the characters so that's also O(n)
//O(n+n) is treated same as O(n)

//Space: Object will hold as many keys as there are distinct characters
//Worst case my object will hold as many keys as characters in string if string has no repeat characters (i.e. "abcdefg")so O(n)
//could used fixed 26 length array that counts occurrences of character in substring / window aka. does the same thing as our object. we'd just need to create hash function that would take character and map it to right index. -> that way space complexity would be set to fixed value aka. 26. aka O(1) which is better than O(n)


//Approach 2
// //Solution w/better space complexity -> O(1) as opposed to O(n)
// //Time Complexity should be same too because the only difference is that in this approach we also 1. create a length 26 array but that's fixed so it's a constant time operation which is trivial compared to the O(n) time of expanding and shrinking window 2. mapping a character to it's integer value which is a constant operation aka. doesn't grow with input size.
// const mapCharToNumber = function(char)  {
//   return char.charCodeAt(0) - 97 //a would become 0 b 1 c 2 etc.
// }

// const non_repeat_substring = function(str) {
//   let maxSubStringLength = 0 
//   let windowStart = 0
//   const windowAkaSubstringWeAreLookingAt = Array(26).fill(0)// 0. Window will be object representing the substring we are looking at. keys are characters in the substring and values are the count in the substring -> edited to be fixed length array for space complexity improvements
//   // 1. add next element in string to our window aka. expand window
//   for (windowEnd = 0; windowEnd < str.length; windowEnd++){ //would be str[0] but since repeat for all elements in the string... use for loop instead
//     const characterToAddtoWindow = str[windowEnd]
//     const indexOfThatCharacterInOurWindowArray = mapCharToNumber(characterToAddtoWindow) 
//     // console.log(indexOfThatCharacterInOurWindowArray)
//     if (!windowAkaSubstringWeAreLookingAt[indexOfThatCharacterInOurWindowArray]) windowAkaSubstringWeAreLookingAt[indexOfThatCharacterInOurWindowArray] = 1 //when have not seen character before create entry
//     else windowAkaSubstringWeAreLookingAt[indexOfThatCharacterInOurWindowArray]++
//     // console.log(windowAkaSubstringWeAreLookingAt[indexOfThatCharacterInOurWindowArray])
//     while (windowAkaSubstringWeAreLookingAt[indexOfThatCharacterInOurWindowArray] > 1){    // 2. see if resulting window violates repeat rule by seeing if count of character you just added is > 1
//       // 4. If it violates then shrink window until does not violate by taking out starting character we are looking at in window (since indefinite use while loop) -> this means we need to keep track of starting element of window / substring. will create variable 'windowStart' => also since might be multiple times we need to shrink use while loop instead of if statement that would execute once
//       const characterToRemoveFromWindow = str[windowStart]
//       const indexOfCharToRemoveInOurWindowArray = mapCharToNumber(characterToRemoveFromWindow) 
//       // console.log(indexOfCharToRemoveInOurWindowArray)
//       windowAkaSubstringWeAreLookingAt[indexOfCharToRemoveInOurWindowArray]-- //shrinking window just measns taking it out from window / substring
//       windowStart++ //move window / substring we're looking at to next element
//     }
//     // 5. At this point know window / substring we are looking at does not violate repeat constraint so compare length of window  / substring to previous max window length to see if current substring is longest so far -> means we need to create a 'maxSubStringLength'
//     maxSubStringLength = Math.max(maxSubStringLength, windowEnd - windowStart + 1) //how to calculate length current window. we have windowend and window start
//   }
//   return maxSubStringLength 
// };