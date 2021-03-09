//ALGO:
// 1. Initialize 1st pointer - aka. pointertoWhereNextNotDuplicateWillGo - to 0 because that's the next available spot
// 2. Create for loop to have 2nd pointer - aka. pointerToSpotNextNotDuplicate - go through whole array
// 3. Set thing to repeat:
// 	3a. if next element (aka pointerToSpotNextNotDuplicate) is not duplicate (by checking if it equals lastDuplicate aka. element in pointertoWhereNextNotDuplicateWillGo - 1) -> put that next - now confirmed to be newest not duplicate - element to where pointertoWhereNextNotDuplicateWillGo points to -> move pointertoWhereNextNotDuplicateWillGo to next index because now the spot that it was pointing to is filled
// 3b. if next element is a duplicate just do nothing / go through loop again to see if next element is not a duplicate.
// 4. Once out of loop we'll know that pointertoWhereNextNotDuplicateWillGo's value is equal to the # of unique values since we increment it only after putting in a unique value to where it was pointing -> so use that as return value
const remove_duplicates = function(arr) {
  // 1. Initialize 1st pointer - aka. pointertoWhereNextNotDuplicateWillGo - to 0
  let pointertoWhereNextNotDuplicateWillGo = 0

  for (pointerToSpotNextNotDuplicate = 0; pointerToSpotNextNotDuplicate < arr.length; pointerToSpotNextNotDuplicate++){// 2. Create for loop to have 2nd pointer - aka. pointerToSpotNextNotDuplicate - go through whole array
    // 3. Set thing to repeat:
    if (arr[pointerToSpotNextNotDuplicate] !== arr[pointertoWhereNextNotDuplicateWillGo - 1]){ // 	3a. if next element (aka pointerToSpotNextNotDuplicate) is not duplicate (by checking if it equals lastDuplicate aka. element in pointertoWhereNextNotDuplicateWillGo - 1) -> put that next - now confirmed to be newest not duplicate - element to where pointertoWhereNextNotDuplicateWillGo points to -> move pointertoWhereNextNotDuplicateWillGo to next index because now the spot that it was pointing to is filled
      arr[pointertoWhereNextNotDuplicateWillGo] = arr[pointerToSpotNextNotDuplicate]
      pointertoWhereNextNotDuplicateWillGo++
    }
    else {// 	3b. if next element is a duplicate just do nothing / go through loop again to see if next element is not a duplicate.

    }
  }
  return pointertoWhereNextNotDuplicateWillGo
};
// Time Complexity: i'm just looping through the whole array once so O(n)
// Space: not storing anything proportional to input array so O(1)
