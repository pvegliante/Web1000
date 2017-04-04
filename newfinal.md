#Final exam

1. What are the four steps of mergesort?

  split array into 2
  mergesort left half
  mergesort right half
  join the two arrays

2. Using JavaScript, generate a random number between 50 and 100.

    see Q2.js

3. Using Javascript, generate a random number between -100 and 100.

  see Q3.js

4. Write a coin flip function. It should return the string "heads" half the time and the string     "tails" the other half
  function coinFlip(){
      see Q4.js
  }

5. Re-state the following expression without using negation: !(10 > x)

    (10 <= x);

6. Re-state the following expression without using negation: !(a > 10 && b <= 5)

    (a < 10 || b > 5)

7. Re-state the following expression without using negation: !(!isLegal || !isFelony)

  (isLegal || isFelony)

8. What is an Angular directive?

    an Angular directive is an extention on html.

9. Write a function which, given a 2-d array of strings, returns the concatenation of all the strings.
  function twodconcat(arr){
      see Q9.js
}

10. Write a function which, given a 2-d array and another value x, returns true if x is present in the two d array, and false otherwise.
  function containsElement(arr, x){
      see Q10.js
}

11. What is the relationship between html, the $scope construct, and angular expressions? (Expressions are the ones that are written like so: {{quote}} ).

    htlm is what will be desplayed on the page, the $scope construct tells angular what is
    going to used on the page, the $scope construct is an expression used to display a
    value.

12. Given the following edge list, draw the graph.

E = [[1,2], [2,3], [4,5], [2,4], [1,5]  ]

13. Given the following adjacency Matrix, determine whether the graph is directed or undirected and draw it.

  directed
M = [
  [0,0,1,0,1],
  [0,0,0,0,1],
  [0,1,0,0,0],
  [0,1,0,0,0],
  [0,0,0,0,1],
]

14. For exercises 9 and 10, if you assume that n is the size of one side of the matrix, what is the time complexity (Big Oh) of the algorithms you wrote?

  9 = O(n2)
  10 = O(1)

15. Make your Graph Theory Game nice-looking. Publish it to fvi-grad.
