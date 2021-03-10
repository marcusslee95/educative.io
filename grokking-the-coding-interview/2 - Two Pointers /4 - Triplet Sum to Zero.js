const search_triplets = function(arr) {
    triplets = [];
  //1. Sort Array to make it something that two pointers approach will be effective on
  const sorted = sortInputArray(arr)
  //2. Turn question into a question we already solved so we can use algo we used for that q -> "pair whose sum is equal to some target" -> this question can be turned into that since we're looking for three elements whose sum equals 0 aka. if call pointers X, Y, Z then X + Y + Z === 0 which can be expressed as Y + Z = -X. 
  //2a. so now we can think of this as question where we're trying to find two pointers where the element they point to is equal to - of element that 3rd pointer is pointing to..... -> sounds convoluted. So now what's left is to decide what we'll initialize the three pointers as and how they're going to change depending on whether Y + Z > -X, < -X, or equal to -X. -> For the how they're going to change we can gather inspiration from algo to pair with target sum question -> 1st set 1 pointer to point to leftEnd because knew it would point to lowest element and had other pointer point to rightEnd because knew it would point to highest element. If sum > target then moved rightEnd pointer one down so would point to lower #. If sum < target would move leftEnd up 1 for higher #. If sum === target would return that pair (in this case would be returning triplet. though we wouldn't return but just add it to output array because want to return not just one triplet but multiple) -> ok so now we know how we'd change 2 of the three pointers and that there is sense that 1 pointer would start at 1end and other pointer would start at other end.... So all that's left is the mystery that is the third pointer the one that we want other two to be equal to - of aka. X. -> we could notice that if we just have X be the starting index and then just increment it as we loop through array.... it sets things up nicely. Because if it's the starting index then the other two indexes can just be the leftMostOneThatsAvailable aka. the index to the right of it and then ofc rightEnd would be rightEnd. So let's do that
  for (x = 0; x < sorted.length; x++){
    let y = x + 1 //y is the leftMostOneBesidesX
    let z = sorted.length - 1 //z is rightMost
    // console.log(y,z)
    //just do the same algo that's in pair with target sum algo
    while (y < z){
      if (sorted[y] + sorted[z] === -sorted[x]){//we found a triplet whose sum equals 0
      //need to spot if this triplet is duplicate of triplet we already stored -> mayve I could change Y until it's something different so that we're guaranteed not to have same triplet. -> model solution does this by skipping Y until wew reach value where arr[Y] !== arr[Y + 1] let's do the same -> didn't work -> saw model solution had a way to handle duplicate situation...... I tried using that part of their code didn't work.... oh well. Only way i see it is just somehow going over output array and seeing if triplet already exists.... which might take more time up... so not viable option.... i'll just settle 
        console.log([x,y,z])
        triplets.push([sorted[x],sorted[y],sorted[z]])//store it
        y++ // once we find triplet whose sum equals 0 we have to change some pointer otherwise we'll just be looking at same three elements all the time and they'll always reach this case so while loop will never end -> let's just say that in this situation pointer that changes will be Y
      }
      else if (sorted[y] + sorted[z] > -sorted[x]) z-- //make z point to element w/lesser value
      else if (sorted[y] + sorted[z] < -sorted[x]) y++ //make y point to element w/greater value

      //you want to go through this checking if Y + Z = -X repeatedly until Y >= Z aka. leftEnd meets rightEnd so put the code in a while loop
    }
  }
  return triplets;
};

const sortInputArray = (arr) => {
  return arr.sort((a, b) => {return a-b});
}
//Time Complexity: for each element in input array i'll be max looking at all the other elements (as in think about X where it's 0 then Y = 1 and Z = array.length - 1 and then i'll be moving Y up and Z down until Y >= Z aka. Y and Z will have been all the other elements besides X ) aka. for each element i'll max be going through while loop as many times as there are other elements So it's max N - 1 loops for every element. There are N elements so that's N * N = n^2
//Space: sorted array that we're newly creating is same size as input array therefore proportional to input size aka. O(n). Model solution says we can disregard storage spent on triplets... not sure why though. Doesn't it take siginificant space?