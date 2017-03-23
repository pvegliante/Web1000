# Day 5 notes

# Searching an Array

```javascript
  var a = [1, 2, 3, 4, 5, 6, 88, 99];

  function findInArray(arr, e){
     for (var i = 0; i < arr.length; i++){
  	if (arr[i] === e) return true;
     }
     return false;
  }

  findInArray([1, 2, 3, 4, 5, 6, 88, 99], 88)
  findInArray(a, 9001)
```

##BINARY SEARCH

```javascript
  function binSearch(arr, e){
     var lo = 0;
     var hi = arr.length-1;
     var mid;
     while ( lo <= hi){
       mid = Math.floor( lo + (hi-lo)/2 );
       console.log(mid, lo, hi);
       if (arr[mid] === e) return true;
       else if (e > arr[mid]) lo = mid + 1;
       else hi = mid -1;

     }
     return false;
  }
```

## SORTING an ARRAY

sort([3,4,0,5,1]) -> [0,1,3,4,5]
Bubble sort:

function bubbleSort(arr){
   for (var i =0 ; i < arr.length-1; i++){
     for (var j = 0; j < arr.length-1; j++){
	if (arr[j] > arr[j+1]){
	   var temp = arr[j];
	   arr[j] = arr[j+1];
	   arr[j+1] = temp;
        }
     }
   }
   return arr;
}

## Recursion

Recursion is when a function call hisself. Anything that can be implemented with a loop can be implemented with recursion and vice versa

Ex: Factorial

```javascript
  function loopFactorial(num){
     var prod = 1;
     for (var i = 1; i <= num; i++) prod *= i;
     return prod;
  }

  function recFactorial(num){
     if (num <=1) return 1;
     return num * recFactorial(num-1);
  }
```

Ex2: Multiply All the Elements in an array

```javascript
  function recArraySum(arr){
      if (arr.length === 1) return arr[0];
      return arr[0] + recArraySum(arr.slice(1));
  }
  // [1,2,3,4]
  //  1 * ras([2,3,4])
  //        2* ras([3,4])
  //             3 * ras([4])
  //                   4
```

Ex3: Fibonacci

What is the fibonacci sequence? It works like this:

f(0) = 1  
f(1) = 1  
f(2) = 2  
f(3) = 3  
f(4) = 5  
f(5) = 8  
f(6) = 13  
...  
f(n) = f(n-1) + f(n-2)  

```javascript
  function loopFib(n){
    if (n <= 1) return 1;
    var prev2 = 1;
    var prev = 1;
    var curr= 2;
    for (var i = 2; i < n; i++){
  	prev2 = prev;
          prev = curr;
  	curr = prev+prev2;
    }
    return curr;
  }
  console.log(loopFib(5))
```

```javascript
  function recFib(n){
     if (n <= 1) return 1;
     return recFib(n-1) + recFib(n-2);
  }
  console.log(recFib(10))
```

## Merge Sort

Steps:
1- split array in 2
2- mergesort left half
3- mergesort right half
4- Join the two arrays

```javascript
function merge(arr1, arr2){
   var lhs = 0;
   var rhs = 0;
   var result = [];
   while (result.length < arr1.length + arr2.length){
	if (arr1[lhs] <= arr2[rhs] || arr2[rhs] === undefined){
	   result.push(arr1[lhs]);
	   lhs++;
	}
	else{
	   result.push(arr2[rhs]);
	   rhs++;
	}
   }
   return result;
}

function mergeSort(arr){
   if (arr.length <= 1) return arr;
   var mid = Math.floor(arr.length/2);
   var left = arr.slice(0, mid);
   var right = arr.slice(mid);
   return merge(mergeSort(left), mergeSort(right));
}
```
