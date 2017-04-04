// 13. Write a function which, given a 2-d array and another value x,
// returns true if x is present in the two d array, and false otherwise.

  function containsElement(arr, x){
      for(var r = 0; r < arr.length; r++){
        if(r == x){
          return true;
        }else{
          return false;
        }
      }
      return containsElement;
  }
