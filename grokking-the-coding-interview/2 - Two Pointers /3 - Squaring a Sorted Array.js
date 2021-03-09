// ALGO:
// 1. check if input array contains any - #s by seeing if 1st element is - -> if not just map elements to their squares and be done with it
// 2. set pointers to be either extreme of the input array
// 3. compare squares of what pointers are pointing to 
// 4. add > square to the front of the output array
// 5. move pointer that whose square you just added over by 1
// 6. repeat steps 3 - 5 repeatedly until hit terminating condition where pointerStartingAtLeftExtreme > pointerStartingAtRightExtreme

// *Sidenote: for when squares are the same value just take the one from the pointerStartingAtRightExtreme
const make_squares = function(arr) {
  // 1. check if input array contains any - #s by seeing if 1st element is - -> if not just map elements to their squares and be done with it
  if (arr[0] >= 0) return arr.map(element => element * element)

  const squares = []

  // 2. set pointers to be either extreme of the input array
  let pointerStartingAtLeftExtreme = 0, pointerStartingAtRightExtreme = arr.length - 1

  while(pointerStartingAtLeftExtreme <= pointerStartingAtRightExtreme){// 6. repeat steps 3 - 5 repeatedly until hit terminating condition where pointerStartingAtLeftExtreme > pointerStartingAtRightExtreme -> aka. put steps 3 - 5 in a while loop
    const squareofLeftPointer = arr[pointerStartingAtLeftExtreme] ** 2,
    squareOfRightPointer = arr[pointerStartingAtRightExtreme] ** 2

    if (squareofLeftPointer > squareOfRightPointer){  // 3. compare squares of what pointers are pointing to 
      squares.unshift(squareofLeftPointer)// 4. add > square to the front of the output array
      pointerStartingAtLeftExtreme++ // 5. move pointer that whose square you just added over by 1
    }
    else {// *Sidenote: for when squares are the same value just take the one from the pointerStartingAtRightExtreme
      squares.unshift(squareOfRightPointer)
      pointerStartingAtRightExtreme--
    }

  }

  console.log(squares)

  return squares;
};
//Time Complexity: we're just going to go through all the elements in the input array as we close in from both ends - so that's O(n) since as input array grows this algo will grow proportionally too
//Space: we're just storing same # elements as there are elmeents in input array aka. O(n)