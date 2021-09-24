//Program to count up and down
//Big O: O(n)

function countupdown(n) {
    console.log("Going up");
    for (let i = 0; i < n; i++) {
    console.log(i);
}
console.log("At the top!\nGoing down...");
for (let j = n-1; j >= 0; j--) {
    console.log(j);
}
console.log("Back down");
}