/*Write a function that calculates the sum of all numbers up to some number n*/



/*Solution 1*/
/*What we are doing here is creating a variable accumulator called "total", 
we then loop through all the numbers and add them one at a time, starting at 1 all the way upto n.
We have a for loop, "total" variable starts at 0. At the end we return "total" */
/*We use built-in timing functions to evaluate speed. We use a method called "performance.now()", the browser will tell
us the number of milliseconds since the document was created, we are going to save this to a variable called "t1". Then we
call the function "add" with a large number, after that finishes we check performance again, which would've incremented
a lot of miliseconds, so now we have 2 numbers. We then subtract them and divide by 1000 because its in milliseconds and
we want it in seconds */

/*Counting operations(Excluding performance):
Total number of opeartions:  [for loop(n), +=(n additions, n assignments), i++(shorthand for i+=1, n additions, n assignments)
=(1 assignment), <=(n comparisons)] = 5n + 2
As n grows larger, time also grows*/
//Big O: O(n) (Number of operations is bounded by a multiple of n)

function add(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total
} //console.log(add(4))
let t1 = performance.now();
add(100000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2-t1) / 1000} seconds.`)


/*Solution 2*/
/*This involves mathematical formula*/

/*Counting operations(excluding performance): 
Total number of operations: 3 (*,+,/)*/
//Big O: O(1) (Always 3 operations)

function add1(n) {
    return n * (n + 1) / 2;
} //console.log(add(4))
let t1 = performance.now();
add(100000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2-t1) / 1000} seconds.`)
